def solvePuzzle(status, emptyRow, emptyCol, manhattan)
  status = status.each_slice(3).to_a
  init = Node.new(0, status, emptyRow, emptyCol, 0)
  goal = Node.new(0, [[1,2,3],[4,5,6],[7,8,0]], 2, 2, 0)
  manhattan = chooseHeuristic(manhattan)
  start = Time.now
  astar = Astar.new(init, goal, manhattan)
  astar.queue
  @solved = astar.execute
  @time = (Time.now - start).round(2)
  @stats = displayStats(astar)
end

def chooseHeuristic(manhattan)
  manhattan = manhattan.to_s == "true" ? true : false
  return manhattan
end

def visitedNodes(astar)
  visited = astar.visited
  return visited
end

def displayStats(astar)
  visited = astar.visited.length
  searched = astar.searched.length
  path = astar.path.length
  return [visited, searched, path]
end

def clearSesions
  session[:time] = nil
  session[:stats] = nil
  session[:solution] = nil
end

def saveToSession
  session[:time] = @time
  session[:stats] = @stats
  session[:solution] = @solved.path
end

def readFromSession
  @solution = session[:solution]
  @time = session[:time]
  @stats = session[:stats]
end
