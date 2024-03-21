import React, { useState, useEffect } from 'react';
import service from '../appwrite/conf';
import { Container, PostCard } from '../components';
function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="py-8 mt-4 text-center w-full">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-center text-2xl font-bold hover:text-gray-500">
                                Login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <div className="py-8 w-full">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div className="py-2 w-1/4" key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home;
