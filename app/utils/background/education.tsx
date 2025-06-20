interface Education {
  univ: string;
  prodi: string;
  date: string;
  description: string;
}

interface Formal {
  theme: string;
  history: Education[];
}

export const educationItems: Formal[] = [
  {
    theme: "Formal",
    history: [
      {
        univ: `Universitas Pancasila`,
        prodi: "Teknik Informatika",
        date: "(September 2024 - Present)",
        description:
          "Learned core IT and programming fundamentals with a focus on C++. Practiced flowchart design, control structures, functions, and object-oriented programming. Also explored essential data structures like arrays, linked lists, stacks, and queues to enhance problem-solving skills.",
      },
    ],
  },
];
