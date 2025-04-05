<?php

namespace App\Exports;

use App\Models\Shop;
use Laracsv\Export;

class ShopExport
{
    /**
     * Export shops to CSV
     *
     * @param array $options
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function export(array $options = [])
    {
        $shops = Shop::all();

        $csvExporter = new Export();

        // ヘッダーのマッピング
        $csvExporter->build($shops, [
            'id' => 'ID',
            'name' => '名前',
            'description' => '説明',
            'opening_hours' => '営業時間',
            'status' => 'ステータス',
            'phone_number' => '電話番号',
            'url' => 'URL',
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
        $filename = 'ショップ_' . date('Y-m-d_His') . '.csv';

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
