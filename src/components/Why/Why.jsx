import React from 'react';
import styles from "./why.module.css";
import "./why.css";
import Slider from "react-slick";

const Why = () => {

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		// slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	let images = [

		{
			image: "/carosal/1.png"
		},
		{
			image: "/carosal/2.png"
		},
		{
			image: "/carosal/3.png"
		},
		{
			image: "/carosal/4.png"
		}
	]

	return (
		<div className={styles.main}>
			{/* <div className={styles.cashGameCard}>
				<div className={styles.cashIcon}>

					<img src="grayChip.svg" alt="Cash" />
				</div>
				<div className="card-content">
					<h3 className="card-title">Play Cash Games for full Deposit Value</h3>
					<p className="terms">*T&C apply</p>
				</div>
			</div> */}

			{/* <div className="card">
				<div className="content">
					<h2>Card Title</h2>
					<p>This is the content of the card.</p>
				</div>
			</div> */}

			<h2 className={styles.text}>Why <span> SAFARI RUMMY?</span></h2>

			<div className={styles.sliderContainer}>
				<Slider {...settings}>

					{/* <div className={styles.cashGameCard}>
						<div className={styles.cashIcon}>

							<img src="grayChip.svg" alt="Cash" />
						</div>
						<div className="card-content">
							<h3 className="card-title">Play Cash Games for full Deposit Value</h3>
							<p className="terms">*T&C apply</p>
						</div>
					</div> */}
					{
						images.map((e) => {
							return <div key={e.image} className={styles.slideItem}>
								<img src={e.image} alt="image" />
							</div>
						})
					}



				</Slider>
			</div>

		</div>
	);
}



export default Why;
