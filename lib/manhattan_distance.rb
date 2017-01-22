module ManhattanDistance
  def self.heuristic(node)
    result = 0
    goal = [[1,2,3],[4,5,6],[7,8,0]]

    for i in 0..2 do
      for j in 0..2 do
        element = node.state[i][j]
        found = false
        for h in 0..2 do
          for k in 0..2 do
            if goal[h][k] == element
              result += (h - i).abs + (j - k).abs
              found = true
              break
            end
          end
          break if found
        end
      end
    end
    return result
  end
end
