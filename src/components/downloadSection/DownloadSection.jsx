import styles from "./DownloadSection.module.css"

const DownloadSection = () => {
	const items = [
		{ icon: "./legal.svg", text: '100% LEGAL' },
		{ icon: "/pay.svg", text: 'EASY PAYOUT' },
		{ icon: "./secure.svg", text: 'SAFE & SECURE' },
		{ icon: "./18plus.svg", text: '18+ PLAY RESPONSIBLY' },
		{ icon: "/24hrs.svg", text: '24X7 SUPPORT' },
	];
	return (
		<div className={styles.main}>

			<div className={styles.infoBar}>
				{items.map((item, index) => (
					<div key={index} className={styles.infoItem}>
						<img src={item.icon} alt={item.text} className={styles.icon} />
						<span>{item.text}</span>
					</div>
				))}
			</div>

			<div>
				<p className={styles.text}>PLAY <span>SAFARI RUMMY</span> <br />
					ON THE GO!</p>

				<div className={styles.DownloadSection}>
					<div >
						<p className={styles.text1}>PLAY ANY TIME, ANY WHERE! </p>

						<div className={styles.downloadBtns}>
							<button>
								<img src="/istore.svg" alt="istore" />
							</button>
							<button>
								<img src="/playstore.svg" alt="playStore" />
							</button>
						</div>

						{/* get link section */}
						<div className={styles.getLink}>


							<div className={styles.inputContainer}>
								<div className={styles.inputicon}>
									+91
								</div>

								<input
									type="tel"
									placeholder="Mobile No"
									className={styles.inputField}
								/>

							</div>
							<button className={styles.registerButton}>Get Link</button>
						</div>





					</div>

					<div style={{ width: "50%", height: "60%", }}>
						<img src="/download.png" alt="image" />
					</div>

				</div>

				<div className={styles.missedCall}>
					<h3>Give a missed call to get link</h3>
					<div >
						<img src="/call.svg" alt="call icon" />
						<p>+91 987654321</p>
					</div>

				</div>
			</div>

		</div>
	);
}

export default DownloadSection;
