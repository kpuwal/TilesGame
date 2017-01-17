require 'pqueue'
require 'set'

class Astar
  attr_accessor :visited, :queue, :manhattan

  def initialize(initial, goal, manhattan)
    @initial = initial
    @goal = goal
    @visited = Set.new
    @queue = PQueue.new([initial]){ |a, b| a.value < b.value }
    @manhattan = manhattan
    @setOfNodes = []
  end

  def execute
    @visited.add([@initial.stringRepresentation])
    while @queue.length > 0
      current = @queue.pop
      @setOfNodes.push(current)
      if current.stringRepresentation === @goal.stringRepresentation
        @setOfNodes.length
        @setOfNodes.each {|x| p x.depth}
        return current
      else
        ExpandNode.new(current).movesEmptyNode(@visited, @queue, @manhattan)
      end
    end
  end
end
