import React from 'react';

const ReviewsDisplay = ({ reviews }) => {
    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p>{review.score}</p>
                        <p>{review.Authors[0].name}</p>
                        <p>{review.snippet}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReviewsDisplay;