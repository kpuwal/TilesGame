require_relative 'node'
require_relative 'astar'
require_relative 'graph_data'
require_relative 'expand_node'

class Game
  attr_reader :status, :emptyRow, :emptyCol, :manhattan, :searchedNodes, :visited, :path

  def initialize(status, emptyRow, emptyCol, manhattan)
    initial = Node.new(0, status, emptyRow, emptyCol, 0)
    goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)
    @astar = Astar.new(initial, goal, manhattan)
  end

  def startPlaying
    @astar.queue
    @astar.execute
  end

  def aggregateStats
    visited = @astar.visited.length
    searched = @astar.searchedNodes.length
    @path = @astar.path.length
    return [visited, searched, @path]
  end

  def graphSortedByDepth
    GraphData.sortSearchedByDepth(@astar.searchedNodes, @path)
  end

  def self.create(status, emptyRow, emptyCol, manhattan)
    @game = Game.new(status, emptyRow, emptyCol, manhattan)
    @game.startPlaying
  end

  def self.stats
    @game.aggregateStats
  end

  def self.visited
    @game.visited.to_s
  end

  def self.searched
    @game.graphSortedByDepth
  end
end
