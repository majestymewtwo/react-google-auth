import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login(){
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        )
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Log In Form</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" className={styles.img} alt="login" />
                </div>
                <div className={styles.right}>
                    <button className={styles.google_btn} onClick={googleAuth}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="google icon" />
                        <span>Sign in with Google</span>
                    </button>
                    <p className={styles.text}>
                        New Here? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;