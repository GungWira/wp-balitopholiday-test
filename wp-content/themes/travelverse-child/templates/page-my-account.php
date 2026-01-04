<?php
/* Template Name: Custom My Account */
defined('ABSPATH') || exit;

get_header();
?>

<div class="auth-container">

    <!-- LEFT SIDE -->
    <div class="auth-left">
        <div class="auth-logo">
            <div class="logo-icon">
                <!-- SVG logo kamu -->
            </div>
            <div class="logo-text">Bali Trip Planner</div>
        </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="auth-right">
        <div class="auth-form">

            <?php if ( ! is_user_logged_in() ) : ?>

                <h1>Login</h1>
                <p class="subtitle">Masuk untuk mengatur perjalananmu</p>

                <?php
                wp_login_form([
                    'redirect'       => site_url('/my-account'),
                    'label_username' => 'Email',
                    'label_password' => 'Password',
                    'label_log_in'   => 'Login',
                    'remember'       => true,
                ]);
                ?>

                <p class="auth-register">
                    Belum punya akun?
                    <a href="<?php echo esc_url( wp_registration_url() ); ?>">
                        Register
                    </a>
                </p>

            <?php else : ?>

                <?php
                echo do_shortcode('[wp_travel_engine_dashboard]');
                ?>

            <?php endif; ?>

        </div>
    </div>

</div>

<?php get_footer(); ?>
