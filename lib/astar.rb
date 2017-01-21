require 'pqueue'
require 'set'
require_relative 'graph_data'

class Astar
  extend GraphData
  attr_accessor :visited, :queue, :manhattan
  attr_reader :searched, :path

  def initialize(initial, goal, manhattan)
    @initial = initial
    @goal = goal
    @visited = Set.new
    @queue = PQueue.new([initial]){ |a, b| a.value < b.value }
    @manhattan = manhattan
    @searched = []
  end

  def execute
    @visited.add(@initial.stringRepresentation)
    while @queue.length > 0
      current = @queue.pop
      @searched.push([current.depth, current.path, current.stringRepresentation])
      if current.stringRepresentation === @goal.stringRepresentation
        @path = current.path
        return current
      else
        ExpandNode.new(current).movesEmptyNode(@visited, @queue, @manhattan)
      end
    end
  end
end
