require 'sinatra'
require_relative './lib/node'
require_relative './lib/astar'
require_relative './lib/expand_node'
require_relative './lib/app_helper'

class TilesGame < Sinatra::Base
  enable :sessions
  set :views, settings.root + '/public'

  get '/' do
    @status = [7,2,5,6,4,0,8,3,1]
    session[:solution] = nil
    erb :index
  end

  post '/state' do
    start = Time.now
    @status = params[:status].map!{ |s| s.to_i }
    @emptyRow = params[:emptyRow].to_i
    @emptyCol = params[:emptyCol].to_i

    solving_puzzle

    session[:solution] = @solved.path
    p "time: #{Time.now - start}"
  end

  get '/solution' do
    @solution = session[:solution]
    erb :solution
  end

  run! if app_file == $0
end
