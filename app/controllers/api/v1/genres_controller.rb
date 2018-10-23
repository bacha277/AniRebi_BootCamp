class Api::V1::GenresController < ActionController::Base
  before_action :find_genre, only: [:show, :anime_list]
  before_action :page_params, only: [:index, :show, :anime_list]

  def index
    @genres = Genre.all.page(@page).per(@per_page)
    render json: @genres
  end

  def show
    @per_page = params[:item_per_page] || 6
    @animes = @genre.animes.order(rating: :desc).page(@page).per(@per_page)
  end

  def anime_list
    @per_page = params[:item_per_page] || 6
    @animes = @genre.animes.page(@page).per(@per_page)
    @count = @genre.animes.count
  end

  def all_genres
    render json: Genre.all
  end

  def top_genres
    @top_genres = AnimeGenre.group("genre_id").order("COUNT(anime_id) DESC").limit(5)
    render json: @top_genres
  end

  private

  def page_params
    @per_page = params[:item_per_page] || Settings.pagination
    @page = params[:page] || 1
    @ani_limit = params[:limit] || 6
  end

  def genre_params
    @per_page = params[:item_per_page] || Settings.pagination
    @page = params[:page] || 1
  end

  def find_genre
    @genre = Genre.friendly.find(params[:id])
  end
end
