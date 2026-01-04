<?php
/**
 * Travelverse Child Theme
 */

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
