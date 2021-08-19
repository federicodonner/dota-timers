const heroes = [
  {
    nombre: "Abaddon",
    imagen: "Abaddon_icon.webp",
    alt: "abaddon",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Borrowed_Time_icon.webp",
      cooldowns: [60, 50, 40],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "borrowedtime",
    },
  },
  {
    nombre: "Alchemist",
    imagen: "Alchemist_icon.webp",
    alt: "alchemist",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Chemical_Rage_icon.webp",
      cooldowns: [55, 55, 55],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "chemicalrage",
    },
  },
  {
    nombre: "Ancient Apparition",
    imagen: "Ancient_Apparition_icon.webp",
    alt: "ancientapparition",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Ice_Blast_icon.webp",
      cooldowns: [60, 50, 40],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "iceblast",
    },
  },
  {
    nombre: "Anti-Mage",
    imagen: "Anti-Mage_icon.webp",
    alt: "antimage",
    atributo: "Agilidad",
  },
  {
    nombre: "Arc Warden",
    imagen: "Arc_Warden_icon.webp",
    alt: "arcwarden",
    atributo: "Agilidad",
  },
  { nombre: "Axe", imagen: "Axe_icon.webp", alt: "axe", atributo: "Fuerza" },
  {
    nombre: "Bane",
    imagen: "Bane_icon.webp",
    alt: "bane",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Fiends_Grip_icon.webp",
      cooldowns: [120, 110, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "fiendsgrip",
    },
  },
  {
    nombre: "Batrider",
    imagen: "Batrider_icon.webp",
    alt: "batrider",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Flaming_Lasso_icon.webp",
      cooldowns: [120, 115, 110],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "flaminglasso",
    },
  },
  {
    nombre: "Beastmaster",
    imagen: "Beastmaster_icon.webp",
    alt: "beastmaster",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Primal_Roar_icon.webp",
      cooldowns: [90, 80, 70],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "primalroar",
    },
  },
  {
    nombre: "Bloodseeker",
    imagen: "Bloodseeker_icon.webp",
    alt: "bloodseeker",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Rupture_icon.webp",
      cooldowns: [70, 70, 70],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "rupture",
    },
  },
  {
    nombre: "Bounty Hunter",
    imagen: "Bounty_Hunter_icon.webp",
    alt: "bountyhunter",
    atributo: "Agilidad",
  },
  {
    nombre: "Brewmaster",
    imagen: "Brewmaster_icon.webp",
    alt: "brewmaster",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Primal_Split_icon.webp",
      cooldowns: [140, 130, 120],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "primalsplit",
    },
  },
  {
    nombre: "Bristleback",
    imagen: "Bristleback_icon.webp",
    alt: "bristleback",
    atributo: "Fuerza",
  },
  {
    nombre: "Broodmother",
    imagen: "Broodmother_icon.webp",
    alt: "broodmother",
    atributo: "Agilidad",
  },
  {
    nombre: "Centaur Warrunner",
    imagen: "Centaur_Warrunner_icon.webp",
    alt: "centaurwarrunner",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Stampede_icon.webp",
      cooldowns: [90, 90, 90],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "stampede",
    },
  },
  {
    nombre: "Chaos Knight",
    imagen: "Chaos_Knight_icon.webp",
    alt: "chaosknight",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Phantasm_icon.webp",
      cooldowns: [75, 75, 75],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "phantasm",
    },
  },
  {
    nombre: "Chen",
    imagen: "Chen_icon.webp",
    alt: "chen",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Hand_of_God_icon.webp",
      cooldowns: [160, 140, 120],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "handofgod",
    },
  },
  {
    nombre: "Clinkz",
    imagen: "Clinkz_icon.webp",
    alt: "clinkz",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Burning_Army_icon.webp",
      cooldowns: [80, 80, 80],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "burningarmy",
    },
  },
  {
    nombre: "Clockwerk",
    imagen: "Clockwerk_icon.webp",
    alt: "clockwerk",
    atributo: "Fuerza",
  },
  {
    nombre: "Crystal Maiden",
    imagen: "Crystal_Maiden_icon.webp",
    alt: "crystalmaiden",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Freezing_Field_icon.webp",
      cooldowns: [110, 100, 90],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "freezingfield",
    },
  },
  {
    nombre: "Dark Seer",
    imagen: "Dark_Seer_icon.webp",
    alt: "darkseer",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Wall_of_Replica_icon.webp",
      cooldowns: [100, 100, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "wallofreplica",
    },
  },
  {
    nombre: "Dark Willow",
    imagen: "Dark_Willow_icon.webp",
    alt: "darkwillow",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Terrorize_icon.webp",
      cooldowns: [100, 90, 80],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "terrorize",
    },
  },
  {
    nombre: "Dawnbreaker",
    imagen: "Dawnbreaker_icon.webp",
    alt: "dawnbreaker",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Solar_Guardian_icon.webp",
      cooldowns: [120, 110, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "solarguardian",
    },
  },
  {
    nombre: "Dazzle",
    imagen: "Dazzle_icon.webp",
    alt: "dazzle",
    atributo: "Inteligencia",
  },
  {
    nombre: "Death Prophet",
    imagen: "Death_Prophet_icon.webp",
    alt: "deathprophet",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Exorcism_icon.webp",
      cooldowns: [145, 145, 145],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "exorcism",
    },
  },
  {
    nombre: "Disruptor",
    imagen: "Disruptor_icon.webp",
    alt: "disruptor",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Static_Storm_icon.webp",
      cooldowns: [90, 80, 70],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "staticstorm",
    },
  },
  {
    nombre: "Doom",
    imagen: "Doom_icon.webp",
    alt: "doom",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Doom_ability_icon.webp",
      cooldowns: [145, 145, 145],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "doomhabilidad",
    },
  },
  {
    nombre: "Dragon Knight",
    imagen: "Dragon_Knight_icon.webp",
    alt: "dragonknight",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Elder_Dragon_Form_icon.webp",
      cooldowns: [115, 115, 115],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "elderdragonform",
    },
  },
  {
    nombre: "Drow Ranger",
    imagen: "Drow_Ranger_icon.webp",
    alt: "drowranger",
    atributo: "Agilidad",
  },
  {
    nombre: "Earth Spirit",
    imagen: "Earth_Spirit_icon.webp",
    alt: "earthspirit",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Magnetize_icon.webp",
      cooldowns: [100, 90, 80],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "magnetize",
    },
  },
  {
    nombre: "Earthshaker",
    imagen: "Earthshaker_icon.webp",
    alt: "earthshaker",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Echo_Slam_icon.webp",
      cooldowns: [150, 130, 110],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "echoslam",
    },
  },
  {
    nombre: "Elder Titan",
    imagen: "Elder_Titan_icon.webp",
    alt: "eldertitan",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Earth_Splitter_icon.webp",
      cooldowns: [120, 110, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "earthsplitter",
    },
  },
  {
    nombre: "Ember Spirit",
    imagen: "Ember_Spirit_icon.webp",
    alt: "emberspirit",
    atributo: "Agilidad",
  },
  {
    nombre: "Enchantress",
    imagen: "Enchantress_icon.webp",
    alt: "enchantress",
    atributo: "Inteligencia",
  },
  {
    nombre: "Enigma",
    imagen: "Enigma_icon.webp",
    alt: "enigma",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Black_Hole_icon.webp",
      cooldowns: [200, 180, 160],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "blackhole",
    },
  },
  {
    nombre: "Faceless Void",
    imagen: "Faceless_Void_icon.webp",
    alt: "facelessvoid",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Chronosphere_icon.webp",
      cooldowns: [160, 150, 140],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "chronosphere",
    },
  },
  {
    nombre: "Grimstroke",
    imagen: "Grimstroke_icon.webp",
    alt: "grimstroke",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Soulbind_icon.webp",
      cooldowns: [100, 75, 50],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "soulbind",
    },
  },
  {
    nombre: "Gyrocopter",
    imagen: "Gyrocopter_icon.webp",
    alt: "gyrocopter",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Call_Down_icon.webp",
      cooldowns: [90, 75, 60],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "calldown",
    },
  },
  {
    nombre: "Hoodwink",
    imagen: "Hoodwink_icon.webp",
    alt: "hoodwink",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Sharpshooter_icon.webp",
      cooldowns: [45, 45, 45],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "sharpshooter",
    },
  },
  {
    nombre: "Huskar",
    imagen: "Huskar_icon.webp",
    alt: "huskar",
    atributo: "Fuerza",
  },
  {
    nombre: "Invoker",
    imagen: "Invoker_icon.webp",
    alt: "invoker",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Sun_Strike_icon.webp",
      cooldowns: [100, 100, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "sunstrike",
    },
  },
  {
    nombre: "Io",
    imagen: "Io_icon.webp",
    alt: "io",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Relocate_icon.webp",
      cooldowns: [100, 90, 80],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "relocate",
    },
  },
  {
    nombre: "Jakiro",
    imagen: "Jakiro_icon.webp",
    alt: "jakiro",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Macropyre_icon.webp",
      cooldowns: [80, 70, 60],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "macropyre",
    },
  },
  {
    nombre: "Juggernaut",
    imagen: "Juggernaut_icon.webp",
    alt: "juggernaut",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Omnislash_icon.webp",
      cooldowns: [140, 140, 140],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "omnislash",
    },
  },
  {
    nombre: "Keeper of the Light",
    imagen: "Keeper_of_the_Light_icon.webp",
    alt: "keeperofthelight",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Will-O-Wisp_icon.webp",
      cooldowns: [60, 60, 60],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "willowisp",
    },
  },
  {
    nombre: "Kunkka",
    imagen: "Kunkka_icon.webp",
    alt: "kunkka",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Ghostship_icon.webp",
      cooldowns: [80, 70, 60],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "ghostship",
    },
  },
  {
    nombre: "Legion Commander",
    imagen: "Legion_Commander_icon.webp",
    alt: "legioncommander",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Duel_icon.webp",
      cooldowns: [50, 50, 50],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "duel",
    },
  },
  {
    nombre: "Leshrac",
    imagen: "Leshrac_icon.webp",
    alt: "leshrac",
    atributo: "Inteligencia",
  },
  {
    nombre: "Lich",
    imagen: "Lich_icon.webp",
    alt: "lich",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Chain_Frost_icon.webp",
      cooldowns: [100, 80, 60],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "chainfrost",
    },
  },
  {
    nombre: "Lifestealer",
    imagen: "Lifestealer_icon.webp",
    alt: "lifestealer",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Infest_icon.webp",
      cooldowns: [100, 75, 50],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "infest",
    },
  },
  {
    nombre: "Lina",
    imagen: "Lina_icon.webp",
    alt: "lina",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Laguna_Blade_icon.webp",
      cooldowns: [70, 60, 50],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "lagunablade",
    },
  },
  {
    nombre: "Lion",
    imagen: "Lion_icon.webp",
    alt: "lion",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Finger_of_Death_icon.webp",
      cooldowns: [160, 100, 40],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "fingerofdeath",
    },
  },
  {
    nombre: "Lone Druid",
    imagen: "Lone_Druid_icon.webp",
    alt: "lonedruid",
    atributo: "Agilidad",
    habilidad: {
      imagen: "True_Form_icon.webp",
      cooldowns: [100, 100, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "trueform",
    },
  },
  {
    nombre: "Luna",
    imagen: "Luna_icon.webp",
    alt: "luna",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Eclipse_icon.webp",
      cooldowns: [140, 140, 140],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "eclipse",
    },
  },
  {
    nombre: "Lycan",
    imagen: "Lycan_icon.webp",
    alt: "lycan",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Shapeshift_icon.webp",
      cooldowns: [125, 110, 95],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "shapeshift",
    },
  },
  {
    nombre: "Magnus",
    imagen: "Magnus_icon.webp",
    alt: "magnus",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Reverse_Polarity_icon.webp",
      cooldowns: [130, 130, 130],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "reversepolarity",
    },
  },
  {
    nombre: "Mars",
    imagen: "Mars_icon.webp",
    alt: "mars",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Arena_Of_Blood_icon.webp",
      cooldowns: [90, 90, 90],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "arenaofblood",
    },
  },
  {
    nombre: "Medusa",
    imagen: "Medusa_icon.webp",
    alt: "medusa",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Stone_Gaze_icon.webp",
      cooldowns: [90, 90, 90],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "stonegaze",
    },
  },
  {
    nombre: "Meepo",
    imagen: "Meepo_icon.webp",
    alt: "meepo",
    atributo: "Agilidad",
  },
  {
    nombre: "Mirana",
    imagen: "Mirana_icon.webp",
    alt: "mirana",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Moonlight_Shadow_icon.webp",
      cooldowns: [140, 120, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "moonlightshadow",
    },
  },
  {
    nombre: "Monkey King",
    imagen: "Monkey_King_icon.webp",
    alt: "monkeyking",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Wukongs_Command_icon.webp",
      cooldowns: [120, 100, 80],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "wukongscommand",
    },
  },
  {
    nombre: "Morphling",
    imagen: "Morphling_icon.webp",
    alt: "morphling",
    atributo: "Agilidad",
  },
  {
    nombre: "Naga Siren",
    imagen: "Naga_Siren_icon.webp",
    alt: "nagasiren",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Song_of_the_Siren_icon.webp",
      cooldowns: [160, 120, 80],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "songofthesiren",
    },
  },
  {
    nombre: "Natures Prophet",
    imagen: "Natures_Prophet_icon.webp",
    alt: "naturesprophet",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Wrath_of_Nature_icon.webp",
      cooldowns: [85, 85, 85],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "wrathofnature",
    },
  },
  {
    nombre: "Necrophos",
    imagen: "Necrophos_icon.webp",
    alt: "necrophos",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Reapers_Scythe_icon.webp",
      cooldowns: [120, 120, 120],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "reapersscythe",
    },
  },
  {
    nombre: "Night Stalker",
    imagen: "Night_Stalker_icon.webp",
    alt: "nightstalker",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Dark_Ascension_icon.webp",
      cooldowns: [150, 140, 130],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "darkascension",
    },
  },
  {
    nombre: "Nyx Assassin",
    imagen: "Nyx_Assassin_icon.webp",
    alt: "nyxassassin",
    atributo: "Agilidad",
  },
  {
    nombre: "Ogre Magi",
    imagen: "Ogre_Magi_icon.webp",
    alt: "ogremagi",
    atributo: "Inteligencia",
  },
  {
    nombre: "Omniknight",
    imagen: "Omniknight_icon.webp",
    alt: "omniknight",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Guardian_Angel_icon.webp",
      cooldowns: [160, 140, 120],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "guardianangel",
    },
  },
  {
    nombre: "Oracle",
    imagen: "Oracle_icon.webp",
    alt: "oracle",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "False_Promise_icon.webp",
      cooldowns: [120, 90, 60],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "falsepromise",
    },
  },
  {
    nombre: "Outworld Destroyer",
    imagen: "Outworld_Destroyer_icon.webp",
    alt: "outworlddestroyer",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Sanitys_Eclipse_icon.webp",
      cooldowns: [160, 145, 130],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "sanitysecplise",
    },
  },
  {
    nombre: "Pangolier",
    imagen: "Pangolier_icon.webp",
    alt: "pangolier",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Rolling_Thunder_icon.webp",
      cooldowns: [70, 70, 70],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "rollingthunder",
    },
  },
  {
    nombre: "Phantom Assassin",
    imagen: "Phantom_Assassin_icon.webp",
    alt: "phantomassassin",
    atributo: "Agilidad",
  },
  {
    nombre: "Phantom Lancer",
    imagen: "Phantom_Lancer_icon.webp",
    alt: "phantomlancer",
    atributo: "Agilidad",
  },
  {
    nombre: "Phoenix",
    imagen: "Phoenix_icon.webp",
    alt: "phoenix",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Supernova_icon.webp",
      cooldowns: [120, 120, 120],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "supernova",
    },
  },
  {
    nombre: "Puck",
    imagen: "Puck_icon.webp",
    alt: "puck",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Dream_Coil_icon.webp",
      cooldowns: [80, 75, 70],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "dreamcoil",
    },
  },
  {
    nombre: "Pudge",
    imagen: "Pudge_icon.webp",
    alt: "pudge",
    atributo: "Fuerza",
  },
  {
    nombre: "Pugna",
    imagen: "Pugna_icon.webp",
    alt: "pugna",
    atributo: "Inteligencia",
  },
  {
    nombre: "Queen of Pain",
    imagen: "Queen_of_Pain_icon.webp",
    alt: "queenofpain",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Sonic_Wave_icon.webp",
      cooldowns: [125, 125, 125],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "sonicwave",
    },
  },
  {
    nombre: "Razor",
    imagen: "Razor_icon.webp",
    alt: "razor",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Eye_of_the_Storm_icon.webp",
      cooldowns: [80, 70, 60],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "eyeofthestorm",
    },
  },
  {
    nombre: "Riki",
    imagen: "Riki_icon.webp",
    alt: "riki",
    atributo: "Agilidad",
  },
  {
    nombre: "Rubik",
    imagen: "Rubick_icon.webp",
    alt: "rubik",
    atributo: "Inteligencia",
  },
  {
    nombre: "Sand King",
    imagen: "Sand_King_icon.webp",
    alt: "sandking",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Epicenter_icon.webp",
      cooldowns: [120, 110, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "epicenter",
    },
  },
  {
    nombre: "Shadow Demon",
    imagen: "Shadow_Demon_icon.webp",
    alt: "shadowdemon",
    atributo: "Inteligencia",
  },
  {
    nombre: "Shadow Fiend",
    imagen: "Shadow_Fiend_icon.webp",
    alt: "shadowfiend",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Requiem_of_Souls_icon.webp",
      cooldowns: [120, 110, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "requiemofsouls",
    },
  },
  {
    nombre: "Shadow Shaman",
    imagen: "Shadow_Shaman_icon.webp",
    alt: "shadowshaman",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Mass_Serpent_Ward_icon.webp",
      cooldowns: [130, 120, 110],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "massserpentward",
    },
  },
  {
    nombre: "Silencer",
    imagen: "Silencer_icon.webp",
    alt: "silencer",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Global_Silence_icon.webp",
      cooldowns: [130, 115, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "globalsilence",
    },
  },
  {
    nombre: "Skywrath Mage",
    imagen: "Skywrath_Mage_icon.webp",
    alt: "skywrathmage",
    atributo: "Inteligencia",
  },
  {
    nombre: "Slardar",
    imagen: "Slardar_icon.webp",
    alt: "slardar",
    atributo: "Fuerza",
  },
  {
    nombre: "Slark",
    imagen: "Slark_icon.webp",
    alt: "slark",
    atributo: "Agilidad",
  },
  {
    nombre: "Snapfire",
    imagen: "Snapfire_icon.webp",
    alt: "snapfire",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Mortimer_Kisses_icon.webp",
      cooldowns: [120, 110, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "mortimerkisses",
    },
  },
  {
    nombre: "Sniper",
    imagen: "Sniper_icon.webp",
    alt: "sniper",
    atributo: "Agilidad",
  },
  {
    nombre: "Spectre",
    imagen: "Spectre_icon.webp",
    alt: "spectre",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Haunt_icon.webp",
      cooldowns: [180, 160, 140],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "haunt",
    },
  },
  {
    nombre: "Spirit Breaker",
    imagen: "Spirit_Breaker_icon.webp",
    alt: "spiritbreaker",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Nether_Strike_icon.webp",
      cooldowns: [90, 70, 50],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "netherstrike",
    },
  },
  {
    nombre: "Stom Spirit",
    imagen: "Storm_Spirit_icon.webp",
    alt: "stormspirit",
    atributo: "Inteligencia",
  },
  {
    nombre: "Sven",
    imagen: "Sven_icon.webp",
    alt: "sven",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Gods_Strength_icon.webp",
      cooldowns: [110, 110, 110],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "godsstrength",
    },
  },
  {
    nombre: "Techies",
    imagen: "Techies_icon.webp",
    alt: "techies",
    atributo: "Inteligencia",
  },
  {
    nombre: "Templar Assassin",
    imagen: "Templar_Assassin_icon.webp",
    alt: "templarassassin",
    atributo: "Agilidad",
  },
  {
    nombre: "Terrorblade",
    imagen: "Terrorblade_icon.webp",
    alt: "terrorblade",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Metamorphosis_icon.webp",
      cooldowns: [155, 155, 155],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "metamorphosis",
    },
  },
  {
    nombre: "Tidehunter",
    imagen: "Tidehunter_icon.webp",
    alt: "tidehunter",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Ravage_icon.webp",
      cooldowns: [150, 150, 150],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "ravage",
    },
  },
  {
    nombre: "Timbersaw",
    imagen: "Timbersaw_icon.webp",
    alt: "timbersaw",
    atributo: "Fuerza",
  },
  {
    nombre: "Tinker",
    imagen: "Tinker_icon.webp",
    alt: "tinker",
    atributo: "Inteligencia",
  },
  {
    nombre: "Tiny",
    imagen: "Tiny_icon.webp",
    alt: "tiny",
    atributo: "Fuerza",
  },
  {
    nombre: "Treant Protector",
    imagen: "Treant_Protector_icon.webp",
    alt: "treantprotector",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Overgrowth_icon.webp",
      cooldowns: [100, 100, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "overgrowth",
    },
  },
  {
    nombre: "Troll Warlord",
    imagen: "Troll_Warlord_icon.webp",
    alt: "trollwarlord",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Battle_Trance_icon.webp",
      cooldowns: [90, 80, 70],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "battletrance",
    },
  },
  {
    nombre: "Tusk",
    imagen: "Tusk_icon.webp",
    alt: "tusk",
    atributo: "Fuerza",
  },
  {
    nombre: "Underlord",
    imagen: "Underlord_icon.webp",
    alt: "underlord",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Dark_Rift_icon.webp",
      cooldowns: [130, 115, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "darkrift",
    },
  },
  {
    nombre: "Undying",
    imagen: "Undying_icon.webp",
    alt: "undying",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Flesh_Golem_icon.webp",
      cooldowns: [125, 125, 125],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "fleshgolem",
    },
  },
  {
    nombre: "Ursa",
    imagen: "Ursa_icon.webp",
    alt: "ursa",
    atributo: "Agilidad",
  },
  {
    nombre: "Vengeful Spirit",
    imagen: "Vengeful_Spirit_icon.webp",
    alt: "vengefulspirit",
    atributo: "Agilidad",
  },
  {
    nombre: "Venomancer",
    imagen: "Venomancer_icon.webp",
    alt: "venomancer",
    atributo: "Agilidad",
    habilidad: {
      imagen: "Poison_Nova_icon.webp",
      cooldowns: [140, 120, 100],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "poisonnova",
    },
  },
  {
    nombre: "Viper",
    imagen: "Viper_icon.webp",
    alt: "viper",
    atributo: "Agilidad",
  },
  {
    nombre: "Visage",
    imagen: "Visage_icon.webp",
    alt: "visage",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Summon_Familiars_icon.webp",
      cooldowns: [130, 120, 110],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "summonfamiliars",
    },
  },
  {
    nombre: "Void Spirit",
    imagen: "Void_Spirit_icon.webp",
    alt: "voidspirit",
    atributo: "Inteligencia",
  },
  {
    nombre: "Warlock",
    imagen: "Warlock_icon.webp",
    alt: "warlock",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Chaotic_Offering_icon.webp",
      cooldowns: [170, 170, 170],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "chaoticoffering",
    },
  },
  {
    nombre: "Weaver",
    imagen: "Weaver_icon.webp",
    alt: "weaver",
    atributo: "Agilidad",
  },
  {
    nombre: "Windranger",
    imagen: "Windranger_icon.webp",
    alt: "windranger",
    atributo: "Inteligencia",
  },
  {
    nombre: "Winter Wyvern",
    imagen: "Winter_Wyvern_icon.webp",
    alt: "winterwyvern",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Winters_Curse_icon.webp",
      cooldowns: [90, 85, 80],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "winterscurse",
    },
  },
  {
    nombre: "Witch Doctor",
    imagen: "Witch_Doctor_icon.webp",
    alt: "witchdoctor",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Death_Ward_icon.webp",
      cooldowns: [80, 80, 80],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "deathward",
    },
  },
  {
    nombre: "Wraith King",
    imagen: "Wraith_King_icon.webp",
    alt: "wraithking",
    atributo: "Fuerza",
    habilidad: {
      imagen: "Reincarnation_icon.webp",
      cooldowns: [200, 130, 60],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "reincarnation",
    },
  },
  {
    nombre: "Zeus",
    imagen: "Zeus_icon.webp",
    alt: "zeus",
    atributo: "Inteligencia",
    habilidad: {
      imagen: "Thundergods_Wrath_icon.webp",
      cooldowns: [130, 125, 120],
      nombres: {
        "en-US": ["Level 1", "Level 2", "Level 3"],
        es: ["Nivel 1", "Nivel 2", "Nivel 3"],
      },
      clases: ["nivel", "nivel", "nivel"],
      alt: "thundergodswrath",
    },
  },
];

export default heroes;
