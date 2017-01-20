def toBoolean(manhattan)
  bmanhattan = manhattan.to_s == "true" ? true : false
  return bmanhattan
end

def toMatrix(status)
  status.each_slice(3).to_a
end

def saveToSession
  session[:time] = @time
  session[:stats] = Game.stats
  session[:solution] = @game.path
  session[:visited] = Game.visited
  session[:searched] = Game.searched
end

def readFromSession
  @solution = session[:solution]
  @time = session[:time]
  @stats = session[:stats]
  @visited = session[:visited]
  @searched = session[:searched]
  p @searched
end
