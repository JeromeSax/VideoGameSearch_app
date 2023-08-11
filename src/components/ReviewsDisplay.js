import React from 'react';

const ReviewsDisplay = ({ reviews }) => {
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p>{review.score}</p>
                        <p>{review.author}</p>
                        <p>{review.snippet}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReviewsDisplay;