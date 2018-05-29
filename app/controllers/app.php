<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class App extends Controller
{
    static function is_mobile() {
        $userAgents = array(
            'iPhone',          // iPhone
            'iPod',            // iPod touch
            'Android.*mobile', // 1.5+ Android** Only mobile
            'Windows.*Phone',  // *** Windows Phone
            'dream',           // Pre 1.5 Android
            'CUPCAKE',         // 1.5+ Android
            'blackberry9500',  // Storm
            'blackberry9530',  // Storm
            'blackberry9520',  // Storm v2
            'blackberry9550',  // Storm v2
            'blackberry9800',  // Torch
            'webOS',           // Palm Pre Experimental
            'incognito',       // Other iPhone browser
            'webmate'          // Other iPhone browser
        );
        $pattern = '/'.implode('|', $userAgents).'/i';
        return preg_match($pattern, $_SERVER['HTTP_USER_AGENT']);
    }

    public function current_template() {
        if (is_front_page()) return 'frontpage';
        if (is_page('about')) return 'about';
        if (is_page('products')) return 'products';
        if (is_page('career')) return 'career';
        if (is_page('contact')) return 'contact';
        if (is_single()) return 'news';
        if (is_404()) return '404';

        return 'else';
    }

    public static function title()
    {
        if (is_home()) {
            if ($home = get_option('page_for_posts', true)) {
                return get_the_title($home);
            }
            return __('Latest Posts', 'sage');
        }
        if (is_archive()) {
            return get_the_archive_title();
        }
        if (is_search()) {
            return sprintf(__('Search Results for %s', 'sage'), get_search_query());
        }
        if (is_404()) {
            return __('Not Found', 'sage');
        }
        return get_the_title();
    }
}
