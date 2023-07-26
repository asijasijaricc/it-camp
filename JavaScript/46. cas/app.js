// Napraviti funkciju koja vraca novi niz, gde je svaki element objekat sa vrednostima title i budget.
const movies = [
  { title: "Inception", rating: 8, budget: "230M" },
  { title: "Interstelar", rating: 5, budget: "200M" },
  { title: "Godfather", rating: 9, budget: "280M" },
  { title: "Home Alone", rating: 4, budget: "300M" },
  { title: "Bad boys", rating: 8, budget: "180M" },
];

// 1. nacin

// const movies2 = movies.map((movie) => {
//   return {
//     title: movie.title,
//     budget: movie.budget,
//   };
// });

// 2. nacin

const movies2 = movies.map((movie) => ({
  title: movie.title,
  budget: movie.budget,
}));

console.log(movies2);
