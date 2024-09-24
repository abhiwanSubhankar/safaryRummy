import styles from "./exprience.module.css";
import Slider from "react-slick";

const Exprience = () => {

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
			image: "/exp/exp1.svg"
		},
		{
			image: "/exp/exp2.svg"
		},
		{
			image: "/exp/exp3.svg"
		},
		{
			image: "/exp/exp4.svg"
		}
	]

	return (
		<div className={styles.main}>
			<h2 className={styles.text}>Best Online <span> Rummy Experience </span></h2>

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


export default Exprience;
