import React from 'react';
import styles from "./badge.module.css";

const Badge = () => {

	let badges = [
		{
			image: "/badge/badge1.svg",
			title: "RNG Certified Platform",
			details: "Our random no. generator has been verified by itech labs (ISO 17025 certified )"
		},
		{
			image: "/badge/badge1.svg",
			title: "Best Anti-Fraud System",
			details: "Enjoy a world - class anti- fraud system that protects you with complete date & identity privacy"
		},
		{
			image: "/badge/badge1.svg",
			title: "Secure Transactions",
			details: "Our trusted & secure online gaming platform lets you enjoy safe transactions with international standards of gameplay"
		}
	]
	return (
		<div className={styles.main}>

			{
				badges.map((item, i) => {
					return <div key={i} className={styles.item}>
						<img src={item.image} alt="image" />
						<h3>{item.title}</h3>
						<p>{item.details}</p>
					</div>
				})
			}


		</div>
	);
}

export default Badge;
