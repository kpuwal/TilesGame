require 'pqueue'

class Astar
  attr_accessor :visited, :strRepresentation, :state, :value, :empty, :depth, :queue

  def initialize(initial, goal, empty)
    @initial = initial
    @goal = goal
    @empty = empty
    @visited = []
    @current = 0
  end

  def queue
    @queue = PQueue.new([@initial]){ |a, b| a.value > b.value }
  end

  def execute
    @visited.concat([@initial.stringRepresentation])
    while @queue.length > 0
      p @queue
      @current = @queue.pop
      @current.stringRepresentation == @goal.stringRepresentation ? @current : @current = ExpandNode.new(@current).movesEmptyNode(@visited, @queue)
    end

    # return @current
  end

end
