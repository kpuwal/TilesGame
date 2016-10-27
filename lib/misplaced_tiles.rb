module MisplacedTiles
  def MisplacedTiles.heuristics(node)
    result = 0
    goal = [[1,2,3],[4,5,6],[7,8,0]]

    for i in 0..2 do
      for j in 0..2 do
        result+=1 if node.state[i][j] != goal[i][j] && node.state[i][j] != 0
      end
    end

    return result
  end
end
