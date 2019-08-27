json.merge! @card.attributes

json.comments (@card.comments) do |comment|
	json.merge! comment
end

json.actions (@card.actions) do |action|
	json.merge! action
end
