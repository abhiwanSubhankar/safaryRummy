import styles from "./playSteps.module.css"

const PlaySteps = () => {
	return (
		<div className={styles.main}>

			<h2 className={styles.title}>How to Play Rummy on <em>SAFARI RUMMY</em></h2>
			<div className={styles.container}>
				<div className={styles.left}>
					<iframe
						src="https://www.youtube.com/embed/your_video_id"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className={styles.right}>

					<div className={styles.step}>
						<div className={styles.circle}></div>
						<div className={styles.content}>
							<h3 className={styles.stepTitle}>Step 01</h3>
							<p>Download & Register</p>
							<p>Click on the Rummy Card</p>
						</div>
					</div>
					<div className={styles.step}>
						<div className={styles.circle}></div>
						<div className={styles.content}>
							<h3 className={styles.stepTitle}>Step 02</h3>
							<p>pick between Game or Tournament</p>
							<p>Select your Favourite variant</p>
						</div>
					</div>
					<div className={styles.step}>
						<div className={styles.circle}></div>
						<div className={styles.content}>
							<h3 className={styles.stepTitle}>Step 03</h3>
							<p>pick between Game or Tournament</p>
							<p>Select your Favourite variant</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlaySteps;
