feature 'Button', :js => true do
  scenario 'Show Steps displays steps', :driver => :poltergeist do
    visit('/')
    click_on('Solve')
    click_button('Show Steps')
    expect(page).to have_content "Step: 0 -> D,"
    click_button('Next Step')
    expect(page).to have_content "Step: 0 -> D, Step: 1 -> L,"
  end

  scenario 'Start Over restarts the game', :driver => :poltergeist do
    visit('/')
    click_on('Solve')
    expect(page).to have_content 'DLURULDLURDDLURRDLUURDLDR'
    click_button("Start Over")
    visit(current_path)
    expect(page).not_to have_content 'DLURULDLURDDLURRDLUURDLDR'
  end
end
