<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress-bth' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'hj9]rC^xP4bSMkEHZw/JhR%5mv(F.{/iUSAw%L4>^t)Q}dX_/%<4:9zOl?Re`G<c' );
define( 'SECURE_AUTH_KEY',  '(MBK1wXjB:iDG$!*F/(~%A2;XtuK6D8W!:T/>i0$9-W(#gFU@0bI5i~ADqr95 q:' );
define( 'LOGGED_IN_KEY',    '%*`.9UQ 8?e^`j=xuzb#Bv|:kSpAAy^On{MeDM1rGjOL!y(z[Y#_#eAvaZMa`UBM' );
define( 'NONCE_KEY',        'I@?:.$nAz<7}P?/l17KXlc..n9=}%@fMjC_|F8<S2N1~Yh [j|7`N~#^.5v.^_P1' );
define( 'AUTH_SALT',        '~e7<PP,d#ZagPCc1=BdC(~JuX=_o`lTbz%lXKY;`FPFAi0yo}8J&GPwr2E14~v+s' );
define( 'SECURE_AUTH_SALT', 'sa:S?H&t3AHrFz[c%ZPtfP(k{[ .,|Ua|p+)@-a@M_jZ5)pqF!uH?xUXq7|~?+hC' );
define( 'LOGGED_IN_SALT',   'HezwbSU9-%v!f?,?nN>6#{[l=w}{+B^S=}q!FcQ$1#{-]]Fk~z74V,OMUnR9!2np' );
define( 'NONCE_SALT',       'L6{~KGA3Aao|.%peu05!vz| N@o|b/H9Y~z[yrek}53:=Fae_Qm4OMCD[zYNa#m6' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
