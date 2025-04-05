FROM php:8.3-apache

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd \
    && docker-php-ext-install gd pdo pdo_mysql pdo_pgsql
# GD拡張の有効化
RUN docker-php-ext-install gd
# パッケージのクリーンアップ
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# PHPの設定ファイルのコピー
COPY php.ini /usr/local/etc/php/php.ini
# Apacheの設定ファイルのコピー
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd \
    && docker-php-ext-install gd pdo pdo_mysql pdo_pgsql
# GD拡張の有効化
RUN docker-php-ext-install gd
# パッケージのクリーンアップ
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# Composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 作業ディレクトリの設定
WORKDIR /var/www/html

# アプリケーションファイルのコピー
COPY . .

# 依存関係のインストール
RUN composer install --no-dev --optimize-autoloader

# パーミッションの設定
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Apacheのmod_rewriteを有効化
RUN a2enmod rewrite

# ポートの公開
EXPOSE 80

# Apacheの起動
CMD ["apache2-foreground"]
