type PokemonResponse = {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Ability[]
    forms: Form[]
    game_indices: Index[]
    held_items: HeldItem[]
    location_area_encounters: string
    moves: Mfe[]
    species: Species
    cries: Cries
    stats: Stat[]
    types: Type[]
    past_types: PastType[]
    sprites: Sprites

    count: number
    next: string
    previous: any
    results: Pokemons[]
  }

  type Pokemons = {
    name: string
    url: string
  }
  
  type Ability = {
    results: Poke[]
    is_hidden: boolean
    slot: number
    ability: Ability2
  }
  
  type Ability2 = {
    name: string
    url: string
  }
  
  type Form = {
    name: string
    url: string
  }
  
  type Index = {
    game_index: number
    version: Version
  }
  
  type Version = {
    name: string
    url: string
  }
  
  type HeldItem = {
    item: Item
    version_details: VersionDetail[]
  }
  
  export type Item = {
    name: string
    url: string
  }
  
  export type VersionDetail = {
    rarity: number
    version: Version2
  }
  
  export type Version2 = {
    name: string
    url: string
  }
  
  export type Mfe = {
    move: Move
    version_group_details: VersionGroupDetail[]
  }
  
  export type Move = {
    name: string
    url: string
  }
  
  export type VersionGroupDetail = {
    level_learned_at: number
    version_group: VersionGroup
    move_learn_method: MoveLearnMethod
  }
  
  export type VersionGroup = {
    name: string
    url: string
  }
  
  export type MoveLearnMethod = {
    name: string
    url: string
  }
  
  export type Species = {
    name: string
    url: string
  }
  
  export type Sprites = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: Other
    versions: Versions
  }
  
  type Other = {
    dream_world: DreamWorld
    home: Home
    "official-artwork": OfficialArtwork
    showdown: Showdown
  }
  
  type DreamWorld = {
    front_default: string
    front_female: any
  }
  
  type Home = {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type OfficialArtwork = {
    front_default: string
    front_shiny: string
  }
  
  type Showdown = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type Versions = {
    "generation-i": GenerationI
    "generation-ii": GenerationIi
    "generation-iii": GenerationIii
    "generation-iv": GenerationIv
    "generation-v": GenerationV
    "generation-vi": GenerationVi
    "generation-vii": GenerationVii
    "generation-viii": GenerationViii
  }
  
  type GenerationI = {
    "red-blue": RedBlue
    yellow: Yellow
  }
  
  type RedBlue = {
    back_default: string
    back_gray: string
    front_default: string
    front_gray: string
  }
  
  type Yellow = {
    back_default: string
    back_gray: string
    front_default: string
    front_gray: string
  }
  
  type GenerationIi = {
    crystal: Crystal
    gold: Gold
    silver: Silver
  }
  
  type Crystal = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  type Gold = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  type Silver = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  type GenerationIii = {
    emerald: Emerald
    "firered-leafgreen": FireredLeafgreen
    "ruby-sapphire": RubySapphire
  }
  
  type Emerald = {
    front_default: string
    front_shiny: string
  }
  
  type FireredLeafgreen = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  type RubySapphire = {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  type GenerationIv = {
    "diamond-pearl": DiamondPearl
    "heartgold-soulsilver": HeartgoldSoulsilver
    platinum: Platinum
  }
  
  type DiamondPearl = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type HeartgoldSoulsilver = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type Platinum = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type GenerationV = {
    "black-white": BlackWhite
  }
  
  type BlackWhite = {
    animated: Animated
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type Animated = {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type GenerationVi = {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire
    "x-y": XY
  }
  
  type OmegarubyAlphasapphire = {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type XY = {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type GenerationVii = {
    icons: Icons
    "ultra-sun-ultra-moon": UltraSunUltraMoon
  }
  
  type Icons = {
    front_default: string
    front_female: any
  }
  
  type UltraSunUltraMoon = {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  type GenerationViii = {
    icons: Icons2
  }
  
  type Icons2 = {
    front_default: string
    front_female: any
  }
  
  type Cries = {
    latest: string
    legacy: string
  }
  
  type Stat = {
    base_stat: number
    effort: number
    stat: Stat2
  }
  
  type Stat2 = {
    name: string
    url: string
  }
  
  type Type = {
    slot: number
    type: Type2
  }
  
  type Type2 = {
    name: string
    url: string
  }
  
  type PastType = {
    generation: Generation
    types: Type3[]
  }
  
  type Generation = {
    name: string
    url: string
  }
  
  type Type3 = {
    slot: number
    type: Type4
  }
  
  type Type4 = {
    name: string
    url: string
  }
  