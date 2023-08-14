import React from 'react';

const ReviewsDisplay = ({ reviews }) => {
    const handleButtonClick = () => {
        alert("Well I'm still working out the bugs so like come back later. You'll be back...they always come back!")
      }
    return (
        <div>
            <h1 className='header-2'>Reviews</h1>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p>{review.score}</p>
                        <p>{review.Authors[0].name}</p>
                        <p>{review.snippet}</p>
                    </li>
                ))}
            </ul>
            <button className= "button-2" onClick={handleButtonClick}>Still didn't find what you were looking for?</button>
        </div>
    );
}

export default ReviewsDisplay;