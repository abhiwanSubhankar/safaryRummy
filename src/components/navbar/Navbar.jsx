import { useState } from "react";
import * as styles from "./navbar.module.css";

function Navbar() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email, 'Password:', password);
    }


    return (
        <div className={styles.nav}>
            <div>
                <img src="/logo.svg" alt="logo" />
            </div>

            <div>
                <div className={styles.login}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                        <input
                            type="text"
                            placeholder="Email/Phone"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', flex: '1' }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', flex: '1' }}
                        />
                        <button type="submit" style={{
                            background: "linear-gradient(180deg, #FAD92C 0%, #D19011 100%)",
                            color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'
                        }}>
                            Login
                        </button>
                        <span style={{ color: 'white', display: 'flex', alignItems: 'center' }}>or</span>
                        <button type="button" style={{ backgroundColor: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            <img src="/googleLogin.svg" alt="Google" />
                        </button>
                        <button type="button" style={{ backgroundColor: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            <img src="/facebookLogin.svg" alt="Facebook" />
                        </button>
                    </form>
                    <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>
                        <a href="#" style={{ color: 'white', textDecoration: 'underline' }}>Forgot Password ?</a>
                    </p>

                </div>

                <div className={styles.navigation}>
                    <ul>
                        <li>
                            <button
                                className={styles.optionBtn}
                            // onClick={() => setIsRulesOpen(!isRulesOpen)}
                            >
                                My Rules <span className="ml-1">▼</span>
                            </button>
                            {/* {isRulesOpen && (
                                        <ul className="absolute bg-green-700 mt-2 py-2 rounded shadow-lg">
                                           
                                            <li className="px-4 py-1 hover:bg-green-600">
                                                Rule 1
                                            </li>
                                       
                                        </ul>
                                    )} */}
                        </li>
                        <li>Download App</li>
                        <li>
                            <button
                                className={styles.optionBtn}
                            // onClick={() => setIsRummyTypeOpen(!isRummyTypeOpen)}
                            >
                                Rummy Type <span className="ml-1">▼</span>
                            </button>
                            {/* {isRummyTypeOpen && (
                                        <ul className="absolute bg-green-700 mt-2 py-2 rounded shadow-lg">
                                    
                                            <li className="px-4 py-1 hover:bg-green-600">
                                                Type 1
                                            </li>
                                         
                                        </ul>
                                    )} */}
                        </li>
                        <li>Rummy Tips</li>
                        <li>Rummy Tournament</li>
                        <li>Rummy FAQ</li>
                    </ul>

                </div>

            </div>


        </div>
    )
}

export default Navbar;
