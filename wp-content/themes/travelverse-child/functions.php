<?php
/**
 * Travelverse Child Theme
 */
require_once get_stylesheet_directory() . '/inc/shortcodes.php';
require_once get_stylesheet_directory() . '/inc/points/points.php';

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

add_action('user_register', function ($user_id) {
    if (!get_user_meta($user_id, 'btp_points', true)) {
        update_user_meta($user_id, 'btp_points', 0);
    }
});

// add_action('init', function () {
//     if (!current_user_can('administrator')) return;

//     $users = get_users([
//         'meta_key' => 'btp_points',
//         'meta_compare' => 'NOT EXISTS'
//     ]);

//     foreach ($users as $user) {
//         add_user_meta($user->ID, 'btp_points', 0, true);
//     }
// });
