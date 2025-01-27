const link  = "https://jsonplaceholder.typicode.com/posts/";


// fetch(link)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))
//     .finally(() => console.log("finalizo"));

const findPostById = async (id) => {
    try {
        const res = await fetch(link + id)
        const post = await res.json()
        console.log(post)
    } catch (error){
        console.log(error)
    }
    
}

findPostById (2)