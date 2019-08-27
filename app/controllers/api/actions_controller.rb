class Api::ActionsController < ApplicationController
	def create
		p params[:text]
		p params[:card_id]
		@action = Action.new({text: params[:text], card_id: params[:card_id]})

		if @action.save
			render :create
		else
		  @error = @action.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

		rescue ActionController::ParameterMissing
			@error = 'Invalid card data provided'
			render 'api/shared/error', status: :unprocessable_entity
	end

	private

	def action_params
		params.require(:action_object).permit(:text, :card_id)
	end
end
