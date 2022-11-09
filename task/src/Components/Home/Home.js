import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>

      </div>
      <div className={styles.options}>
        <div className={styles.topbar}>
          <div className={styles.logoname}>
            <div className={styles.logo}>
              <img src="./images/Vector.svg" alt="" />
            </div>
            <div className={styles.name}>CanvasEditor</div>
          </div>
          <div className={styles.reset}>
            <div className={styles.resetText}>Reset</div>
            <div className={styles.resetlogo}>
              <img src="./images/resetlogo.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;