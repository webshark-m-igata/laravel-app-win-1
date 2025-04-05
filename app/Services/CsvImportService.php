<?php

namespace App\Services;

use App\Imports\CommentImport;
use App\Imports\EquipmentImport;
use App\Imports\PostImport;
use App\Imports\ShopImport;
use App\Imports\UserImport;
use App\Imports\WarehouseImport;
use App\Imports\WarehousePostImport;
use League\Csv\Reader;
use League\Csv\Statement;

class CsvImportService
{
    /**
     * Import data from CSV file
     *
     * @param string $filePath
     * @param string $model
     * @param array $options
     * @return array
     */
    public function importFromCsv(string $filePath, string $model, array $options = [])
    {
        try {
            // Get options
            $hasHeader = $options['has_header'] ?? true;
            $updateExisting = $options['update_existing'] ?? true;
            $encodingOption = $options['encoding'] ?? 'auto';

            // Read file content
            $content = file_get_contents($filePath);
            if ($content === false) {
                return ['success' => false, 'message' => 'CSVファイルを読み込めませんでした。'];
            }

            // Detect and convert encoding
            if ($encodingOption === 'auto') {
                $encoding = mb_detect_encoding($content, ['UTF-8', 'SJIS-win', 'eucJP-win', 'ASCII'], true);
                if (!$encoding) {
                    $encoding = 'UTF-8'; // Default to UTF-8
                }
            } else {
                $encoding = $encodingOption === 'SJIS' ? 'SJIS-win' : 'UTF-8';
            }

            if ($encoding !== 'UTF-8') {
                $content = mb_convert_encoding($content, 'UTF-8', $encoding);
            }

            // Remove BOM if present
            $bom = pack('H*', 'EFBBBF');
            if (strncmp($content, $bom, 3) === 0) {
                $content = substr($content, 3);
            }

            // Write to temporary file
            $tempFile = tempnam(sys_get_temp_dir(), 'csv_import_');
            file_put_contents($tempFile, $content);

            // Create CSV reader
            $csv = Reader::createFromPath($tempFile, 'r');
            $csv->setHeaderOffset($hasHeader ? 0 : null);

            // Auto-detect delimiter
            $delimiter = $this->detectDelimiter($tempFile);
            $csv->setDelimiter($delimiter);

            // Get column mapping
            $columnLabels = $this->getColumnLabels($model);
            $columnKeys = array_flip($columnLabels);

            // Process CSV records
            $records = Statement::create()->process($csv);

            $errors = [];
            $successCount = 0;
            $row = $hasHeader ? 2 : 1; // Start from row 2 if has header, otherwise from row 1

            foreach ($records as $record) {
                // Skip empty rows
                if (count(array_filter($record)) === 0) {
                    $row++;
                    continue;
                }

                // Map headers if needed
                $data = [];
                if ($hasHeader) {
                    foreach ($record as $header => $value) {
                        $key = $columnKeys[$header] ?? $header;
                        $data[$key] = $value;
                    }
                } else {
                    $keys = array_keys($columnLabels);
                    $i = 0;
                    foreach ($record as $value) {
                        $key = isset($keys[$i]) ? $keys[$i] : 'column_' . ($i + 1);
                        $data[$key] = $value;
                        $i++;
                    }
                }

                // Import data based on model type
                $result = $this->importModelData($model, $data, $updateExisting);

                if (!$result['success']) {
                    $errors[] = "行 {$row}: " . $result['message'];
                } else {
                    $successCount++;
                }

                $row++;
            }

            // Clean up
            unlink($tempFile);

            // Return result
            if (!empty($errors)) {
                if ($successCount > 0) {
                    return [
                        'success' => true,
                        'warning' => $successCount . '件のデータをインポートしましたが、' . count($errors) . '件のエラーがありました。',
                        'errors' => $errors
                    ];
                } else {
                    return ['success' => false, 'message' => 'インポートに失敗しました。', 'errors' => $errors];
                }
            }

            return ['success' => true, 'message' => $successCount . '件のデータをインポートしました。'];
        } catch (\Exception $e) {
            return ['success' => false, 'message' => 'インポート処理中にエラーが発生しました: ' . $e->getMessage()];
        }
    }

    /**
     * Detect CSV delimiter
     *
     * @param string $filePath
     * @return string
     */
    private function detectDelimiter(string $filePath): string
    {
        $firstLine = file($filePath)[0] ?? '';

        if (strpos($firstLine, "\t") !== false) {
            return "\t";
        } elseif (strpos($firstLine, ';') !== false && strpos($firstLine, ',') === false) {
            return ';';
        }

        return ',';
    }

    /**
     * Import model data
     *
     * @param string $model
     * @param array $data
     * @param bool $updateExisting
     * @return array
     */
    private function importModelData(string $model, array $data, bool $updateExisting): array
    {
        switch ($model) {
            case 'users':
                $importer = new UserImport();
                return $importer->import($data, $updateExisting);

            case 'shops':
                $importer = new ShopImport();
                return $importer->import($data, $updateExisting);

            case 'posts':
                $importer = new PostImport();
                return $importer->import($data, $updateExisting);

            case 'warehouses':
                $importer = new WarehouseImport();
                return $importer->import($data, $updateExisting);

            case 'equipments':
                $importer = new EquipmentImport();
                return $importer->import($data, $updateExisting);

            case 'comments':
                $importer = new CommentImport();
                return $importer->import($data, $updateExisting);

            case 'warehouse_posts':
                $importer = new WarehousePostImport();
                return $importer->import($data, $updateExisting);

            default:
                return ['success' => false, 'message' => '未対応のモデルタイプです。'];
        }
    }

    /**
     * Get column labels for each model
     *
     * @param string $model
     * @return array
     */
    private function getColumnLabels(string $model): array
    {
        switch ($model) {
            case 'users':
                return [
                    'id' => 'ID',
                    'name' => '名前',
                    'email' => 'メールアドレス',
                    'shop_ids' => '所属ショップID',
                    'role' => '権限',
                    'created_at' => '作成日時',
                    'updated_at' => '更新日時',
                ];

            case 'shops':
                return [
                    'id' => 'ID',
                    'name' => '名前',
                    'description' => '説明',
                    'opening_hours' => '営業時間',
                    'status' => 'ステータス',
                    'phone_number' => '電話番号',
                    'url' => 'URL',
                    'created_at' => '作成日時',
                    'updated_at' => '更新日時',
                ];

            case 'posts':
                return [
                    'id' => 'ID',
                    'title' => 'タイトル',
                    'content' => '内容',
                    'shop_id' => 'ショップID',
                    'user_id' => 'ユーザーID',
                    'photo' => '写真',
                    'created_at' => '作成日時',
                    'updated_at' => '更新日時',
                ];

            case 'warehouses':
                return [
                    'id' => 'ID',
                    'name' => '名前',
                    'address' => '住所',
                    'phone_number' => '電話番号',
                    'email' => 'メールアドレス',
                    'created_at' => '作成日時',
                    'updated_at' => '更新日時',
                ];

            case 'equipments':
                return [
                    'id' => 'ID',
                    'name' => '名前',
                    'description' => '説明',
                    'created_at' => '作成日時',
                    'updated_at' => '更新日時',
                ];

            case 'comments':
                return [
                    'id' => 'ID',
                    'post_id' => '投稿ID',
                    'user_id' => 'ユーザーID',
                    'content' => '内容',
                    'image' => '画像',
                    'created_at' => '作成日時',
                    'updated_at' => '更新日時',
                ];

            case 'warehouseposts':
                return [
                    'id' => 'ID',
                    'warehouse_id' => '倉庫ID',
                    'title' => 'タイトル',
                    'content' => '内容',
                    'user_id' => 'ユーザーID',
                    'created_at' => '作成日時',
                    'updated_at' => '更新日時',
                ];

            default:
                return [];
        }
    }
}
