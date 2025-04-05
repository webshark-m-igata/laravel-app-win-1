<?php

namespace App\Http\Controllers;

use App\Exports\CommentExport;
use App\Exports\EquipmentExport;
use App\Exports\PostExport;
use App\Exports\ShopExport;
use App\Exports\UserExport;
use App\Exports\WarehouseExport;
use App\Exports\WarehousePostExport;
use App\Services\CsvImportService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AdminCsvController extends Controller
{
    /**
     * CSVインポート/エクスポート画面を表示
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Csv/Index', [
            'models' => [
                ['value' => 'users', 'label' => 'ユーザー'],
                ['value' => 'shops', 'label' => 'ショップ'],
                ['value' => 'posts', 'label' => '投稿'],
                ['value' => 'warehouses', 'label' => '倉庫'],
                ['value' => 'equipments', 'label' => '機材'],
                ['value' => 'comments', 'label' => 'コメント'],
                ['value' => 'warehouse_posts', 'label' => '倉庫投稿'],
            ],
            'encodings' => [
                ['value' => 'UTF-8', 'label' => 'UTF-8'],
                ['value' => 'SJIS', 'label' => 'Shift-JIS'],
                ['value' => 'auto', 'label' => '自動検出'],
            ],
        ]);
    }

    /**
     * CSVエクスポート
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function export(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'model' => 'required|string|in:users,shops,posts,warehouses,equipments,comments,warehouse_posts',
            'encoding' => 'required|string|in:UTF-8,SJIS,auto',
            'has_header' => 'boolean',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        $model = $request->input('model');
        $encoding = $request->input('encoding', 'UTF-8');
        $hasHeader = $request->input('has_header', true);

        $options = [
            'encoding' => $encoding,
            'has_header' => $hasHeader,
        ];

        $filename = $model . '_' . date('YmdHis') . '.csv';

        switch ($model) {
            case 'users':
                $exporter = new UserExport();
                break;
            case 'shops':
                $exporter = new ShopExport();
                break;
            case 'posts':
                $exporter = new PostExport();
                break;
            case 'warehouses':
                $exporter = new WarehouseExport();
                break;
            case 'equipments':
                $exporter = new EquipmentExport();
                break;
            case 'comments':
                $exporter = new CommentExport();
                break;
            case 'warehouse_posts':
                $exporter = new WarehousePostExport();
                break;
            default:
                return redirect()->back()->with('error', '無効なモデルが指定されました。');
        }

        // StreamedResponseオブジェクトをそのまま返す
        return $exporter->export($options);
    }

    /**
     * CSVインポート
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function import(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'model' => 'required|string|in:users,shops,posts,warehouses,equipments,comments,warehouse_posts',
            'csv_file' => 'required|file|mimes:csv,txt|max:10240',
            'encoding' => 'required|string|in:UTF-8,SJIS,auto',
            'has_header' => 'boolean',
            'update_existing' => 'boolean',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        $model = $request->input('model');
        $encoding = $request->input('encoding', 'auto');
        $hasHeader = $request->boolean('has_header', true);
        $updateExisting = $request->boolean('update_existing', true);

        if (!$request->hasFile('csv_file')) {
            return redirect()->back()->withErrors(['csv_file' => 'CSVファイルが見つかりません。']);
        }

        $file = $request->file('csv_file');
        $path = $file->getRealPath();

        $options = [
            'encoding' => $encoding,
            'has_header' => $hasHeader,
            'update_existing' => $updateExisting,
        ];

        $importService = new CsvImportService();
        $result = $importService->importFromCsv($path, $model, $options);

        if ($result['success']) {
            $message = $result['message'] ?? ($result['warning'] ?? 'インポートが完了しました。');
            return redirect()->back()->with('success', $message);
        } else {
            $message = $result['message'] ?? 'インポート中にエラーが発生しました。';
            $errors = $result['errors'] ?? [];

            if (!empty($errors)) {
                return redirect()->back()->withErrors($errors)->with('error', $message);
            }
            return redirect()->back()->with('error', $message);
        }
    }
}
