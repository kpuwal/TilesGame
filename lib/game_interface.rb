require_relative 'node'
require_relative 'astar'
require_relative 'expand_node'

class Game
  attr_reader :status, :emptyRow, :emptyCol, :manhattan

  def initialize(status, emptyRow, emptyCol, manhattan)
    new_status = status.each_slice(3).to_a
    initial = Node.new(0, new_status, emptyRow, emptyCol, 0)
    goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)
    @astar = Astar.new(initial, goal, manhattan)
  end

  def startPlaying
    @astar.queue
    @astar.execute
  end

  def stats
    visited = @astar.visited.length
    searched = @astar.searched.length
    path = @astar.path.length
    return [visited, searched, path]
  end

  def visitedNodes
    @astar.visited
  end

  def self.create(status, emptyRow, emptyCol, manhattan)
    @game = Game.new(status, emptyRow, emptyCol, manhattan)
    @game.startPlaying
  end

  def self.stats
    @game.stats
  end
end
