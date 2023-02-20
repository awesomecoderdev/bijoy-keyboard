const mix = require("laravel-mix");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({ stats: { children: false } })
	.postCss("src/css/app.css", "assets/css", [
		require("postcss-import"),
		require("tailwindcss"),
		require("autoprefixer"),
	])
	.js("src/js/app.js", "assets/js")
	.js("src/js/background.js", "assets/js")
	.js("src/js/serviceworker.js", "assets/js")
	.react()
	.sourceMaps(false, "source-map")
	.disableSuccessNotifications();
