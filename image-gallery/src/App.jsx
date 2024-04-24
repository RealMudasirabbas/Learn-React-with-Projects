import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import axios from 'axios';
function App() {
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState('lions');

    useEffect(() => {
        const api = import.meta.env.VITE_PIXABAY_API_KEY
        axios
            .get(
                `https://pixabay.com/api/?key=${api}&q=${query}&image_type=photo&per_page=30`,
            )
            .then((res) => {
                if (res.status === 200 && res.data && res.data.hits) {
                    console.log(res.data.hits);
                    setPhotos(res.data.hits);
                } else {
                    console.error('Invalid response from Pixabay API');
                }
            })
            .catch((error) => {
                console.error('Error fetching data from Pixabay API:', error);
            });
    }, [query]);

    return (
        <div className="grid place-items-center grid-cols-3">
            {photos.map((photo) => (
                <Card key={photo.id} photo={photo} />
            ))}
        </div>
    );
}

export default App;
