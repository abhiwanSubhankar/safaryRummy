import React from 'react';
import styles from './ReviewCard.module.css';

const ReviewCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.quoteWrapper}>
                <div className={styles.quote}> </div>
                <div className={styles.quote}> </div>
            </div>

            <div className={styles.content}>
                <div className={styles.rating}>
                    ⭐⭐⭐⭐⭐
                </div>
                <p className={styles.reviewText}>
                    One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.
                </p>
                <div className={styles.profile}>
                    <img
                        className={styles.profileImage}
                        src="https://via.placeholder.com/50"
                        alt="User Profile"
                    />
                    <div className={styles.profileInfo}>
                        <span className={styles.name}>Arlene McCoy</span>
                        <span className={styles.designation}>McDonald's</span>
                    </div>
                    <div className={styles.verified}>

                        <img src="/verified.svg" alt="" />
                        <span> Verified</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
