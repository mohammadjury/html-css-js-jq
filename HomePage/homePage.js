$(document).ready(function() {
    
    
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('variable');

    if (username) {
        var appendedText = $(".username");
        appendedText.append( username);
    }

    
        $(".LoadButton").click(function(){


            $.ajax({
                url: 'mohammadjury.txt', 
                dataType: 'text',
                success: function(data) {
                    $('.LoadButton').after(data);
                },
                error: function() {
                    console.error('Error loading data');
                }
            });

          


        });
      


});