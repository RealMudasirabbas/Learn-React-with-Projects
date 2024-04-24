import React from 'react';

function Card({ photo }) {
    
    return (
        
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo.webformatURL} // Use the appropriate URL from the API response
                    alt={photo.tags || 'Image'} // Use tags or another property for alt text
                    width={photo.webformatWidth} // Optional: Set width based on the API response
                    height={photo.webformatHeight} // Optional: Set height based on the API response
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{photo.user || 'Unknown User'}</h2>
                <ul>
                    <li>Views: {photo.views}</li>
                    <li>Downloads: {photo.downloads}</li>
                    <li>Likes: {photo.likes}</li>
                    <li>Comments: {photo.comments}</li>
                    <li>Tags: {photo.tags}</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;
