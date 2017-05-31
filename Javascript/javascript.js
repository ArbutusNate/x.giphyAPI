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
// Search/AJAX call and Image Creation
  $(document).on("click", ".btn", function search(){
      $(".gifzone").empty();
      var currentsearch = $(this).attr("data-name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + currentsearch + "&api_key=dc6zaTOxFJmzC&limit=10";
      $.ajax({
        url: queryURL,
        method: "GET",
      }).done(function(response){
        console.log(response);
        var fixedimage;
        var movinggif;
        for(i = 0; i < response.data.length; i++){
          fixedimage = response.data[i].images.fixed_width_still.url;
          movinggif = response.data[i].images.fixed_width.url;
          var imgframe = $("<div class='imgframe col-md-2'>");
          imgframe
            .attr("data-stillimg", fixedimage)
            .append("<img src='" + fixedimage + "' class='imgbtn' otherstate='" + movinggif + "'>")
            .append("<div class='rating'> Rating: " + (response.data[i].rating).toUpperCase() + "</div>")
            .appendTo($(".gifzone"));
        };
      })
  });
// Turn Gifs On and Off
  $(document).on("click", ".imgbtn", function(){
    console.log("clicked");
    var srcswitch = $(this).attr("otherstate");
    var flavorsaver = $(this)[0].src;
    $(this)[0].src = srcswitch;
    $(this).attr("otherstate", flavorsaver);

  })
// Add Buttons to Array
  $(".usersubmit").on("click", function searchbutton(){
    debugger;
    var search = $(".userinput").val().trim().toUpperCase();
    btnarray
      .push(search)
    addbuttons();
  });