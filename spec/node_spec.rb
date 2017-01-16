require 'node'

describe Node do
  subject(:node) { described_class.new(0, [[6,4,7],[8,5,0],[3,2,1]], 1, 2, 0) }

  it 'initializes Node' do
    expect(node).to be_an_instance_of Node
  end

  it 'returns string representation of a node state' do
    expect(node.stringRepresentation).to eq "6,4,7,8,5,0,3,2,1"
  end
end
