import React from 'react';
import styles from "./why.module.css";
import "./why.css";

const Why = () => {
	return (
		<div>
			<div className={styles.cashGameCard}>
				<div className={styles.cashIcon}>
				
					<img src="grayChip.svg" alt="Cash" />
				</div>
				<div className="card-content">
					<h3 className="card-title">Play Cash Games for full Deposit Value</h3>
					<p className="terms">*T&C apply</p>
				</div>
			</div>
{/* 
<div className="card">
  <div className="content">
    <h2>Card Title</h2>
    <p>This is the content of the card.</p>
  </div>
</div> */}

		</div>
	);
}



export default Why;
