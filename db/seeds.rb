# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Movie.destroy_all
Review.destroy_all

(1..5).to_a.each do |index|
  movie = Movie.create(name: "moive#{index}", release_date: Time.now.to_date)
  (1..3).to_a.each do |rind|
    rand_num = (rand(9)+1).to_s
    movie.reviews.create(reviewer_name: "reviewer" + rand_num,
                         title: "review title " + rand_num,
                         text: "review text " + rand_num,
                         review_date: Time.now.to_date
                        )
  end
end
