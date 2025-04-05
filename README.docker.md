# Laravel Inertia+React Docker環境

このリポジトリには、Laravel Inertia+Reactアプリケーションを簡単に実行するためのDocker設定が含まれています。

## 環境構成

- PHP 8.3 + Apache
- Node.js 22
- PostgreSQL 16
- Laravel + Inertia.js + React

## 使い方

### 開発環境の起動

```bash
# Docker Composeを使用して環境を起動
docker-compose up -d
```

以下のサービスが起動します：
- Webアプリケーション: http://localhost:8000
- Vite開発サーバー: http://localhost:3000

### 開発モードでの作業

開発中は、Viteの開発サーバーを使用することで、ホットリロードが有効になります：

```bash
# nodeサービスが自動的にnpm run devを実行します
# 変更を加えると自動的にブラウザが更新されます
```

### コマンドの実行

LaravelのArtisanコマンドを実行する場合：

```bash
docker-compose exec app php artisan <コマンド>
```

Node.jsコマンドを実行する場合：

```bash
docker-compose exec node npm <コマンド>
```

### 本番環境用ビルド

本番環境用にアセットをビルドする場合：

```bash
docker-compose exec node npm run build
```

## 環境変数の設定

`.env`ファイルでデータベース接続などの設定を行います。Docker Compose環境では以下の設定がデフォルトで使用されます：

```
DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=postgres
DB_PASSWORD=password
```

## トラブルシューティング

### パーミッションの問題

ストレージディレクトリに書き込み権限がない場合：

```bash
docker-compose exec app chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
```

### データベース接続の問題

データベースに接続できない場合は、`.env`ファイルの設定を確認してください。

### Viteの開発サーバーが動作しない

Viteの開発サーバーが正しく動作しない場合：

```bash
docker-compose restart node
```
