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
		<div  className={styles.main}>

			<div className={styles.infoBar}>
				{items.map((item, index) => (
					<div key={index} className={styles.infoItem}>
						<img src={item.icon} alt={item.text} className={styles.icon} />
						<span>{item.text}</span>
					</div>
				))}
			</div>
			<div>
				<div></div>

			</div>

		</div>
	);
}

export default DownloadSection;
