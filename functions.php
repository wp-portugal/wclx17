<?php
/**
 * Enqueue the parent theme style.
 *
 * @since 1.0.0
 */
add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
} );
