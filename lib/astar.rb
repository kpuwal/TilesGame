require 'pqueue'

class Astar
  attr_reader :visited, :strRepresentation, :state, :value

  def initialize(initial, goal, empty)
    @initial = initial
    @goal = goal
    @empty = empty
    @visited = []
    @current = 0
  end

  def queue
    @queue = PQueue.new([@initial]){ |a,b|
      if a.value > b.value
        return 1
      elsif a.value < b.value
        return -1
      else
        return 0
      end }
    return @queue
  end

  def execute
    @visited.concat([@initial.stringRepresentation])

    while @queue.length > 0
      @current = @queue.pop
      @current.stringRepresentation == @goal.stringRepresentation ? @current : @current = ExpandNode.new(@current).movesEmptyNode
    end

    return @current
  end

end
