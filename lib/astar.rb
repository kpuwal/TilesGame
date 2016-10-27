require 'pqueue'

class Astar
  attr_accessor :stringRepresentation, :visited, :queue, :path

  def initialize(initial, goal)
    @initial = initial
    @goal = goal
    @visited = []
  end

  def queue
    @queue = PQueue.new([@initial]){ |a, b| a.value < b.value }
  end

  def execute
    @visited.concat([@initial.stringRepresentation])
    while @queue.length > 0
      current = @queue.pop
p @queue
p current
      if current.stringRepresentation === @goal.stringRepresentation
        return current
      else
        ExpandNode.new(current).movesEmptyNode(@visited, @queue)
      end

      # current.stringRepresentation == @goal.stringRepresentation ? "finished" : current = ExpandNode.new(current).movesEmptyNode(@visited, @queue)
    end


  end

end
