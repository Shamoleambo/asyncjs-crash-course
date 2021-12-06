const posts = [
  { title: "post 1", body: "this is post 1" },
  { title: "post 2", body: "this is post 2" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong");
      }
    }, 2000);
  });
}

/* createPost({ title: "post 3", body: "this is post 3" })
  .then(getPosts)
  .catch((err) => console.log(err)); */

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));
