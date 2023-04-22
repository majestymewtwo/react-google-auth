import styles from "./styles.module.css";

function Home(props) {
  const user = props.user;
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Home Page</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img
            src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
            className={styles.img}
            alt="profile"
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.form_heading}>Profile</h2>
          <img src={props.user.picture} alt="profile" className={styles.profile_img} />
          <h2 className={styles.form_heading}>Name : {user.name}</h2>
          <h2 className={styles.form_heading}>Email : {user.email}</h2>
          <button className={styles.btn} onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
