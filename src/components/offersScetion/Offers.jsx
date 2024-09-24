import React from 'react';
import styles from "./offer.module.css";

const Offers = () => {

	let offers = ["/offers/offer1.png", "/offers/offer2.png", "/offers/offer3.png", "/offers/offer4.png"];

	let benefits = [
		{
			image: "/offers/offer5.svg",
			title: "Play Favourite Rummy Games",
			keyPoients: [
				"Points, Pool & Deals Variations",
				"Play Rummy 24x7",
				"Knockout Indian Tournaments"
			]
		},
		{
			image: "/offers/offer6.svg",
			title: "World class security",
			keyPoients: [
				"SSL Secured",
				"RNG Certified Game - itech labs",
				"100 % Secured Payment options"
			]
		}, {
			image: "/offers/offer7.svg",
			title: "The Best Rummy Experience",
			keyPoients: [
				"Millions of users",
				"Super Fast Rummy game table",
				"Play multi table games"
			]
		}, {
			image: "/offers/offer8.svg",
			title: "Play multi table games",
			keyPoients: [
				"Daily cash in prize",
				"Get Rs 2000 in bonus",
				"Free Tournament in cash Prize"
			]
		}
	]
	return (
		<div className={styles.main}>
			<h1 style={{
				color: "rgba(13, 66, 12, 1)"
			}}>Exciting Offer & Tournaments</h1>

			<div className={styles.offer}>

				{
					offers.map((e) => {

						return <div key={e} >
							<img src={e} alt="image3" />
						</div>
					})
				}
			</div>
			<h2>India’s Largest Online Rummy Site</h2>
			<div>

				<div className={styles.benefit}>
					{
						benefits.map((e, i) => {
							return <div key={i} className={styles.benefitItem}>
								<img
									src={e.image}
									alt="image" />

								<div>
									<p> {e.title}</p>

									{
										e.keyPoients.map((item, i) => {
											return <div key={i} className={styles.checkPoints} >
												<img src="offers/tick.svg" alt="tick" />
												<p> {item} </p>
											</div>
										})
									}



								</div>
							</div>
						})
					}


				</div>
			</div>


			<button className={styles.registerButton}>Create Free Acount</button>

		</div>
	);
}

export default Offers;
