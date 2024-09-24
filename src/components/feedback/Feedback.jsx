import styles from "./feedback.module.css";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import RatingCard from "./RatingCard ";

const Feedback = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        // slidesToScroll: 4,
        initialSlide: 0,
        padding: "50px",
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
    ];

    const ratingData = {
        averageRating: 4.6,
        starDistribution: [50, 30, 10, 5, 5], // Percentage distribution for each star level (5 to 1)
    };

    return (
        <div className={styles.main}>

            <h2 className={styles.text}>Trusted by </h2>
            <h2 className={styles.text1}>Millions of players</h2>


            <div className={styles.sliderContainer}>
                <Slider {...settings} className={styles.slider}>

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
                        images.map((e, i) => {
                            return i === 0 ?
                                <div className={styles.ratingWrapper}>

                                    <RatingCard data={ratingData} />
                                </div>

                                : <ReviewCard key={i} />
                        })
                    }



                </Slider>
            </div>

        </div>
    );
}



export default Feedback;
