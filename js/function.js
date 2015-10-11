
/*****************************************************************/
/* Back to top function */
/*****************************************************************/
jQuery(document).ready(function() {
		    var offset = 300;
		    var duration = 800;
		    jQuery(window).scroll(function() {
		        if (jQuery(this).scrollTop() > offset) {
		            jQuery('.back-to-top').fadeIn(duration);
		        } else {
		            jQuery('.back-to-top').fadeOut(duration);
		        }
		    });
		    
		    jQuery('.back-to-top').click(function(event) {
		        event.preventDefault();
		        jQuery('html, body').animate({scrollTop: 0}, duration);
		        return false;
		    })
		});


/*****************************************************************/
/* Map Function */
/*****************************************************************/

function initialize() {
				  var mapOptions = {
				    zoom: 8,
				    center: new google.maps.LatLng(21.368134, 91.799955)
				  }
				  var map = new google.maps.Map(document.getElementById('map'),
				                                mapOptions);

				  var image = 'image/office.png';
				  var myLatLng = new google.maps.LatLng(22.368134, 91.799955);
				  var beachMarker = new google.maps.Marker({
				      position: myLatLng,
				      map: map,
				      icon: image
				  });
				}

				google.maps.event.addDomListener(window, 'load', initialize);


/*****************************************************************/
/* Responsive Navigation */
/*****************************************************************/
$('.handle').on('click', function(){
	$('nav ul').toggleClass('showing');
});


/*****************************************************************/
/* Contact Form Validation */
/*****************************************************************/
jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            answer: {
                required: true,
                answercheck: true
            }
        },
        messages: {
            name: {
                required: "come on, you have a name don't you?",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "no email, no message"
            },
            message: {
                required: "um...yea, you have to write something to send this form.",
                minlength: "thats all? really?"
            },
            answer: {
                required: "sorry, wrong answer!"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});


/*****************************************************************/
/* */
/*****************************************************************/
$(document).ready(function(){
    setInterval(function(){
        $('#loader').fadeOut('slow');
    }, 3000);
});
