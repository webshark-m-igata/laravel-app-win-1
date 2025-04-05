<?php

namespace App\Exports;

use App\Models\Warehouse;
use Laracsv\Export;

class WarehouseExport
{
    /**
     * Export warehouses to CSV
     *
     * @param array $options
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function export(array $options = [])
    {
        $warehouses = Warehouse::all();

        $csvExporter = new Export();

        // ヘッダーのマッピング
        $csvExporter->build($warehouses, [
            'id' => 'ID',
            'name' => '名前',
            'address' => '住所',
            'phone_number' => '電話番号',
            'email' => 'メールアドレス',
            'created_at' => '作成日時',
            'updated_at' => '更新日時',
        ]);

        // エンコーディングの設定
        $encoding = $options['encoding'] ?? 'UTF-8';

        // 区切り文字の設定
        $delimiter = ',';
        if (isset($options['delimiter'])) {
            switch ($options['delimiter']) {
                case 'tab':
                    $delimiter = "\t";
                    break;
                case 'semicolon':
                    $delimiter = ';';
                    break;
            }
        }

        // ファイル名の設定
        $filename = '倉庫_' . date('Y-m-d_His') . '.csv';

        // CSVをダウンロード - StreamedResponseを使用
        return response()->streamDownload(function() use ($csvExporter, $filename, $delimiter, $encoding) {
            // BOMを追加
            echo "\xEF\xBB\xBF";
            // CSVの内容を出力
            $csvExporter->getWriter()->setDelimiter($delimiter);
            echo $csvExporter->getWriter()->getContent();
        }, $filename, [
            'Content-Type' => 'text/csv; charset=' . $encoding,
            'Content-Disposition' => 'attachment; filename="' . $filename . '"',
        ]);
    }
}
