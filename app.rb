require 'sinatra'
require_relative './lib/node'
require_relative './lib/astar'
require_relative './lib/expand_node'


get '/' do
  init = Node.new(0, [[6,4,7],[8,5,0],[3,2,1]], 1, 2, 0)
  goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)
  astar = Astar.new(init, goal)
  astar.queue
  @solution = astar.execute
  p @solution
  erb :index
end
