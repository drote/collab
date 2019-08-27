class List < ApplicationRecord
	belongs_to :board, foreign_key: 'board_id'
	has_many :cards, dependent: :destroy
	validates_presence_of :title
end