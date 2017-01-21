require './node.rb'
require './astar.rb'
require './graph.rb'
require './expand_node.rb'
require './misplaced_tiles.rb'
require './manhattan_distance.rb'

init = Node.new(0, [[7,2,5],[6,4,0],[8,3,1]], 1, 2, 0)
# init = Node.new(0, [[1,2,3],[0,4,6],[7,5,8]], 1, 0, 0)
# init = Node.new(0, [[8,6,7],[2,5,4],[3,0,1]], 2, 1, 0)
# init = Node.new(0, [[4,1,3],[2,8,0],[7,6,5]], 1, 2, 0)
goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)

astar = Astar.new(init, goal, true)
astar.queue
start =  Time.now
p result = astar.execute
graph = Graph.new(astar.visited, astar.searched)
p graph.sortSearchedByDepth(25)
p "time: #{Time.now - start}"
p "number of steps: #{result.path.length}"
# p astar.visited
