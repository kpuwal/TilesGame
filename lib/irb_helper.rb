require './node.rb'
require './astar.rb'
require './expand_node.rb'
require './misplaced_tiles.rb'
require './manhattan_distance.rb'

init = Node.new(0, [[6,4,7],[8,5,0],[3,2,1]], 1, 2, 0)
# init = Node.new(0, [[1,2,3],[0,4,6],[7,5,8]], 1, 0, 0)
# init = Node.new(0, [[8,6,7],[2,5,4],[3,0,1]], 2, 1, 0)
goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)

astar = Astar.new(init, goal)
astar.queue
p astar.execute
astar.visited
