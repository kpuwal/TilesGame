feature 'Move Tile', :js => true do
  scenario 'player can move a tile', :driver => :poltergeist do
    visit('/')
    expect(page).to have_content "7 2 5 6 4 8 3 1"
    find("#test").trigger(:click)
    # expect(page).to have_content "7 2 6 4 5 8 3 1"
  end
end
