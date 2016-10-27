module LinearConflict
  def linear_conflict(node)
    result = 0
    state = node.state

  # Row Conflicts
    for i in 0..2 do
      result += findConflicts(state, i, 1)
    end

  # Column Conflicts
    for i in 0..2 do
        result += findConflicts(state, i, 0)
    end
     return result
  end

  def findConflicts(state, i, dimension)
    result = 0
    tilesRelated = []

    for h in 0..1 && !tilesRelated.include?(h)
  {
     for (var k = h + 1; k < state.length && !tilesRelated.contains(h); k++)
     {
        var moves = dimension == 1
           ? this.inConflict(i, state[i][h], state[i][k], h, k, dimension)
           : this.inConflict(i, state[h][i], state[k][i], h, k, dimension);

        if (moves == 0) continue;
        result += 2
        tilesRelated.push([h, k ])
        break
     }
  }

  return result;
  end
end
