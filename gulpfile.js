// Elixir
var elixir = require('laravel-elixir');

// Extensions
require('laravel-elixir-mocha');

// Plugins & Config
var $ = elixir.Plugins;
var config = elixir.config;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.scripts('./js/*.js', $.if(config.production, './dist/js/schrouder.min.js', './dist/js/schrouder.js'))
});


// Test only when not production
// if(config.production == false) {
//     elixir(function(mix) {
//         mix.mocha('./tests/tests.js')
//     });
// }
