class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
    	t.string :title
    	t.string :labels, array: true, default: []
    	t.text :description
    	t.integer :list_id
    	t.boolean :archived, :completed
    	t.timestamps
    end
  end
end
