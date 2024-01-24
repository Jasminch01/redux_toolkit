import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const Posts = () => {
    const {isLoading, posts, error} = useSelector(state => state.posts)
    console.log(isLoading)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])
    return (
        <div>
            {isLoading&& <h1>loading .....</h1>}
            {error && <h1>{error}</h1>}
            {
                posts.map(post => <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>)
            }
        </div>
    );
};

export default Posts;