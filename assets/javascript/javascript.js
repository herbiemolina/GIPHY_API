
var topics = ["steak", "chicken", "pork", "lamb", "crab", "shrimp", "lobster"]

function renderbuttons() {

    $("#buttons-view").empty();

    for ( var i = 0; i < topics.length; i++) {

        var a = $("<button type='button' class='btn btn-primary' >");

        a.addClass("topics-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
        console.log(topics)
    }
};

renderbuttons();

$("body").on("click", "button", function() {

    var query = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    query + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);

        var results = response.data;

        for (var i = 0; i, results.length; i++) {

            var giphydiv = $("<div>");

            var p = $("<p>").text("rating: " + results[i].rating);

            var giphyimage = $("<img>");

            giphyimage.attr("src", results[i].images.fixed_height.url);

            giphydiv.append(p);

            giphydiv.append(giphyimage);

            $("#giphy-view").prepend(giphydiv);


        }

        
    });

});


$("#add-giphy").on("click", function(event){
    event.preventDefault();

    var newGiphy = $("#giphy-input").val().trim();

    topics.push(newGiphy);

    renderbuttons();
    console.log(topics)
});

