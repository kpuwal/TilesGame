require 'expand_node'

describe ExpandNode do
  subject(:expand_node) { described_class.new(initial_node) { include ManhattanDistance, MisplacedTiles } }

  let(:initial_node) { double(value: 0, state: [[7,5,0],[6,2,4],[8,3,1]], emptyRow:  0, emptyCol: 2, depth: 0, stringRepresentation: "7,5,0,6,2,4,8,3,1", path: "" ) }

  let(:goal_node) { double(value: 18, state: [[7,5,4],[6,2,1],[8,3,0]], emptyRow: 2, emptyCol: 2, depth: 2, stringRepresentation: "7,5,4,6,2,1,8,3,0", path: "DD") }

  let(:visited) { Set.new }
  let(:pqueue) { PQueue.new([initial_node]) { |a,b| a.value < b.value } }

  it 'initializes Node Expansion' do
    expect(expand_node).to be_an_instance_of ExpandNode
  end

  describe '#movesEmptyNode' do
    it 'finds all possible neighbour nodes' do
      visited.add(initial_node.stringRepresentation)
      expand_node.movesEmptyNode(visited, pqueue)
      expect(visited.length).to eq 3
      expect(pqueue.length).to eq 3
    end

    it 'finds the node with the smallest value' do
      new_astar = Astar.new(initial_node, goal_node)
      outcome = new_astar.execute
      expect(goal_node.value).to eq outcome.value
    end
  end

  describe 'Admissable Heuristics' do
    it 'Manhattan Distance heuristic' do
      manhattan_distance = ManhattanDistance.heuristics(initial_node)
      expect(manhattan_distance).to eq goal_node.value
    end

    it 'Misplaced Tiles heuristic' do
      misplaced_tiles = MisplacedTiles.heuristics(initial_node)
      expect(misplaced_tiles).to eq 8
    end
  end
end
