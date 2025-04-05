FROM node:22-slim as node-builder

COPY . ./laravel-app
RUN cd /laravel-app && npm ci && npm run prod


FROM php:8.3-apache

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd \
    && docker-php-ext-install gd pdo pdo_mysql

# パッケージのクリーンアップ
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# PHPの設定ファイルのコピー

# Composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 依存関係のインストール
RUN composer install --no-dev --optimize-autoloader

RUN npm install

# パーミッションの設定
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Apacheのmod_rewriteを有効化
RUN a2enmod rewrite

# ポートの公開
EXPOSE 80

# Apacheの起動
CMD ["apache2-foreground"]

RUN npm install vite

RUN npm run dev
