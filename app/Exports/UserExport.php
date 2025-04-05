<?php

namespace App\Exports;

use App\Models\User;
use Laracsv\Export;

class UserExport
{
    /**
     * Export users to CSV
     *
     * @param array $options
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function export(array $options = [])
    {
        $users = User::all();

        $csvExporter = new Export();

        // カラム名の日本語化
        $csvExporter->beforeEach(function ($user) {
            $user->shop_ids = json_encode($user->shop_ids);
            return $user;
        });

        // ヘッダーのマッピング
        $csvExporter->build($users, [
            'id' => 'ID',
            'name' => '名前',
            'email' => 'メールアドレス',
            'shop_ids' => '所属ショップID',
            'role' => '権限',
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
        $filename = 'ユーザー_' . date('Y-m-d_His') . '.csv';

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
