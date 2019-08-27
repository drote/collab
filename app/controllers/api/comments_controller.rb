class Api::CommentsController < ApplicationController
	def create
		@comment = Comment.new(comment_params)

		if @comment.save
			render :create
		else
		  @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

	rescue ActionController::ParameterMissing
			@error = 'Invalid card data provided'
			render 'api/shared/error', status: :unprocessable_entity
	end

	def destroy
		@comment = Comment.find(params[:id])

		@comment.destroy

		rescue ActionCotroller::ParameterMissing
			@error = 'Invalid comment data provided'
			render 'api/shared/error', status: :unprocessable_entity

		rescue ActiveRecord::RecordNotFound
      @error = 'Invalid comment ID provided'
      render 'api/shared/error', status: :not_found
	end

	def update
		@comment = Comment.find(params[:id])

		puts params

		if @comment.update(comment_params)
			render :update
		else
		  @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
     end

		rescue ActiveRecord::RecordNotFound
      @error = 'Invalid comment ID provided'
      render 'api/shared/error', status: :not_found
	end

	private

	def comment_params
		params.require(:comment).permit(:text, :card_id)
	end
end
