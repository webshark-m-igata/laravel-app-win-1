import React, { useState, useRef, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import { router } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';
import { Message } from 'primereact/message';

export default function CsvIndex({ models, encodings }) {
    const toast = useRef(null);

    const [exportForm, setExportForm] = useState({
        model: 'users',
        encoding: 'UTF-8',
        has_header: true,
    });

    const [showCommentHelp, setShowCommentHelp] = useState(false);
    const [showCommentImportHelp, setShowCommentImportHelp] = useState(false);

    const { data, setData, post, processing, errors, reset, progress } = useForm({
        model: 'users',
        csv_file: null,
        encoding: 'UTF-8',
        has_header: true,
        update_existing: true,
    });

    const handleExportChange = (e) => {
        const { name, value, type, checked } = e.target;
        setExportForm({
            ...exportForm,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleDropdownChange = (e, field) => {
        if (field === 'export') {
            setExportForm({
                ...exportForm,
                model: e.value
            });
            setShowCommentHelp(e.value === 'comments');
        } else {
            setData('model', e.value);
            setShowCommentImportHelp(e.value === 'comments');
        }
    };

    const handleEncodingChange = (e, field) => {
        if (field === 'export') {
            setExportForm({
                ...exportForm,
                encoding: e.value
            });
        } else {
            setData('encoding', e.value);
        }
    };

    const handleImportChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : type === 'file' ? e.target.files[0] : value,
        });
    };

    const submitExport = (e) => {
        e.preventDefault();

        // CSVエクスポートはGETリクエストでダウンロードを開始するため、URLを構築してウィンドウを開く
        const queryParams = new URLSearchParams({
            model: exportForm.model,
            encoding: exportForm.encoding,
            has_header: exportForm.has_header ? '1' : '0',
        }).toString();

        window.open(`/admin/csv/export?${queryParams}`, '_blank');

        toast.current.show({
            severity: 'success',
            summary: 'エクスポート開始',
            detail: 'CSVファイルのダウンロードが始まります',
            life: 3000
        });
    };

    const submitImport = (e) => {
        e.preventDefault();
        post('/admin/csv/import', {
            forceFormData: true,
            onSuccess: () => {
                reset('csv_file');
                toast.current.show({
                    severity: 'success',
                    summary: 'インポート成功',
                    detail: 'CSVファイルのインポートが完了しました',
                    life: 3000
                });
            },
            onError: (errors) => {
                console.error('インポートエラー:', errors);

                // バリデーションエラーの詳細を表示
                let errorMessage = 'CSVファイルのインポートに失敗しました';
                if (errors?.response?.data?.errors) {
                    // バリデーションエラーをフォーマット
                    errorMessage = Object.entries(errors.response.data.errors)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join('\n');
                } else if (errors?.response?.data?.message) {
                    errorMessage = errors.response.data.message;
                }

                toast.current.show({
                    severity: 'error',
                    summary: 'インポートエラー',
                    detail: errorMessage,
                    life: 3000
                });
            }
        });
    };

    return (
        <AuthenticatedLayout
        header={<h2 className="text-xl font-semibold leading-tight text-gray-800">CSV管理</h2>}
        >
        <Toast ref={toast} />



            <Head title="CSVインポート/エクスポート" />
            <div className="py-12 pt-4">

                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <Card className="shadow-lg">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-4 flex items-center">
                                <i className="pi pi-download mr-2"></i>
                                CSVエクスポート
                            </h2>
                            <p className="mb-4 text-gray-600">
                                データをCSVファイルとしてエクスポートします。
                            </p>

                            <form onSubmit={submitExport} className="p-fluid">
                                        <div className="mb-4 field">
                                            <InputLabel htmlFor="export_model" value="モデル" className="mb-2" />
                                            <Dropdown
                                                id="export_model"
                                                value={exportForm.model}
                                                options={models}
                                                onChange={(e) => handleDropdownChange(e, 'export')}
                                                optionLabel="label"
                                                optionValue="value"
                                                placeholder="モデルを選択"
                                                className="w-full"
                                            />
                                            {showCommentHelp && (
                                                <Message severity="info" text="コメントのエクスポートには投稿ID(post_id)と倉庫投稿ID(warehouse_post_id)の両方が含まれます。" className="mt-2" />
                                            )}
                                        </div>

                                        <div className="mb-4 field">
                                            <InputLabel htmlFor="export_encoding" value="エンコーディング" className="mb-2" />
                                            <Dropdown
                                                id="export_encoding"
                                                value={exportForm.encoding}
                                                options={encodings}
                                                onChange={(e) => handleEncodingChange(e, 'export')}
                                                optionLabel="label"
                                                optionValue="value"
                                                placeholder="エンコーディングを選択"
                                                className="w-full"
                                            />
                                        </div>

                                        <div className="mb-4 field-checkbox">
                                            <label className="flex items-center">
                                                <Checkbox
                                                    name="has_header"
                                                    checked={exportForm.has_header}
                                                    onChange={handleExportChange}
                                                    className="mr-2"
                                                />
                                                <span>ヘッダー行を含める</span>
                                            </label>
                                        </div>

                                        <div className="flex justify-end">
                                            <Button
                                                type="submit"
                                                label="エクスポート"
                                                icon="pi pi-download"
                                                className="p-button-primary"
                                            />
                                        </div>
                                    </form>
                                </div>

                                <Divider className="my-5" />

                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                                        <i className="pi pi-upload mr-2"></i>
                                        CSVインポート
                                    </h2>
                                    <p className="mb-4 text-gray-600">
                                        CSVファイルからデータをインポートします。
                                    </p>

                                    <form onSubmit={submitImport} className="p-fluid" encType="multipart/form-data">
                                        <div className="mb-4 field">
                                            <InputLabel htmlFor="import_model" value="モデル" className="mb-2" />
                                            <Dropdown
                                                id="import_model"
                                                value={data.model}
                                                options={models}
                                                onChange={(e) => handleDropdownChange(e, 'import')}
                                                optionLabel="label"
                                                optionValue="value"
                                                placeholder="モデルを選択"
                                                className="w-full"
                                            />
                                            <InputError message={errors.model} className="mt-2" />
                                            {showCommentImportHelp && (
                                                <Message severity="info" text="コメントのインポートでは、投稿ID(post_id)または倉庫投稿ID(warehouse_post_id)のいずれかが必要です。両方を指定することもできます。" className="mt-2" />
                                            )}
                                        </div>

                                        <div className="mb-4 field">
                                            <InputLabel htmlFor="csv_file" value="CSVファイル" className="mb-2" />
                                            <FileUpload
                                                id="csv_file"
                                                name="csv_file"
                                                accept=".csv,.txt"
                                                maxFileSize={10000000}
                                                emptyTemplate={<p className="m-0">ここにCSVファイルをドラッグ&ドロップするか、クリックしてアップロードしてください。</p>}
                                                onSelect={(e) => {
                                                    const file = e.files[0];
                                                    setData('csv_file', file);
                                                }}
                                                chooseLabel="選択"
                                                uploadLabel="アップロード"
                                                cancelLabel="キャンセル"
                                                className="mb-2"
                                                mode="basic"
                                                auto
                                                customUpload
                                                uploadHandler={(e) => e.options.clear()}
                                            />
                                            <InputError message={errors.csv_file} className="mt-2" />
                                            {progress && (
                                                <ProgressBar value={progress.percentage} showValue={true} className="mt-2" />
                                            )}
                                        </div>

                                        <div className="mb-4 field">
                                            <InputLabel htmlFor="import_encoding" value="エンコーディング" className="mb-2" />
                                            <Dropdown
                                                id="import_encoding"
                                                value={data.encoding}
                                                options={encodings}
                                                onChange={(e) => handleEncodingChange(e, 'import')}
                                                optionLabel="label"
                                                optionValue="value"
                                                placeholder="エンコーディングを選択"
                                                className="w-full"
                                            />
                                            <InputError message={errors.encoding} className="mt-2" />
                                        </div>

                                        <div className="mb-4 field-checkbox">
                                            <label className="flex items-center">
                                                <Checkbox
                                                    name="has_header"
                                                    checked={data.has_header}
                                                    onChange={handleImportChange}
                                                    className="mr-2"
                                                />
                                                <span>ヘッダー行を含む</span>
                                            </label>
                                            <InputError message={errors.has_header} className="mt-2" />
                                        </div>

                                        <div className="mb-4 field-checkbox">
                                            <label className="flex items-center">
                                                <Checkbox
                                                    name="update_existing"
                                                    checked={data.update_existing}
                                                    onChange={handleImportChange}
                                                    className="mr-2"
                                                />
                                                <span>既存のデータを更新する</span>
                                            </label>
                                            <InputError message={errors.update_existing} className="mt-2" />
                                        </div>

                                        <div className="flex justify-end">
                                            <Button
                                                type="submit"
                                                label="インポート"
                                                icon="pi pi-upload"
                                                className="p-button-primary"
                                                disabled={processing}
                                            />
                                        </div>
                                    </form>
                                </div>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
