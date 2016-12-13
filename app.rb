require 'sinatra'
require_relative './lib/node'
require_relative './lib/astar'
require_relative './lib/expand_node'

class TilesPuzzleApp < Sinatra::Base
  enable :sessions

  def solving_puzzle
    @status = @status.each_slice(3).to_a
    p init = Node.new(0, @status, @emptyRow, @emptyCol, 0)

    goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)
    astar = Astar.new(init, goal)
    astar.queue
    p @solved = astar.execute
  end

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
    erb :test
  end
  run! if app_file == $0
end
