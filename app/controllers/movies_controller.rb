class MoviesController < ApplicationController

  def index
    @movies = Movie.all
    @movie = Movie.new

    respond_to do |format|
      format.html
      format.json { render json: @movies }
    end
  end

  def create
    @movie = Movie.new(whitelisted_params)
    @movie.release_date = Time.now.to_date
    respond_to do |format|
      if @movie.save
        format.html { }
        format.json { redirect_to @movie}
      else
        format.html { render :new }
        format.json { head :none }
      end
    end
  end

  def show
    @movie = Movie.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render json: @movie }
    end
  end

  private

  def whitelisted_params
    params.require(:movie).permit(:name)
  end

end
