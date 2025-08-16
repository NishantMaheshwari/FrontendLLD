const data = [
  {
    id: "sports",
    label: "Sports",
    children: [
      { id: "cricket", label: "Cricket" },
      {
        id: "football",
        label: "Football",
        children: [
          { id: "epl", label: "English Premier League" },
          { id: "laliga", label: "La Liga" },
          { id: "ucl", label: "Champions League" },
        ],
      },
      { id: "badminton", label: "Badminton" },
    ],
  },
  {
    id: "music",
    label: "Music",
    children: [
      {
        id: "classical",
        label: "Classical",
        children: [
          { id: "hindustani", label: "Hindustani" },
          { id: "carnatic", label: "Carnatic" },
        ],
      },
      { id: "rock", label: "Rock" },
      {
        id: "jazz",
        label: "Jazz",
        children: [
          { id: "bebop", label: "Bebop" },
          { id: "fusion", label: "Fusion" },
        ],
      },
    ],
  },
  {
    id: "tech",
    label: "Technology",
    children: [
      {
        id: "ai",
        label: "Artificial Intelligence",
        children: [
          { id: "ml", label: "Machine Learning" },
          { id: "nlp", label: "Natural Language Processing" },
          { id: "cv", label: "Computer Vision" },
        ],
      },
      { id: "webdev", label: "Web Development" },
      {
        id: "blockchain",
        label: "Blockchain",
        children: [
          { id: "crypto", label: "Cryptocurrency" },
          { id: "smartcontracts", label: "Smart Contracts" },
        ],
      },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    children: [
      { id: "mountains", label: "Mountains" },
      {
        id: "beach",
        label: "Beaches",
        children: [
          { id: "goa", label: "Goa" },
          { id: "bali", label: "Bali" },
        ],
      },
      { id: "city", label: "City Tours" },
    ],
  },
];

export default data;
