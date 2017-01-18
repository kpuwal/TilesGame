feature 'Choose heuristics'  do
  scenario 'player can choose Misplaced Tiles heuristic' do
    visit('/')
    choose('misplaced')
    click_on('Solve')
  end

  scenario 'player can choose Manhattan Distance heuristic' do
    visit('/')
    choose('manhattan')
    click_on('Solve')
  end
end
