module LinearConflict

  def self.linearConflict(node)
    state = node.state
    result = 0

    state.each { |row|
      found = findRowConflict(row)
      result += found
    }
    return result
  end

  def self.findRowConflict(array)
    goal = [[1,2,3],[4,5,6],[7,8,0]]

    3.times do |x|
      # p x
      # p "#{array[x]} #{array[x+1]}"
      # p array
    end

      return 2
  end
end
