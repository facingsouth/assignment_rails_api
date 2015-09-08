class ReviewsController < ApplicationController

  def index

    respond_to |format|
      format.html
      format.json
    end
  end
end
