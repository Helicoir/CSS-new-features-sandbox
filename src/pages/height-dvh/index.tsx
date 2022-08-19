import { useState } from "react";
import styles from "./styles.module.css";

const HeightDVHPage = () => {
  const [vhModalIsOpen, setVhModalIsOpen] = useState(false);
  const [dvhModalIsOpen, setDvhModalIsOpen] = useState(false);
  return (
    <>
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
      <div className={styles.heightDVHmodals}>
        <button onClick={() => setVhModalIsOpen(true)}>100vhモーダル</button>
        {vhModalIsOpen && (
          <div onClick={() => setVhModalIsOpen(false)} className={styles.modal}>
            height: 100vh（メニューなどのUI現在状態の「高さ」）
          </div>
        )}
        <button onClick={() => setDvhModalIsOpen(true)}>100vhモーダル</button>
        {dvhModalIsOpen && (
          <div
            onClick={() => setDvhModalIsOpen(false)}
            className={`${styles.modal} ${styles.dvh100}`}
          >
            height: 100dvh（メニューなどのUI現在状態の「高さ」）
          </div>
        )}
      </div>
    </>
  );
};

export default HeightDVHPage;
