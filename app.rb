require 'sinatra'
require_relative './lib/node'
require_relative './lib/astar'
require_relative './lib/expand_node'
require_relative './lib/app_helper'

class TilesGame < Sinatra::Base
  set :views, settings.root + '/public'
  enable :sessions

  get '/' do
    @status = [7,2,5,6,4,0,8,3,1]
    clearSesions
    erb :index
  end

  post '/state' do
    @status = params[:status].map!{ |s| s.to_i }
    @emptyRow = params[:emptyRow].to_i
    @emptyCol = params[:emptyCol].to_i
    @manhattan = params[:manhattan]
    solvePuzzle(@status, @emptyRow, @emptyCol, @manhattan)
    saveToSession
  end

  get '/solution' do
    readFromSession
    erb :solution
  end

  run! if app_file == $0
end
