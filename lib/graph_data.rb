module GraphData
  def self.sortSearchedByDepth(searchedArray, steps)
    orderedByDepth = []
    sortedByDepth = []

    searchedArray.each{ |x| orderedByDepth << { x[0] => [x[1], x[2]] }}
    orderedByDepth.group_by(&:keys).each{ |x|
      sortedByDepth << x[1].inject{ |memo, el|
        memo.merge( el ){ |k, old_v, new_v| old_v + new_v }
      }
    }
    return sortedByDepth.to_s
  end
end
