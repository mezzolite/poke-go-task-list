Task.destroy_all
User.destroy_all
Team.destroy_all

mystic = Team.create(
    name: "Mystic", 
    description: "Team Mystic relies on analyzing every situation. Mystic's members believe that Pokémon have immeasurable wisdom and are interested in learning more about why Pokémon experience evolution.",
    image: "https://vignette.wikia.nocookie.net/pokemongo/images/f/f4/Team_Mystic.png/revision/latest?cb=20160717150716",
    leader: "Blanche",
    leader_image: "https://vignette.wikia.nocookie.net/pokemongo/images/9/97/Icon_Blanche.png/revision/latest?cb=20181208030949",
    team_color: "#98d4f9cf")

valor = Team.create(
    name: "Valor", 
    description: "Team Valor relies on strength in battle. Valor's members believe that Pokémon are stronger and more warmhearted than humans and are interested in enhancing their natural power.",
    image: "https://vignette.wikia.nocookie.net/pokemongo/images/2/22/Team_Valor.png/revision/latest?cb=20160717150715",
    leader: "Candela",
    leader_image:"https://vignette.wikia.nocookie.net/pokemongo/images/5/53/Icon_Candela.png/revision/latest?cb=20181208030955",
    team_color: "#ff99ab")

instinct = Team.create(
    name: "Instinct", 
    description: "Team Instinct relies on a trainer's instincts. Instinct's members believe that Pokémon have excellent intuition and are interested in learning more about its connection to the egg hatching process.",
    image: "https://vignette.wikia.nocookie.net/pokemongo/images/d/d4/Team_Instinct.png/revision/latest?cb=20160717150717",
    leader: "Spark",
    leader_image:"https://vignette.wikia.nocookie.net/pokemongo/images/a/aa/Icon_Spark.png/revision/latest?cb=20181208031001",
    team_color: "lemonchiffon")

rocket = Team.create(
    name: "Rocket", 
    description: "Team Rocket is a criminal syndicate set to steal other people's Pokémon, with their headquarters in the Kanto Region and the Johto region and a branch in Sevii Islands. They are headed by Giovanni, who also doubles as the Viridian City Gym Leader.",
    image: "https://fadeawayworld.com/wp-content/uploads/2017/09/HOU.png",
    leader: "Giovanni", 
    leader_image: "https://66.media.tumblr.com/51a61c5d717e1ec4533f5cd45537e30f/6895a555e794bfbd-05/s128x128u_c1/a6b18cec33e8534ce5888f972b7d434a1f0cac7b.jpg",
    team_color: "rebeccapurple")


m_make_five_nice_throws = Task.create(name: "Make five nice throws",description: "Make five nice throws in a row.",reward: "5 great balls", reward_image: "https://img.rankedboost.com/wp-content/uploads/2016/07/Great-Ball.png",team: mystic)
m_hatch_three_eggs = Task.create(name: "Hatch three eggs",description: "Hatch three eggs.",reward: "1 razz berry",reward_image: "https://img.rankedboost.com/wp-content/uploads/2016/08/Pokemon-Go-Razz-Berry.png", team: mystic)
m_use_five_berries = Task.create(name: "Use five berries",description: "Use five berries when trying to catch a pokemon.",reward: "200 stardust", reward_image: "https://cdn.bulbagarden.net/upload/thumb/7/71/GO_Stardust.png/200px-GO_Stardust.png",team: mystic)
m_win_three_gym_battles = Task.create(name: "Win three gym battles",description: "Win three gym battles.",reward: "5 ultra Balls", reward_image: "https://cdn.bulbagarden.net/upload/thumb/5/5a/GO_Ultra_Ball.png/150px-GO_Ultra_Ball.png", team: mystic)
m_send_ten_gifts_to_friends = Task.create(name: "Send ten gifts",description: "Send ten gifts to anyone in your friends list.",reward: "1 Rare Candy", reward_image: "https://gamepedia.cursecdn.com/pokemongo_gamepedia_en/a/a2/Rare_Candy.png",team: mystic)

v_make_five_nice_throws = Task.create(name: "Make five nice throws",description: "Make five nice throws in a row.",reward: "2 max potions", reward_image: "https://cdn.bulbagarden.net/upload/thumb/8/85/GO_Max_Potion.png/200px-GO_Max_Potion.png",team: valor )
v_hatch_three_eggs = Task.create(name: "Hatch three eggs",description: "Hatch three eggs.",reward: "1 max revive", reward_image: "https://cdn.bulbagarden.net/upload/thumb/d/d8/GO_Max_Revive.png/200px-GO_Max_Revive.png",team: valor)
v_use_five_berries = Task.create(name: "Use five berries",description: "Use five berries when trying to catch a pokemon.",reward: "5 great balls",reward_image: "https://img.rankedboost.com/wp-content/uploads/2016/07/Great-Ball.png",team: valor)
v_win_three_gym_battles = Task.create(name: "Win three gym battles",description: "Win three gym battles.",reward: "1000 star dust",reward_image: "https://cdn.bulbagarden.net/upload/thumb/7/71/GO_Stardust.png/200px-GO_Stardust.png:",team: valor)
v_send_ten_gifts_to_friends = Task.create(name: "Send ten gifts",description: "Send ten gifts to anyone in your friends list.",reward: "1 gift", reward_image: "https://cdn.bulbagarden.net/upload/4/47/GO_Gift.png",team: valor)

i_make_five_nice_throws = Task.create(name: "Make five nice throws",description: "Make five nice throws in a row.",reward: "6 ultra balls",reward_image: "https://cdn.bulbagarden.net/upload/thumb/5/5a/GO_Ultra_Ball.png/150px-GO_Ultra_Ball.png",team: instinct )
i_hatch_three_eggs = Task.create(name: "Hatch three eggs",description: "Hatch three eggs.",reward: "1 sun stones",reward_image: "https://cdn.bulbagarden.net/upload/d/d2/GO_Sun_Stone.png",team: instinct)
i_use_five_berries = Task.create(name: "Use five berries",description: "Use five berries when trying to catch a pokemon.",reward: "1 razz berry",reward_image: "https://img.rankedboost.com/wp-content/uploads/2016/08/Pokemon-Go-Razz-Berry.png",team: instinct)
i_win_three_gym_battles = Task.create(name: "Win three gym battles",description: "Win three gym battles.",reward: "5 nanab berry",reward_image: "https://img.rankedboost.com/wp-content/uploads/2016/08/Nanab-Berry-Pokemon-GO.png",team: instinct)
i_send_ten_gifts_to_friends = Task.create(name: "Send ten gifts",description: "Send ten gifts to anyone in your friends list.",reward: "1 max revive",reward_image: "https://cdn.bulbagarden.net/upload/thumb/d/d8/GO_Max_Revive.png/200px-GO_Max_Revive.png",team: instinct)

r_steal_five_gifts = Task.create(name: "Steal five gifts" ,description: "Relieve trainers of their possesions.",reward: "5 stolen gifts",reward_image: "https://cdn.bulbagarden.net/upload/4/47/GO_Gift.png",team: rocket)
r_make_a_shadow_pokemon = Task.create(name: "Make a shadow pokemon",description: "Introduce pokemon to darkness.",reward: "Have a dark pokemon", reward_image: "https://usercontent1.hubstatic.com/14592846_f520.jpg",team: rocket )
r_use_pinap_berry = Task.create(name: "Use a pinap berry",description: "Feed pinap berry to get more candy.",reward: "Get more candy",reward_image: "https://img.rankedboost.com/wp-content/uploads/2016/08/Pokemon-Go-Candies.png",team: rocket)
r_win_three_gym_battles = Task.create(name: "Win three gym battles",description: "Beat the stuffing out of other teams.",reward: "The glory of winning", reward_image: "https://pngimage.net/wp-content/uploads/2018/06/gold-star-icon-png-3.png",team: rocket)
r_make_a_child_cry = Task.create(name: "Make a child cry",description: "Use your imagination.",reward: "The tears of a child", reward_image: "https://i.pinimg.com/originals/66/83/e0/6683e0e5936f6d0c4207ddc2cbca1ee1.png",team: rocket )

catch_five_fire = Task.create(name:"Catch five fire pokemon",description: "Catch any five fire type pokemon.", reward: "Encounter a fire type pokemon", reward_image: "https://3.bp.blogspot.com/-J0MeJVYgAzo/WTKeIAdZHmI/AAAAAAAAA9Y/m7H_4VhPaiwyqb5tQpK0SV0B9y-TwCAjgCLcB/s400/160983187.png",team: valor)
catch_five_water = Task.create(name:"Catch five water pokemon",description: "Catch any five water type pokemon.", reward: "Encounter a water type pokemon", reward_image: "https://1.bp.blogspot.com/-FwogCD3yOVA/WTKedzZ91JI/AAAAAAAAA9c/X6tmLBc4X3M-QT_ZSV1_kO43Htd6ozOAACLcB/s400/c3613977779d28d1da20e3d814ac1ce0.png",team: mystic)
catch_five_electric = Task.create(name:"Catch five electric pokemon",description: "Catch any five electric type pokemon.", reward: "Encounter a electric type pokemon", reward_image: "https://i.pinimg.com/originals/e5/c1/2b/e5c12bd2552d60f6d625683282b17aa4.png",team: instinct)
catch_five_dark = Task.create(name:"Catch five dark pokemon",description: "Catch any five dark type pokemon.", reward: "Encounter a dark type pokemon",reward_image: "https://usercontent1.hubstatic.com/14592846_f520.jpg", team: rocket)

User.create(username: "JaredLovesPokeGo", team: rocket)
User.create(username: "mezzolite", team: mystic)
