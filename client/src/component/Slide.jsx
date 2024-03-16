import React from 'react';

const Slide = () => {
    const cardStyle = {
        width: '100%', // Set the desired width
        height: '500px', // Set the desired height
        overflow: 'hidden', // Hide overflowing content
    };

    const cardImageStyle = {
        width: '100%', // Make the image fill the entire width of the card
        height: '100%', // Make the image fill the entire height of the card
        objectFit: 'cover', // Maintain aspect ratio and cover the container
    };

    return (
        <>
            <div className="card" style={cardStyle}>
                <img src="/assets/1.jpg" className="card-img-top" alt="..." style={cardImageStyle} />
            </div>
        </>
    );
};

export default Slide;
