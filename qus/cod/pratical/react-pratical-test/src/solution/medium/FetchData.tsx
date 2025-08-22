import React, { useEffect, useState } from "react";

function FetchData() {
    const [posts, SetPosts] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                SetPosts(data);
            })
            .catch((error) => {
                console.log(`Error ${error}`)
            })
    }, [])
    return (
        <div>
            <h2>Posts</h2>
            {posts.map((data) => (
                <><h3>{data.title}</h3><p>{data.body}</p></>
            ))}
        </div>
    )
}
export default FetchData