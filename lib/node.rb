class Node

  attr_accessor :strRepresentation, :path, :state, :value, :emptyRow, :emptyCol, :depth

  def initialize(value, state, emptyRow, emptyCol, depth)
    @value = value
    @state = state
    @emptyRow = emptyRow
    @emptyCol = emptyCol
    @depth = depth
    @stringRepresentation = ""
    @path = ""
  end

  def stringRepresentation
    @stringRepresentation = @state.flatten.join(",")
  end

end
