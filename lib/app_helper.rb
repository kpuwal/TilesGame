def toBoolean(manhattan)
  bmanhattan = manhattan.to_s == "true" ? true : false
  return bmanhattan
end

def clearSesions
  session[:time] = nil
  session[:stats] = nil
  session[:solution] = nil
end

def saveToSession
  session[:time] = @time
  session[:stats] = Game.stats
  session[:solution] = @game.path
end

def readFromSession
  @solution = session[:solution]
  @time = session[:time]
  @stats = session[:stats]
end
