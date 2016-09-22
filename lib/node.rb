class Node

  attr_accessor :strRepresentation, :path, :state

  def initialize(value, state, emptyRow, emptyCol, depth)

    @value = value # expected value f(s)
    @state = state # state of board as 2D array
    @emptyRow = emptyRow # location of en empty tile
    @emptyCol = emptyCol
    @depth = depth # g(s)

    @strRepresentation = ""
    @path = ""
  end

  def representationToString
    @strRepresentation << @state.flatten.join(",")
  end


end
