<?php

namespace App\Controllers;

use Sober\Controller\Controller;
use WP_Query;

class PageProducts extends Controller
{
    static function products_data() {
        $size = 'normal_thumb';
        if(App::is_mobile()) {
            $size = 'small_thumb';
        }

        $args = array(
            'post_status' => 'publish',
            'post_type' => 'product',
            'orderby' => 'date',
            'order' => 'DESC'
        );
        $the_query = new WP_Query( $args );

        if ( $the_query->have_posts() ) {
            $products_data = array();
            while ( $the_query->have_posts()) {
                $the_query->the_post();
                $title = get_the_title();

                $output = array(
                    'title' => $title,
                    'image' =>  get_the_post_thumbnail_url($the_query->post->ID, $size),
                    'lead' => get_field('lead'),
                    'subImage' => get_field('subImage'),
                    'description' =>  get_field('description'),
                );
                array_push($products_data, $output);
            }
            wp_reset_postdata();
        }

        return $products_data;
    }

}
