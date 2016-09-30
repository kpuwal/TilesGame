require './node.rb'
require './astar.rb'
require './expand_node.rb'

init = Node.new(0, [[6,4,7],[8,5,0],[3,2,1]], 1, 2, 0)
goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)
