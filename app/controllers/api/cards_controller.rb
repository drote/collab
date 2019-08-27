class Api::CardsController < ApplicationController
	def show
		@card = Card.find(params[:id])
		render :show
	end

	def create
		@card = Card.new(card_params)

		if @card.save
			render :create
		else
			@error = @card.errors.full_messages.join(', ')
			render 'api/shared/error', status: :not_found
		end

		rescue ActionCotroller::ParameterMissing
			@error = 'Invalid card data provided'
			render 'api/shared/error', status: :unprocessable_entity
	end

	def update
		@card = Card.find(params[:id])

		if @card.update(card_params)
			render :update
		else
			@error = @card.errors.full_messages.join(', ')
			render 'api/shared/error', status: :unprocessable_entity
		end

		rescue ActionCotroller::ParameterMissing
			@error = 'Invalid card data provided'
			render 'api/shared/error', status: :unprocessable_entity
	end

	private

	def card_params
		params.require(:card).permit(:title, :list_id, :labels, :due_date, :description, :completed, :archived)
	end
end