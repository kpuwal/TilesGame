feature 'Solve', :js => true  do
  scenario 'player can solve the puzzle', :driver => :poltergeist do
    visit('/')
    click_button 'Solve'
    expect(page).to have_content 'DLURULDLURDDLURRDLUURDLDR'
  end
end
