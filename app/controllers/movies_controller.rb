class MoviesController < ApplicationController

  def index

    respond_to |format|
      format.html
      format.json
    end
  end

  def create
  end

  def show
  end

end
