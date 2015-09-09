var reviewApp = {

  getReviewData: function(){
    $.ajax( {
      url: "reviews",
      type: "GET",
      dataType : "json",
      success: function( json ) {
          reviewApp.addReviews( json );
      },

      // Error callback to run if the request fails
      // (e.g. server returns an error code like 301)
      // The raw request and any status codes are
      // passed to the callback
      error: function( xhr, status, errorThrown ) {
          alert( "Sorry, there was a problem!" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
      },

      // Complete callback to run regardless of the outcome
      complete: function( xhr, status ) {
          // alert( "The request is complete!" );
      }
    });
  },

  addReviews: function( json ) {
    for (var i=0; i<json.length; i++) {
      var $review = $("<tr>");
      $review.append("<td>" + json[i].movie_id + "</td>");
      $review.append("<td>" + json[i].reviewer_name + "</td>");
      $review.append("<td>" + json[i].title + "</td>");
      $review.append("<td>" + json[i].text + "</td>");
      $review.append("<td>" + json[i].review_date + "</td>");
      $review.append("<td><a href=# class='delete-link' id='" +json[i].id + "'> Delete </a></td>");
      $("#review-list").append($review);
    }
  }, 

  eventListeners: function(){
    $('.delete-link').on(
    'click', function(evt){
      evt.preventDefault();
      console.log("something  " + $(this));
      reviewApp.destroyReview($(this));
    }
  )},

  destroyReview: function($review) {
    var id = $review.attr('id');
    $.ajax({
      url: "reviews/" + id + '.json',
      type: "DELETE",
      dataType : "application/javascript",
      success: function( ) {

        reviewApp.removeReview( id );
      }
    })
  },

  removeReview: function(id) {
    console.log("remove " + id);
    $('#'+id).remove();
  }
}

$(document).ready(function(){
  reviewApp.getReviewData();
  reviewApp.eventListeners();
})