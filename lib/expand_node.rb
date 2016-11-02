# require 'pqueue'
require_relative 'misplaced_tiles'
require_relative 'manhattan_distance'
require_relative 'astar'
require_relative 'node'
require_relative 'deep_clone'

class ExpandNode

  # extend MisplacedTiles
  extend ManhattanDistance

  attr_accessor :visited, :queue, :stringRepresentation

  def initialize(node)
    @newState = node.state
    @row = node.emptyRow
    @column = node.emptyCol
    @depth = node.depth
    @nodeSize = node.state.length
    @path = node.path
  end


  def movesEmptyNode(visited, queue)

    if @row > 0
      stateUp = @newState.deep_clone
      state = tileSwap(stateUp, @row - 1, @column)
      p newNode = Node.new(0, state, @row - 1, @column,  @depth + 1)
      p "one"

      if !visited.include?(newNode.stringRepresentation)
        update(newNode, visited, queue)
        newNode.path = @path + "U"
      end
    end

    if @row < @nodeSize - 1
      stateDown = @newState.deep_clone
      state = tileSwap(stateDown, @row + 1, @column)
      p newNode = Node.new(0, state, @row + 1, @column,  @depth + 1)
      p "two"

      if !visited.include?(newNode.stringRepresentation)
        update(newNode, visited, queue)
        newNode.path = @path + "D"
      end
    end

    if @column > 0
      stateLeft = @newState.deep_clone
      state = tileSwap(stateLeft, @row, @column - 1)
      p newNode = Node.new(0, state, @row, @column - 1,  @depth + 1)

      if !visited.include?(newNode.stringRepresentation)
        update(newNode, visited, queue)
        newNode.path = @path + "L"
      end
    end

    if @column < @nodeSize - 1
      stateRight = @newState.deep_clone
      state = tileSwap(stateRight, @row, @column + 1)
      p newNode = Node.new(0, state, @row, @column + 1,  @depth + 1)

      if !visited.include?(newNode.stringRepresentation)
        update(newNode, visited, queue)
        newNode.path = @path + "R"
      end
    end

  end

  private

  def tileSwap(state, row, column)
    temp = state[row][column]
    state[row][column] = 0
    state[@row][@column] = temp
    return state
  end

  def update(newNode, visited, queue)
    newNode.value = newNode.depth + ManhattanDistance.heuristics(newNode)
    p "value: #{newNode.value}"
    queue.push(newNode)
    visited.add(newNode.stringRepresentation)
  end

end
