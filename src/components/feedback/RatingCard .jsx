import React from 'react';
import styles from './RatingCard.module.css';

const RatingCard = ({ data= { averageRating :100, starDistribution } }) => {
  const { averageRating, starDistribution } = data;

  // Determine the number of full stars, half star, and empty stars
  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={styles.ratingCard}>
      <div className={styles.overallRating}>
        <span className={styles.averageRating}>{averageRating.toFixed(1)}</span>
        <span className={styles.ratingText}>Rating</span>
      </div>
      <div className={styles.stars}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className={styles.star}>★</span>
        ))}
        {halfStar && <span className={styles.star}>☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className={styles.star}>☆</span>
        ))}
      </div>
      <div className={styles.ratingBars}>
        {starDistribution.map((percentage, index) => (
          <div key={index} className={styles.ratingBar}>
            <span className={styles.barLabel}>{5 - index}</span>
            <div className={styles.bar}>
              <div
                className={styles.barFill}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCard;
