<?php
defined('ABSPATH') || exit;

/**
 * Get user points
 */
function btp_get_user_points($user_id = null) {
    $user_id = $user_id ?: get_current_user_id();
    return (int) get_user_meta($user_id, 'btp_points', true);
}

/**
 * Set user points
 */
function btp_set_user_points($user_id, $points) {
    update_user_meta($user_id, 'btp_points', max(0, (int)$points));
}

/**
 * Add user points
 */
function btp_add_user_points($user_id, $points) {
    $current = btp_get_user_points($user_id);
    btp_set_user_points($user_id, $current + (int)$points);
}
