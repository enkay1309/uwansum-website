export type Recipe = {
  name: string;
  description: string;
  craving: string;
  time: number;
  difficulty: string;
  emoji: string;
};

export const recipes: Recipe[] = [
  {
    name: "Creamy Garlic Pasta",
    description: "A rich and comforting pasta with garlic and parmesan.",
    craving: "creamy",
    time: 25,
    difficulty: "Easy",
    emoji: "🍝",
  },
  {
    name: "Spicy Chilli Noodles",
    description: "Hot, garlicky noodles for when you want something spicy.",
    craving: "spicy",
    time: 15,
    difficulty: "Easy",
    emoji: "🍜",
  },

  {
    name: "Chocolate Mug Cake",
    description: "A warm chocolate cake you can make in minutes.",
    craving: "sweet",
    time: 8,
    difficulty: "Easy",
    emoji: "🍫",
  },

  {
    name: "Crispy Potato Bites",
    description: "Golden crispy potatoes.",
    craving: "crispy",
    time: 30,
    difficulty: "Easy",
    emoji: "🥔",
  },

  {
    name: "Comfort Ramen",
    description: "A warm bowl of noodles for the ultimate comfort meal.",
    craving: "comforting",
    time: 20,
    difficulty: "Easy",
    emoji: "🍜",
  },
  {
    name: "Avocado Toast",
    description: "Simple, fresh and satisfying avocado toast.",
    craving: "healthy",
    time: 10,
    difficulty: "Easy",
    emoji: "🥑",
  },
  {
    name: "French Toast",
    description: "Golden French toast with a sweet buttery finish.",
    craving: "sweet",
    time: 15,
    difficulty: "Easy",
    emoji: "🍞",
  },
  {
    name: "Creamy Tomato Pasta",
    description: "Tomato pasta made extra silky and creamy.",
    craving: "creamy",
    time: 25,
    difficulty: "Medium",
    emoji: "🍝",
  },
];