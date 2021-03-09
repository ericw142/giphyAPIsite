$(document).ready(function() {
    

    $("#searchBtn").on("click", function(event) {
        event.preventDefault();
        
        $.ajax({
            url: "/search"
        }).then(response => {
            let searchurl = "https://api.giphy.com/v1/gifs/random?api_key="+response+"&limit=1";

            $.ajax({
                url: searchurl,
                data: {
                    format: 'json'
                },
                error: function() {
                    alert("An error has occured");
                },
                success: function(data) {
                    console.log(data);
                },
                type: 'GET'
            })
        })
 
    });
})

