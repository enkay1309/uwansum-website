export type Recipe = {
  name: string;
  slug: string;
  description: string;
  craving: string;
  time: number;
  difficulty: string;
  emoji: string;
};

export const recipes: Recipe[] = [
  {
    name: "Creamy Garlic Pasta",
    slug: "chocolate-mug-cake",
    description: "A rich and comforting pasta with garlic and parmesan.",
    craving: "creamy",
    time: 25,
    difficulty: "Easy",
    emoji: "🍝",
  },
  {
    name: "Spicy Chilli Noodles",
    slug: "spicy-chilli-noodles",
    description: "Hot, garlicky noodles for when you want something spicy.",
    craving: "spicy",
    time: 15,
    difficulty: "Easy",
    emoji: "🍜",
  },

  {
    name: "Chocolate Mug Cake",
    slug: "chocolate-mug-cake",
    description: "A warm chocolate cake you can make in minutes.",
    craving: "sweet",
    time: 8,
    difficulty: "Easy",
    emoji: "🍫",
  },

  {
    name: "Crispy Potato Bites",
    slug: "crispy-potato-bites",
    description: "Golden crispy potatoes.",
    craving: "crispy",
    time: 30,
    difficulty: "Easy",
    emoji: "🥔",
  },

  {
    name: "Comfort Ramen",
    slug: "comfort-ramen",
    description: "A warm bowl of noodles for the ultimate comfort meal.",
    craving: "comforting",
    time: 20,
    difficulty: "Easy",
    emoji: "🍜",
  },

  {
    name: "2 min- Ramen",
    slug: "2-min-ramen",
    description: "A warm bowl of noodles for the ultimate comfort meal.",
    craving: "lazy",
    time: 5,
    difficulty: "Easy",
    emoji: "🍜",
  },
  {
    name: "Avocado Toast",
    slug: "avocado-toast",
    description: "Simple, fresh and satisfying avocado toast.",
    craving: "healthy",
    time: 10,
    difficulty: "Easy",
    emoji: "🥑",
  },
  {
    name: "French Toast",
    slug: "french-toast",
    description: "Golden French toast with a sweet buttery finish.",
    craving: "sweet",
    time: 15,
    difficulty: "Easy",
    emoji: "🍞",
  },
  {
    name: "Creamy Tomato Pasta",
    slug: "creamy-tomato-pasta",
    description: "Tomato pasta made extra silky and creamy.",
    craving: "creamy",
    time: 25,
    difficulty: "Medium",
    emoji: "🍝",
  },
];