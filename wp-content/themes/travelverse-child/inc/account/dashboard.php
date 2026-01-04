<?php
$user = wp_get_current_user();
?>

<h2>Welcome back, <?php echo esc_html($user->display_name); ?> 👋</h2>

<ul class="tv-account-menu">
    <li><a href="?tab=bookings">My Trips</a></li>
    <li><a href="?tab=profile">Profile</a></li>
    <li><a href="<?php echo wp_logout_url(home_url()); ?>">Logout</a></li>
</ul>

<div class="tv-account-content">
<?php
$tab = $_GET['tab'] ?? 'bookings';

switch ($tab) {
    case 'profile':
        require __DIR__ . '/profile.php';
        break;

    default:
        require __DIR__ . '/bookings.php';
}
?>
</div>
