feature 'Solve', :js => true  do
  scenario 'the puzzle', :driver => :poltergeist do
    visit('/')
    click_button 'Solve'
    expect(page).to have_content 'DLURULDLURDDLURRDLUURDLDR'
  end
end
