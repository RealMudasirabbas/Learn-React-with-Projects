import { React, useState, useEffect } from 'react';
import service from '../appwrite/conf';
import { Container, PostCard } from '../components';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {}, []);
    service.getPosts([]).then((post) => {
        if (post) {
            setPosts(post.documents);
        }
    });

    return (
        <div className="py-8 w-full">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div className="py-2 w-1/4" key={post.$id}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
