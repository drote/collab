class AddDefaultsToCompletedAndArchived < ActiveRecord::Migration[5.1]
  def change
  	change_column_default :cards, :completed, false
  	change_column_default :cards, :archived, false
  end
end
