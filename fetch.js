const link  = "https://jsonplaceholder.typicode.com/posts/1";


fetch(link)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
    .finally(() => console.log("finalizo"));