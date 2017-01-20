require 'game_interface'

describe 'Game' do
  let(:goal_node) { double(value: 0, state: [[1,2,3],[4,5,6],[7,8,0]], emptyRow: 2, emptyCol: 2, depth: 0, stringRepresentation: "1,2,3,4,5,6,7,8,0", path: "DLLURRDDLURDLLURULDRURDD") }

  let(:status) { [[7,5,0],[6,2,4],[8,3,1]] }
  let(:emptyRow) { 0 }
  let(:emptyCol) { 2 }
  let(:heuristic) { true }

  it '.create' do
    expect(Game.create(status, emptyRow, emptyCol, heuristic).path).to eq goal_node.path
  end
end
