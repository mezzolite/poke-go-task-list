class AddLeaderToTeams < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :leader, :string
  end
end
