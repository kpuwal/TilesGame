require 'astar'
require 'pqueue'
require 'set'

describe Astar do
  subject(:astar) { described_class.new(initial_node, goal_node) }

  let(:initial_node) { double(value: 0, state: [[8,6,7],[2,5,4],[3,0,1]], emptyRow:  2, emptyCol: 1, depth: 0, stringRepresentation: "8,6,7,2,5,4,3,0,1") }
  let(:goal_node) { double(value: 0, state: [[1,2,3],[4,5,6],[7,8,0]], emptyRow: 2, emptyCol: 2, depth: 0, stringRepresentation: "1,2,3,4,5,6,7,8,0") }
  let(:expand_node) { double(current: ["1,2,3,4,5,6,7,8,0"]) }

  it 'creates a priority queue container - open list' do
    priority_queue = PQueue.new([initial_node]) { |a,b| a.value < b.value }
    expect(astar.queue).to eq priority_queue
  end

  it 'creates a container for visited nodes - closed list' do
    visited_nodes = Set.new
    expect(astar.visited).to eq visited_nodes
  end

  # it 'calculates the fastest outcome for the puzzle' do
  #   priority_queue = PQueue.new([goal_node]) { |a,b| a.value < b.value }
  #   expect(astar.execute).to eq goal_node
  # end
end
