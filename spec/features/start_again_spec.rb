feature 'Start Again' do
  scenario 'player can start the game over', :js => true do
    visit('/')
    click_on('Solve')
    expect(page).to have_content 'DLURULDLURDDLURRDLUURDLDR'
    click_button("Start Again")
    visit(current_path)
    expect(page).not_to have_content 'DLURULDLURDDLURRDLUURDLDR'
  end
end
