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
    @searchedNodes = []
    @pathNodes = []
  end

  def execute
    @visited.add(@initial.stringRepresentation)
    while @queue.length > 0
      current = @queue.pop
      @searchedNodes.push([current.depth, current.path, current.stringRepresentation])
      if current.stringRepresentation === @goal.stringRepresentation
        @pathNodes = current.path
        return current
      else
        ExpandNode.new(current).movesEmptyNode(@visited, @queue, @manhattan)
      end
    end
  end

  def searched
    return @searchedNodes
  end

  def visited
    return @visited.to_a
  end

  def path
    return @pathNodes
  end
end


# @setOfNodes.each {|x| p x.depth}
