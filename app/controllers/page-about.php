<?php

namespace App\Controllers;

use Sober\Controller\Controller;
use WP_Query;

class PageAbout extends Controller
{
    function get_member() {
        $args = array(
            'post_status' => 'publish',
            'post_type' => 'member',
            'orderby' => 'date',
            'order' => 'DESC'
        );
        return new WP_Query( $args );
    }

    function get_news() {
        $args = array(
            'post_status' => 'publish',
            'post_type' => 'news',

        );
        return new WP_Query( $args );
    }

}
