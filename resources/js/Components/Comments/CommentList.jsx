import React, { useState } from 'react';
import { useForm, router } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import InputLabel from '@/Components/InputLabel';

export default function CommentList({ comments, postId, auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        content: '',
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('comments.store', postId), {
            onSuccess: () => {
                reset();
                setImagePreview(null);
            },
        });
    };

    const handleImageChange = (e) => {
        const file = e.files[0];
        if (file) {
            setData('image', file);

            // プレビュー用のURLを作成
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDelete = (commentId) => {
        if (confirm('このコメントを削除してもよろしいですか？')) {
            router.delete(route('comments.destroy', commentId));
        }
    };

    // コメント日時のフォーマット関数
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold">コメント</h3>

            {/* コメント投稿フォーム */}
            <form onSubmit={handleSubmit} className="mb-6" encType="multipart/form-data">
                <div className="mb-2">
                    <InputTextarea
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        rows={3}
                        placeholder="コメントを入力してください"
                        className="p-2 w-full"
                        required
                    />
                    <InputError message={errors.content} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="image" value="画像（任意）" />
                    <FileUpload
                        id="image"
                        name="image"
                        accept="image/*"
                        maxFileSize={2000000}
                        emptyTemplate={<p className="m-0">ここに画像をドラッグ&ドロップするか、クリックしてアップロードしてください。</p>}
                        onSelect={handleImageChange}
                        chooseLabel="選択"
                        uploadLabel="アップロード"
                        cancelLabel="キャンセル"
                        className="mt-1"
                        auto
                        customUpload
                        uploadHandler={(e) => e.options.clear()}
                    />
                    <InputError message={errors.image} className="mt-2" />

                    {imagePreview && (
                        <div className="relative mt-2">
                            <p className="mb-2 text-sm">プレビュー:</p>
                            <div className="inline-block relative">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="max-w-xs rounded-md"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setData('image', null);
                                        setImagePreview(null);
                                    }}
                                    className="flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex justify-end">
                    <PrimaryButton disabled={processing}>
                        コメントを投稿
                    </PrimaryButton>
                </div>
            </form>

            {/* コメント一覧 */}
            <div className="space-y-4">
                {comments && comments.length > 0 ? (
                    comments.map((comment) => (
                        <Card key={comment.id} className="shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center mb-2">
                                        <i className="mr-2 pi pi-user" />
                                        <span className="font-semibold">{comment.user.name}</span>
                                        <span className="ml-2 text-sm text-gray-500">{formatDate(comment.created_at)}</span>
                                    </div>
                                    <p className="whitespace-pre-wrap">{comment.content}</p>
                                    {comment.image_path && (
                                        <div className="mt-2">
                                            <img
                                                src={`/storage/${comment.image_path}`}
                                                alt="コメント画像"
                                                className="mt-2 max-w-xs rounded-md"
                                            />
                                        </div>
                                    )}
                                </div>
                                {auth.user && auth.user.id === comment.user_id && (
                                    <Button
                                        icon="pi pi-trash"
                                        className="p-button-rounded p-button-danger p-button-text"
                                        onClick={() => handleDelete(comment.id)}
                                        tooltip="削除"
                                    />
                                )}
                            </div>
                        </Card>
                    ))
                ) : (
                    <p className="py-4 text-center text-gray-500">コメントはまだありません</p>
                )}
            </div>
        </div>
    );
}
