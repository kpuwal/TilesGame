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

  scenario 'hides Solve button', :js => true do
    visit('/')
    expect(page).to have_content "Solve"
    click_on('Solve')
    expect(page).not_to have_content "Solve"
  end

  scenario 'displays/hides Show Steps button', :js => true do
    visit('/')
    find('#show_steps', visible: false)
    click_on('Solve')
    find('#show_steps', visible: true)
  end

  scenario 'displays/hides Generate Graph button', :js => true do
    visit('/')
    find('#show_graph', visible: false)
    click_on('Solve')
    find('#show_graph', visible: true)
  end

  scenario 'displays/hides Start Again button', :js => true do
    visit('/')
    find('#start_again', visible: false)
    click_on('Solve')
    find('#start_again', visible: true)
  end
end
