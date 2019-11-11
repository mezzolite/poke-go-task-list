Team.destroy_all

mystic = Team.create(
    name: "Mystic", 
    description: "Team Mystic relies on analyzing every situation. Mystic's members believe that Pokémon have immeasurable wisdom and are interested in learning more about why Pokémon experience evolution.",
    image: "https://vignette.wikia.nocookie.net/pokemongo/images/f/f4/Team_Mystic.png/revision/latest?cb=20160717150716",
    leader: "Blanche",
    leader_image: "https://vignette.wikia.nocookie.net/pokemongo/images/9/97/Icon_Blanche.png/revision/latest?cb=20181208030949")

valor = Team.create(
    name: "Valor", 
    description: "Team Valor relies on strength in battle. Valor's members believe that Pokémon are stronger and more warmhearted than humans and are interested in enhancing their natural power.",
    image: "https://vignette.wikia.nocookie.net/pokemongo/images/2/22/Team_Valor.png/revision/latest?cb=20160717150715",
    leader: "Candela",
    leader_image:"https://vignette.wikia.nocookie.net/pokemongo/images/5/53/Icon_Candela.png/revision/latest?cb=20181208030955")

instinct = Team.create(
    name: "Instinct", 
    description: "Team Instinct relies on a trainer's instincts. Instinct's members believe that Pokémon have excellent intuition and are interested in learning more about its connection to the egg hatching process.",
    image: "https://vignette.wikia.nocookie.net/pokemongo/images/d/d4/Team_Instinct.png/revision/latest?cb=20160717150717",
    leader: "Spark",
    leader_image:"https://vignette.wikia.nocookie.net/pokemongo/images/a/aa/Icon_Spark.png/revision/latest?cb=20181208031001")

rocket = Team.create(
    name: "Team Rocket", 
    description: "Team Rocket is a criminal syndicate set to steal other people's Pokémon, with their headquarters in the Kanto Region and the Johto region and a branch in Sevii Islands. They are headed by Giovanni, who also doubles as the Viridian City Gym Leader.",
    image: "https://vignette.wikia.nocookie.net/universeconquest/images/6/67/Team_Rocket_Logo.jpg/revision/latest?cb=20190206180338",
    leader: "Giovanni",
    leader_image: "http://fanaru.com/pokemon/image/142988-pokemon-giovanni-team-rocket-leader.png")