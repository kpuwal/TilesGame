require './node.rb'
require './astar.rb'
require './graph_data.rb'
require './expand_node.rb'
require './misplaced_tiles.rb'
require './manhattan_distance.rb'

# init = Node.new(0, [[7,2,5],[6,4,0],[8,3,1]], 1, 2, 0)
# init = Node.new(0, [[1,2,3],[0,4,6],[7,5,8]], 1, 0, 0)
# init = Node.new(0, [[8,6,7],[2,5,4],[3,0,1]], 2, 1, 0)
# init = Node.new(0, [[4,1,3],[2,8,0],[7,6,5]], 1, 2, 0)
# goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)

# astar = Astar.new(init, goal, true)
# astar.queue
# start =  Time.now
# result = astar.execute
# astar.searched
# "time: #{Time.now - start}"
# "number of steps: #{result.path.length}"

# graph_data test

data = [{0=>{"" => "7,2,5,6,4,0,8,3,1"}}, {1=>{"D" => "7,2,5,6,4,1,8,3,0"}}, {2=>{"DL" => "7,2,5,6,4,1,8,0,3"}}, {1=>{"U"=> "7,2,0,6,4,5,8,3,1"}}]
graph = GraphData.sortSearchedByDepth(data, 2)
