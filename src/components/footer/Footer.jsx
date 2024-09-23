import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h3>Company</h3>
                <ul>
                    <li>Home</li>
                    <li>Studio</li>
                    <li>Service</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>Terms & Policies</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Explore</li>
                    <li>Accessibility</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>Follow Us</h3>
                <ul>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>Terms & Policies</h3>
                <address>
                    A/1 156, Shahadara opst,<br />
                    New Delhi - 110007.<br />
                    (123) 456789000<br />
                    <a href="mailto:info@safarirummy.com">info@safarirummy.com</a>
                </address>
            </div>
        </footer>
    );
};

export default Footer;
