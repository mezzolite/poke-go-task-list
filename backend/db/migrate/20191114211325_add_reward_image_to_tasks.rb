class AddRewardImageToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :reward_image, :string
  end
end
