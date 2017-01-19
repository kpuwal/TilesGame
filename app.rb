require 'sinatra'
require_relative './lib/game_interface'
require_relative './lib/app_helper'

class TilesGame < Sinatra::Base
  set :views, settings.root + '/public'
  use Rack::Session::Pool, :expire_after => 8000

  get '/' do
    @status = [7,2,5,6,4,0,8,3,1]
    erb :index
  end

  post '/state' do
    status = toMatrix(params[:status].map!{ |s| s.to_i })
    emptyRow = params[:emptyRow].to_i
    emptyCol = params[:emptyCol].to_i
    manhattan = toBoolean(params[:manhattan])

    start = Time.now
    @game = Game.create(status, emptyRow, emptyCol, manhattan)
    @time = (Time.now - start).round(2)
    saveToSession
  end

  get '/solution' do
    readFromSession
    erb :solution
  end

  run! if app_file == $0
end
