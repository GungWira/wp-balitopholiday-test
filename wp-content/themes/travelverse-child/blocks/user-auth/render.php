<?php
if ( ! defined( 'ABSPATH' ) ) exit;

if ( is_user_logged_in() ) {
    $user = wp_get_current_user();
    ?>
    <div class="tv-user-auth logged-in">
        <img src="<?php echo esc_url( get_avatar_url( $user->ID ) ); ?>" class="tv-avatar" />
        <span class="tv-username"><?php echo esc_html( $user->display_name ); ?></span>
        <a href="<?php echo esc_url( wp_logout_url() ); ?>" class="tv-logout">Logout</a>
    </div>
    <?php
} else {
    ?>
    <div class="tv-user-auth logged-out">
        <a href="<?php echo esc_url( wp_login_url() ); ?>" class="tv-login">Login</a>
        <a href="<?php echo esc_url( wp_registration_url() ); ?>" class="tv-register">Register</a>
    </div>
    <?php
}
