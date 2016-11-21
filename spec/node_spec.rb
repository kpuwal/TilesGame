require 'node'

describe Node do
  subject(:node) { described_class.new(0, [[6,4,7],[8,5,0],[3,2,1]], 1, 2, 0) }

  it 'returns string representation of a node state' do
    expect(node.stringRepresentation).to eq "6,4,7,8,5,0,3,2,1"
  end
end
