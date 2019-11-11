class AddLeaderImageToTeams < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :leader_image, :string
  end
end
