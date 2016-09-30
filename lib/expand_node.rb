class ExpandNode

  def initialize(node)
    @newState = node.state.clone
    @row = node.emptyRow
    @column = node.emptyCol

    @newNode = 0
    @temp = 0
  end

  def movesEmptyNode
    if @row > 0
      return @newState
    end
  end

end
