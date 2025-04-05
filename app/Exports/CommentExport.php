<?php

namespace App\Exports;

use App\Models\Comment;
use Laracsv\Export;

class CommentExport
{
    /**
     * Export comments to CSV
     *
     * @param array $options
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function export(array $options = [])
    {
        $comments = Comment::all();

        $csvExporter = new Export();

        // ヘッダーのマッピング
        $csvExporter->build($comments, [
            'id' => 'ID',
            'post_id' => '投稿ID',
            'warehouse_post_id' => '倉庫投稿ID',
            'user_id' => 'ユーザーID',
            'content' => '内容',
            'image' => '画像',
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
        $filename = 'コメント_' . date('Y-m-d_His') . '.csv';

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
