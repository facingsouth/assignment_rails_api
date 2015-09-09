class ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    @review = Review.new

    respond_to do |format|
      format.html
      format.json {render json: @reviews}
    end
  end

  def create
    @review = Review.new(whitelisted_params)
    @review.review_date = Time.now.to_date
    respond_to do |format|
      if @review.save
        # format.html { }
        format.js { redirect_to @review }
      else
        format.html { }
        format.js { head :none}
      end
    end
  end

  def show
    @review = Review.find(params[:id])

    respond_to do |format|
      format.html
      format.js
    end
  end

  def destroy
    @review = Review.find(params[:id])

    respond_to do |format|
      if @review.destroy
        format.js { head :none }
      else
      end
    end
  end

  private

  def whitelisted_params
    params.require(:review).permit(:reviewer_name, :title, :text, :movie_id)
  end

end
