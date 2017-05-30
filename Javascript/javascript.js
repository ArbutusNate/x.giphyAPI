var btnarray = ["Science", "Hiking", "Landscapes", "Botany"];
function addbuttons(){
    $(".buttonzone").empty();
    for (var i = 0; i < btnarray.length; i++) {
      var addbtn = $("<button>");
      addbtn
        .addClass("btn")
        .attr("data-name", btnarray[i])
        .text(btnarray[i])
        .appendTo(".buttonzone");
    }
};

addbuttons();
$(".btn").on("click", function search(){
    $(".gifzone").empty();
    var currentsearch = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + currentsearch + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).done(function(response){
      console.log(response);
      debugger;
      for(i = 0; i < response.data.length; i++){
        // var srcvar = response.data[i].
        var imgbox = $("<img>");
        imgbox
          .attr("src", response.data[i].images.fixed_width.url)
          .appendTo($(".gifzone"));
      };
    })
});
$(".usersubmit").on("click", function searchbutton(){
  debugger;
  var search = $(".userinput").val().trim();
  btnarray
    .push(search)
  addbuttons();
});