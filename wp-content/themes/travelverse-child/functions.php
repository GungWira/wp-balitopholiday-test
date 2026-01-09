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

add_action( 'init', function () {

	register_block_pattern(
		'travelverse-child/test-text',
		array(
			'title'       => __( 'Test Text Pattern', 'travelverse-child' ),
			'description' => __( 'Pattern test sederhana dari child theme.', 'travelverse-child' ),
			'categories'  => array( 'text' ),
			'content'     => file_get_contents(
				get_stylesheet_directory() . '/patterns/test-text.html'
			),
		)
	);

});

add_action('wp_enqueue_scripts', 'travelverse_child_enqueue_trip_card_css');
function travelverse_child_enqueue_trip_card_css() {

    wp_enqueue_style(
        'travelverse-child-trip-card',
        get_stylesheet_directory_uri() . '/assets/css/trip-card.css',
        array(),             
        wp_get_theme()->get('Version')
    );

}
