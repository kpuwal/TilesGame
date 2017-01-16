def solving_puzzle
  @status = @status.each_slice(3).to_a
  init = Node.new(0, @status, @emptyRow, @emptyCol, 0)
  goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)
  heuristic
  astar = Astar.new(init, goal, @manhattan)
  astar.queue
  @solved = astar.execute
end

def heuristic
  if @manhattan.to_s == "true"
    @manhattan = true
  else
    @manhattan = false
  end
  return @manhattan
end
