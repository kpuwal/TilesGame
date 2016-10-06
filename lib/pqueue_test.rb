require 'pqueue'

class Testing
  def initialize(goal)
    @goal = goal
  end

  def heuristics(node)
    @result = 0
    for i in 0..2 do
      for j in 0..2 do
        @result+=1 if node.state[i][j] != @goal.state[i][j]
      end
    end

    return @result
  end
end
