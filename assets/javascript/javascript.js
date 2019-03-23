
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   

var topics = ["steak", "chicken", "pork", "lamb", "crab", "shrimp", "lobster"]

function renderbuttons() {

    $("#buttons-view").empty();

    for ( var i = 0; i < topics.length; i++) {

        var a = $("<button>");

        a.addClass("topics-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
        console.log(topics)
    }
};

renderbuttons()

function what() {

    var b = $("<button>");
    a.text("a button");
    $("#buttons-view").append(b);
};

what()

function buttonPlease() {

    var c = $("<button>");
    $("#blank").append("<button>");
};

buttonPlease();

$("#blank").append("<button>");\


