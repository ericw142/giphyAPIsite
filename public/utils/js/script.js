$(document).ready(function() {
    function loadGifs() {
        $.ajax({
            url: "/search"
        }).then(key => {
            let loadGifsURL = "https://api.giphy.com/v1/gifs/trending?api_key="+key+"&limit=8";

            $.ajax({
                url: loadGifsURL,
                data: {
                    format: 'json'
                },
                error: function() {
                    alert("An error has occured");
                },
                success: function(result) {
                    for (var i = 0; i < result.data.length; i++) {
                        // Create Iframe elements holding gifs
                        let gifURL = result.data[i].embed_url;
                        let gif = $("<iframe>");
                        gif.attr("src", gifURL);
                        gif.attr("frameBorder", "0");
                        $("#span"+i).append(gif);
                    }
                },
                type: 'GET'
            })
        })
    };

    function searchGifs() {
        let searchTerm = $("#search").val()
        $.ajax({
            url: "/search"
        }).then(key => {
            let searchurl = "https://api.giphy.com/v1/gifs/search?api_key="+key+"&q="+searchTerm+"&limit=1";

            $.ajax({
                url: searchurl,
                data: {
                    format: 'json'
                },
                error: function() {
                    alert("An error has occured");
                },
                success: function(result) {
                    // Create search result iframe gif
                    let gifURL = result.data[0].embed_url;
                    let gif = $("<iframe>");
                    gif.attr("src", gifURL);
                    gif.attr("frameBorder", "0");
                    $("#searchSpan").prepend(gif);
                },
                type: 'GET'
            })
        })
    };


    // Event Listeners
    $("#searchBtn").on("click", function(event) {
        event.preventDefault();
        searchGifs();
        $("#search").val("");
    });

    $("#search").bind("enterKey", function(event) {
        event.preventDefault();
        searchGifs();
        $("#search").val("");
    });
    $("#search").keyup(function(e) {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });

    // Initial Content Load
    loadGifs();
})

