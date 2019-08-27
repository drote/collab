# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
List.destroy_all
Card.destroy_all

b1 = Board.create({title: 'Board1'})
# b2 = Board.create({title: 'Board2'})
# b3 = Board.create({title: 'Board3'})
# b4 = Board.create({title: 'Board4'})

l1 = List.create({title: 'List1', board: b1})
l2 = List.create({title: 'List2', board: b1})
# l3 = List.create({title: 'List1', board: b2})
# l4 = List.create({title: 'List1', board: b4})

c1 = Card.create({title: 'Card1', labels: ['green'], due_date: '2019-05-20', description: 'I am a card', list: l1})
c2 = Card.create({title: 'Card2', due_date: '2019-07-10', list: l1})
c3 = Card.create({title: 'Card3', labels: ['orange', 'blue'], due_date: '2019-08-01', list: l2})
c4 = Card.create({title: 'Card4', description: 'Card that is', list: l2})
c5 = Card.create({title: 'Card5', labels: ['yellow'], description: 'Is that a card?', list: l2})

com1 = Comment.create({text: 'comment', card: c1})
