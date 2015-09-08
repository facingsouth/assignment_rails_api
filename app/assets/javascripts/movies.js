var movieApp = {
  eventListeners: function(){
    $('#movie-submit').on(
    'click', function(evt){
      evt.preventDefault();
    }, false
  )},

  stopDefAction: function(evt) {
    evt.preventDefault();
  },
  getMovieData: function(){
    $.ajax( {

      url: "movies",
      type: "GET",
      dataType : "json",
      success: function( json ) {

          // for example, build a post object onto the body
          movieApp.addMovies( json );
      },
      error: function( xhr, status, errorThrown ) {
          alert( "Sorry, there was a problem!" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
      },
      complete: function( xhr, status ) {
          // alert( "The request is complete!" );
      }
    });
  },

  addMovies: function( json ) {
    for ( var i=0; i<json.length; i++ ) {
      var $movie = $("<tr>");
      $movie.append("<td>" + json[i].name + "</td>");
      $movie.append("<td>" + json[i].release_date + "</td>");
      $("#movie-list").append($movie)
    }
  }
}

$(document).ready(function(){
  movieApp.getMovieData();
  movieApp.eventListeners();
})