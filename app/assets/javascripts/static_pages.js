// var test = 1
// var movieApp = {
//   getMovieData: function(){
//     $.ajax( {

//       // The URL (path) for the request
//       // The below would submit to http://www.yoursite.com/post
//       url: "movies",

//       // the data to send (will be converted to a query string)
//       // note that this is an object
//       // data: {
//       //     id: 123
//       // },

//       // HTTP verb (aka "Type" of request)
//       type: "GET",

//       // the type of data we expect back
//       dataType : "json",

//       // Success callback to run if the request succeeds.
//       // The response is passed to the function
//       // as a variable, usually called `data` or `json`
//       success: function( json ) {

//           // for example, build a post object onto the body
//           movieApp.addMovies( json );
//       },

//       // Error callback to run if the request fails
//       // (e.g. server returns an error code like 301)
//       // The raw request and any status codes are
//       // passed to the callback
//       error: function( xhr, status, errorThrown ) {
//           alert( "Sorry, there was a problem!" );
//           console.log( "Error: " + errorThrown );
//           console.log( "Status: " + status );
//           console.dir( xhr );
//       },

//       // Complete callback to run regardless of the outcome
//       complete: function( xhr, status ) {
//           // alert( "The request is complete!" );
//       }
//     });
//   },

//   getReviewData: function(){
//     $.ajax( {

//       // The URL (path) for the request
//       // The below would submit to http://www.yoursite.com/post
//       url: "reviews",

//       // the data to send (will be converted to a query string)
//       // note that this is an object
//       // data: {
//       //     id: 123
//       // },

//       // HTTP verb (aka "Type" of request)
//       type: "GET",

//       // the type of data we expect back
//       dataType : "json",

//       // Success callback to run if the request succeeds.
//       // The response is passed to the function
//       // as a variable, usually called `data` or `json`
//       success: function( json ) {

//           // for example, build a post object onto the body
//           movieApp.addReviews( json );
//       },

//       // Error callback to run if the request fails
//       // (e.g. server returns an error code like 301)
//       // The raw request and any status codes are
//       // passed to the callback
//       error: function( xhr, status, errorThrown ) {
//           alert( "Sorry, there was a problem!" );
//           console.log( "Error: " + errorThrown );
//           console.log( "Status: " + status );
//           console.dir( xhr );
//       },

//       // Complete callback to run regardless of the outcome
//       complete: function( xhr, status ) {
//           // alert( "The request is complete!" );
//       }
//     });
//   },

//   addReviews: function( json ) {
//     for (var i=0; i<json.length; i++) {
//       var $review = $("<tr>");
//       $review.append("<td>" + json[i].reviewer_name + "</td>");
//       $review.append("<td>" + json[i].title + "</td>");
//       $review.append("<td>" + json[i].text + "</td>");
//       $review.append("<td>" + json[i].review_date + "</td>");
//       $review.append("<td>" + json[i].movie_id + "</td>");
//       $("#review-list").append($review)
//     }
//   },

//   addMovies: function( json ) {
//     for ( var i=0; i<json.length; i++ ) {
//       var $movie = $("<tr>");
//       $movie.append("<td>" + json[i].name + "</td>");
//       $movie.append("<td>" + json[i].release_date + "</td>");
//       $("#movie-list").append($movie)
//     }
//   }
// }

// $(document).ready(function(){
//   movieApp.getMovieData();
//   movieApp.getReviewData();
// })