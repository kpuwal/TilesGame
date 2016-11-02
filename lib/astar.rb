require 'pqueue'
require 'set'

class Astar
  attr_accessor :stringRepresentation, :visited, :queue, :path

  def initialize(initial, goal)
    @initial = initial
    @goal = goal
    @visited = Set.new
  end

  def queue
    @queue = PQueue.new([@initial]){ |a, b| a.value < b.value }
  end

  def execute
    @visited.add([@initial.stringRepresentation])
    while @queue.length > 0
      current = @queue.pop

      if current.stringRepresentation === @goal.stringRepresentation
        return current
      else
        ExpandNode.new(current).movesEmptyNode(@visited, @queue)
      end
    end
  end
end
