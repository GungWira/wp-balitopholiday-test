<?php
/**
 * Travelverse Child Theme
 */
require_once get_stylesheet_directory() . '/inc/shortcodes.php';

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'travelverse-child-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );
});

add_action( 'init', function () {
    register_block_type( get_stylesheet_directory() . '/blocks/user-auth' );
});

// Load auth CSS
add_action('wp_enqueue_scripts', function () {
    if (is_page('my-account')) {
        wp_enqueue_style(
            'auth-style',
            get_stylesheet_directory_uri() . '/assets/css/auth.css',
            [],
            '1.0'
        );
    }
});