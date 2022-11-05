<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'stealthdesign' );

/** Database username */
define( 'DB_USER', 'stealthdesign' );

/** Database password */
define( 'DB_PASSWORD', 'jhSH4qh5l3vWH4p' );

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
define( 'AUTH_KEY',         '?0]Z6!2Vxf-|[+07?2!<J`NvirRU#}{zC%IR_rgbTkf4&.q;pRVm:2YHxp,}u=jH' );
define( 'SECURE_AUTH_KEY',  '%Ax-aO~L9v8%}m@,k(o6K[zkQjsW})7*c$/*TLiG9wc9CJ`@O%[YqD_(7T+_c9ab' );
define( 'LOGGED_IN_KEY',    'II^~}S]GfG*V.B-f=<jy5?}&r;ah^bFBtE%z%jE>b@7F6gzv3u7r[wdVH1uCrj.z' );
define( 'NONCE_KEY',        'tj.Qx$dH$|8eHLJSH(|e@-U_vC)5<!6MxB< x>Ou @5(IK(~k=h;U#Drh!.MQi,V' );
define( 'AUTH_SALT',        'ZA/BXoi,91F9_Nfrm<y_,I6aJqXy28hTY7~,*/|{5#DW_aNp519.x.;? PRbQ`#1' );
define( 'SECURE_AUTH_SALT', '~UT=J3iyuPf&&]4W=Sew_fIFt 4$!jN8-T9kve69D@[0Z!r@9v*tVIIiN<mc3&t8' );
define( 'LOGGED_IN_SALT',   'mICnm{|s<x2B*bL$Bm(sw2eKVmnu-/oR @.UUhG(D.0xuT_,V`@LzfnyMu1)#DK%' );
define( 'NONCE_SALT',       'O1bgeV):lPgrCxt@y2ge}fjU^n}g^Vkt-zPl!YDDoRR)w+8/>9?6SL|z(7.NF=?`' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'pi_';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
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
