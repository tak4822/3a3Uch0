<?php

namespace App\Controllers;

use Sober\Controller\Controller;
use WP_Query;

class PageAbout extends Controller
{
    function get_member() {
        $args = array(
            'post_status' => 'publish',
            'post_type' => 'member'
        );
        return new WP_Query( $args );
    }
}
