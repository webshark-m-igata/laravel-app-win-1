# マルチステージビルドを使用してLaravel Inertia+Reactアプリケーションを構築

# ビルドステージ: Node.jsとPHPの依存関係をインストールしてアセットをビルド
FROM node:22-slim as node-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# PHPベースイメージ
FROM php:8.3-apache

# タイムゾーンを設定
ENV TZ=Asia/Tokyo

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-configure gd \
    && docker-php-ext-install gd pdo pdo_mysql pdo_pgsql zip \
    && a2enmod rewrite \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Apacheの設定
COPY docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf

# 作業ディレクトリの設定
WORKDIR /var/www/html

# アプリケーションファイルのコピー
COPY . .

# Node.jsビルドステージからビルド済みアセットをコピー
#COPY --from=node-builder /app/public/build /var/www/html/public/build

# 依存関係のインストール
RUN composer install --no-dev --optimize-autoloader

# パーミッションの設定
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# .envファイルの設定（必要に応じて）
RUN if [ ! -f .env ]; then cp .env.example .env; fi
RUN php artisan key:generate --force

# ポートの公開
EXPOSE 80

# Apacheのmod_rewriteを有効化
RUN a2enmod rewrite

# Apacheの起動
CMD ["apache2-foreground"]

#RUN npm run dev
