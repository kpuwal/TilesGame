require 'pqueue'

module PriorityQueue
  @queue = []

  def queue(node)
    @queue = PQueue.new([node]) { |a, b| a.value > b.value }
  end
end
