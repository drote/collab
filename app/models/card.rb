class Card < ApplicationRecord
	belongs_to :list, foreign_key: 'list_id'
	validates_presence_of :title, allow_blank: false
	has_many :comments, dependent: :destroy
	has_many :actions, dependent: :destroy

	def attributes
		super.merge({
			board_id: board_id,
			comment_count: comment_count,
			list_name: list_name
		})
	end

	def board_id
		list.board_id
	end

	def comment_count
		self.comments.length
	end

	def list_name
		self.list.title
	end
end
