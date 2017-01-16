require 'astar'
require 'pqueue'
require 'set'

describe Astar do
  subject(:astar) { described_class.new(initial_node, goal_node) }

  let(:initial_node) { double(value: 0, state: [[7,5,0],[6,2,4],[8,3,1]], emptyRow:  0, emptyCol: 2, depth: 0, stringRepresentation: "7,5,0,6,2,4,8,3,1", path: "" ) }

  let(:goal_node) { double(value: 0, state: [[1,2,3],[4,5,6],[7,8,0]], emptyRow: 2, emptyCol: 2, depth: 0, stringRepresentation: "1,2,3,4,5,6,7,8,0", path: "DLLURRDDLURDLLURULDRURDD") }

  it 'initializes Astar' do
    expect(astar).to be_an_instance_of Astar
  end

  describe "#execute" do
    it 'creates an OPEN LIST -set of currently discovered nodes' do
      priority_queue = PQueue.new([initial_node]) { |a,b| a.value < b.value }
      expect(astar.queue).to eq priority_queue
    end

    it 'creates a set for visited nodes -CLOSED LIST' do
      visited_nodes = Set.new
      expect(astar.visited).to eq visited_nodes
    end

    it 'calculates the fastest outcome for the puzzle' do
      astar = Astar.new(initial_node, goal_node)
      solution = astar.execute
      expect(solution.path).to eq goal_node.path
    end
  end
end
