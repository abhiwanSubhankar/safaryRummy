
import styles from "./FirstSlideSection.module.css";
// import { useState } from "react";

const FirstSlideSection = () => {

	// const [mobile, setMobile] = useState(null);

	return (
		<div className={styles.main}>

			<div className={styles.formWrapper}>

				<div className={styles.badge}>
					<img src="/badge.svg" alt="badge" />
					<p>₹ 8550</p>
				</div>


				<div className={styles.container}>
					<div className={styles.inputContainer}>
						<div className={styles.icon}>
							<img
								src="mobile.svg"
								alt="phone"
								width={"100%"}
								height={"100%"}
							/>
						</div>

						<input
							type="tel"
							placeholder="Mobile No"
							className={styles.inputField}
						/>
					</div>

					<button className={styles.registerButton}>Register for Free</button>

					<div className={styles.separator}>
						<div className={styles.line}>

						</div>
						<span>Or Continue with</span>
						<div className={styles.line}>

						</div>
					</div>

					<button className={styles.googleButton}>
						<img
							src="/googleLogin.svg"
							alt="Google"
							className={styles.googleIcon}
						/>
						Continue with Google
					</button>
				</div>

				<div className={styles.chips}>
					<img src="/redChip.svg" alt="redChip" className={styles.chip1} />
					<img src="/grayChip.svg" alt="redChip" className={styles.chip2} />
					<img src="/redChip.svg" alt="redChip" className={styles.chip3} />
				</div>


			</div>

			{/* img section */}
			<div >
				<img src="/sectionImg.png" alt="rummy image" />
			</div>
		</div>
	);
}

export default FirstSlideSection;
