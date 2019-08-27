class Action < ApplicationRecord
	belongs_to :card

	def attributes
		super.merge({
			description: description
		}).except('text')
	end

	def description
		self.text
	end
end
