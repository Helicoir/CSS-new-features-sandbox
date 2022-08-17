import styles from "./styles.module.css";

const HeightDVHPage = () => {
  return (
    <div className={styles.heightDVH}>
      <div className={styles.heightDVH1}>
        height: 100dvh
        <p>メニューなどのUI現在状態の「高さ」 </p>
      </div>
      <div className={styles.heightDVH2}>
        height: 100vh <p>画面の「高さ」</p>
      </div>
      <div className={styles.heightDVH3}>
        height: 100svh
        <p>メニューなどのUI表示時の「高さ」 </p>
      </div>
      <div className={styles.heightDVH4}>
        height: 100lvh
        <p>メニューなどのUI非表示時の「高さ」 </p>
      </div>
    </div>
  );
};

export default HeightDVHPage;
