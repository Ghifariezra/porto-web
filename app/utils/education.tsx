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

function getCurrentSemester(startMonth = 8, startYear = 2024): number {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0 = Jan, 8 = Sep

  // Hitung total bulan dari mulai kuliah sampai sekarang
  const monthsSinceStart =
    (currentYear - startYear) * 12 + (currentMonth - startMonth);

  // Jika belum mulai kuliah
  if (monthsSinceStart < 0) return 0;

  // Setiap semester = 6 bulan, semester dimulai dari 1
  return Math.floor(monthsSinceStart / 6) + 1;
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
  // {
  //   theme: "Informal",
  //   history: [
  //     {
  //       univ: "Digital Skola",
  //       prodi: "Data Engineer",
  //       date: "(April - July 2024)",
  //       description:
  //         "Completed a structured training program covering the fundamentals of Data Engineering. Gained understanding of essential tools, foundational concepts, and practical applications used in real-world data engineering workflows.",
  //     },
  //     {
  //       univ: "PPKD Jakarta Barat",
  //       prodi: "Graphic Designer",
  //       date: "(August - October 2020)",
  //       description:
  //         "Completed a vocational training program focused on graphic design. Gained hands-on experience in creating a wide range of visual assets including posters, illustrations, packaging designs, ID cards, tote bags, mugs, badges, and shirts using Adobe Illustrator and Adobe Photoshop.",
  //     },
  //   ],
  // },
];
