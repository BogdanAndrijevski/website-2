$( document ).ready(function() {
                
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#contact_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                     // Scroll to top
                    $(window).scrollTop(0);
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                     // Scroll to top
                    $(window).scrollTop(0);
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                     // Scroll to top
                    $(window).scrollTop(0);
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                     // Scroll to top
                    $(window).scrollTop(0);
                    });
           
		});