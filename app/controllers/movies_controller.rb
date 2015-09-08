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
    @movie = Movie.new(name: params[:name], release_date: Time.now.to_date)
    sd
    respond_to do |format|
      if @movie.save
        format.html { redirect_to movies_path, notice: 'Movie was successfully created.'}
        format.json { render :index, status: :created, location: @movie }
      else
        format.html { render :new }
        format.json { render json: @movie.errors, status: :unprocessable_entity }
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

end
