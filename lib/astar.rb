require 'pqueue'

class Astar
  attr_reader :visited, :strRepresentation, :state, :queue

  def initialize(initial, goal, empty)
    @initial = initial
    @goal = goal
    @empty = empty

    @queue = PQueue.new(initial.state.flatten){ |a,b| a < b }
    @visited = {}
  end

  def execute(strRepresentation)
    if @queue.length > 0
      current = @queue.pop
    end
    @visited.add(strRepresentation)
  end
end
