# require 'pqueue'
require_relative 'misplaced_tiles'
require_relative 'astar'
require_relative 'node'

class ExpandNode

  extend MisplacedTiles
  # extend PriorityQueue

  attr_accessor :empty, :visited, :stringRepresentation, :queue

  def initialize(node)
    @newState = node.state.clone
    @row = node.emptyRow
    @column = node.emptyCol
    @depth = node.depth
    @nodeSize = node.state.length
    # @newNode = 0
    @temp = 0
    @empty = 0
    @path = node.path
  end

  def movesEmptyNode(visited, queue)
# go up
    if @row > 0
      tileSwap(@row - 1, @column)
      @newNode = Node.new(0, @newState, @row - 1, @column,  @depth + 1)

      if !visited.include?(@newNode.stringRepresentation)
        update(visited, queue)
        @newNode.path = @path + "U"
      end
    end

# go down
    if @row < @nodeSize - 1
      p @empty
      tileSwap(@row + 1, @column)
      @newNode = Node.new(0, @newState, @row + 1, @column,  @depth + 1)

      if !visited.include?(@newNode.stringRepresentation)
        update(visited, queue)
        @newNode.path = @path + "D"
      end
    end

# go left
    if @column > 0
      p @empty
      tileSwap(@row, @column - 1)
      @newNode = Node.new(0, @newState, @row, @column - 1,  @depth + 1)

      if !visited.include?(@newNode.stringRepresentation)
        update(visited, queue)
        @newNode.path = @path + "L"
      end
    end

# go right
    if @column < @nodeSize - 1
      p @empty
      tileSwap(@row, @column + 1)
      @newNode = Node.new(0, @newState, @row, @column + 1,  @depth + 1)

      if !visited.include?(@newNode.stringRepresentation)
        update(visited, queue)
        @newNode.path = @path + "R"
      end
    end
    
  end

  private

  def up(node)
    if @row > 0
      tileSwap(@row - 1, @column)
      @newNode = Node.new(0, @newState, @row - 1, @column,  @depth + 1)
      if !visited.include?(@newNode.stringRepresentation)
        update(visited, queue)
        @newNode.path = @path + "U"
      end
    end
  end

  def down(node)
    if @row < @nodeSize - 1
      tileSwap(@row + 1, @column)
      @newNode = Node.new(0, @newState, @row + 1, @column,  @depth + 1)

      if !visited.include?(@newNode.stringRepresentation)
        update(visited, queue)
        @newNode.path = @path + "D"
      end
    end
  end

  def tileSwap(row, column)
    @temp = @newState[row][column]
    @newState[row][column] = @empty
    @newState[@row][@column] = @temp
  end

  def update(visited, queue)
    @newNode.value = @newNode.depth + MisplacedTiles.heuristics(@newNode)
    queue.push(@newNode)
    visited.push(@newNode.stringRepresentation)
  end

end
