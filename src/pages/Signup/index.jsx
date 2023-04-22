import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Signup(){
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Sign Up Form</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" className={styles.img} alt="signup" />
                </div>
                <div className={styles.right}>
                    <button className={styles.google_btn} onClick={googleAuth}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="google icon" />
                        <span>Sign up with Google</span>
                    </button>
                    <p className={styles.text}>
                        Already Have Account? <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;