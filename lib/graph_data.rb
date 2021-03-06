module GraphData
  def self.writeFrom(searchedArray)
    jsonReadyData = {}
    searchedArray.group_by(&:keys).each { |x|
      jsonReadyData.merge!(x[1].inject{ |first, element|
        first.merge(element){ |k, a_val, b_val| a_val.merge b_val }
      })
    }
    return jsonReadyData
  end
end
