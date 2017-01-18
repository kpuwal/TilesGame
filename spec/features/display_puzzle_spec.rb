feature 'Display Puzzle' do
  scenario 'displays correct header' do
    visit('/')
    expect(page).to have_content "Sliding Tiles Puzzle"
  end

  scenario 'displays correct initial setup' do
    visit('/')
    expect(page).to have_content "7 2 5 6 4 8 3 1"
  end

  scenario 'displays correct goal setup' do
    visit('/')
    expect(page).to have_content "Goal: 1 2 3 4 5 6 7 8"
  end

  scenario 'displays choice of heuristics' do
    visit('/')
    expect(page).to have_content "Misplaced Tiles"
    expect(page).to have_content "Manhattan Distance"
  end

  scenario 'displays Solve button' do
    visit('/')
    find_button('Solve').click
  end

  scenario 'displays Generate Graph button', :js => true do
    visit('/')
    find('#show_graph', visible: false)
  end

  scenario 'displays Start Again button', :js => true do
    visit('/')
    find('#start_again', visible: false)
  end
end
