(function ($, Drupal, drupalSettings) {
    'use strict';
    Drupal.behaviors.navbar = {
        attach: function(context) {

            var navbar = document.getElementById("navbar");

            window.onscroll = function() { mustIShow() };

            function mustIShow() {
                if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
                    navbar.classList.add("navbar-show");
                    $( '#navbar' ).css('background-color','white');
                    $( '.navbar-default .navbar-nav > li > a' ).css('color','black');

                } else {
                    navbar.classList.remove("navbar-show");
                    $( '#navbar' ).css('background','rgba(0, 0, 0, 0.3)');
                    $( '.navbar-default .navbar-nav > li > a' ).css('color','white');
                }
            }


        },
    };


    Drupal.behaviors.anchor = {
        attach: function(context) {
            $('a[href^="#"]').on('click',function (e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            });



        },
    };



}(jQuery, Drupal, drupalSettings));