def solving_puzzle
  @status = @status.each_slice(3).to_a
  p init = Node.new(0, @status, @emptyRow, @emptyCol, 0)
  goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)
  astar = Astar.new(init, goal)
  p astar.queue
  p @solved = astar.execute
end
