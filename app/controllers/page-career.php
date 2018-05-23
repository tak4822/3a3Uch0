<?php

namespace App\Controllers;

use Sober\Controller\Controller;
use WP_Query;

class PageCareer extends Controller
{
    function get_career() {
        $args = array(
            'post_status' => 'publish',
            'post_type' => 'recruting',
            'orderby' => 'date',
            'order' => 'DESC'
        );
        return new WP_Query( $args );
    }

}
