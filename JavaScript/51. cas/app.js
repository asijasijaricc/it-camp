// async function getUsers() {}

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
};

getUsers();

// 1. Napraviti getComments funkciju koja ce prikazati email adrese od ljudi koji su komentarisali objavu (random u prvih 50,
// zatim random u drugih 50 itd...)
// S obzirom da imamo 500 komentara treba vratiti 10 email adrsa.

const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await koment.json();
  const firstFifty = comments.filter((comment) => comment.id < 51);
  const secondFifty = comments.filter(
    (comment) => comment.id > 50 && comment.id < 101
  );
  const thirdFifty = comments.filter(
    (comment) => comment.id > 101 && comment.id < 151
  );
  const forthFifty = comments.filter(
    (comment) => comment.id > 151 && comment.id < 201
  );
  const fifthFifty = comments.filter(
    (comment) => comment.id > 201 && comment.id < 251
  );
  const sixthFifty = comments.filter(
    (comment) => comment.id > 251 && comment.id < 301
  );
  const seventhFifty = comments.filter(
    (comment) => comment.id > 301 && comment.id < 351
  );
  const eigthFifty = comments.filter(
    (comment) => comment.id > 351 && comment.id < 401
  );
  const ninethFifty = comments.filter(
    (comment) => comment.id > 401 && comment.id < 451
  );
  const tenthFifty = comments.filter(
    (comment) => comment.id > 451 && comment.id < 501
  );
  const first = firstFifty.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 1
  );
  const second = secondFifty.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 51
  );
  const third = thirdFifty.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 51
  );
  const forth = forthFifty.find(
    (el) => el.id === Math.floor(Math.random() * 100) + 1
  );
  const fifth = fifthFiftyFifty.find(
    (el) => el.id === Math.floor(Math.random() * 100) + 1
  );
  const sixth = sixthFifty.find(
    (el) => el.id === Math.floor(Math.random() * 100) + 1
  ).email;
  const seventh = seventhFifty.find(
    (el) => el.id === Math.floor(Math.random() * 100) + 1
  ).email;
  const eigth = eigthFifty.find(
    (el) => el.id === Math.floor(Math.random() * 100) + 1
  ).email;
};

const getPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const posts = await response.json();

  console.log(posts);
};

getPost(Math.floor(Math.random() * 40) + 30);
