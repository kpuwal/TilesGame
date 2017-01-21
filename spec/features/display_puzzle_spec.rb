feature 'Display' do
  scenario 'correct header' do
    visit('/')
    expect(page).to have_content "Sliding Tiles Puzzle"
  end

  scenario 'correct initial setup' do
    visit('/')
    expect(page).to have_content "7 2 5 6 4 8 3 1"
  end

  scenario 'correct goal setup' do
    visit('/')
    expect(page).to have_content "Goal: 1 2 3 4 5 6 7 8"
  end

  scenario 'choice of heuristics' do
    visit('/')
    expect(page).to have_content "Misplaced Tiles"
    expect(page).to have_content "Manhattan Distance"
  end

  scenario 'visible Solve button' do
    visit('/')
    find_button('Solve').click
  end

  scenario 'Solve button as hidden', :js => true do
    visit('/')
    expect(page).to have_content "Solve"
    click_on('Solve')
    expect(page).not_to have_content "Solve"
  end

  scenario 'and hide Show Steps button', :js => true do
    visit('/')
    find('#show_steps', visible: false)
    click_on('Solve')
    find('#show_steps', visible: true)
  end

  scenario 'and hide Generate Graph button', :js => true do
    visit('/')
    find('#show_graph', visible: false)
    click_on('Solve')
    find('#show_graph', visible: true)
  end

  scenario 'and hide Start Again button', :js => true do
    visit('/')
    find('#start_again', visible: false)
    click_on('Solve')
    find('#start_again', visible: true)
  end
end
