import { useState } from "react";
import styles from "./styles.module.css";

const HeightDVHPage = () => {
  const [vhModalIsOpen, setVhModalIsOpen] = useState(false);
  const [dvhModalIsOpen, setDvhModalIsOpen] = useState(false);
  const [svhModalIsOpen, setSvhModalIsOpen] = useState(false);
  const [lvhModalIsOpen, setLvhModalIsOpen] = useState(false);
  return (
    <>
      {vhModalIsOpen && (
        <div onClick={() => setVhModalIsOpen(false)} className={styles.modal}>
          height: 100vh（メニューなどのUI現在状態の「高さ」）
        </div>
      )}
      {dvhModalIsOpen && (
        <div
          onClick={() => setDvhModalIsOpen(false)}
          className={`${styles.modal} ${styles.dvh100}`}
        >
          height: 100dvh（メニューなどのUI現在状態の「高さ」）
        </div>
      )}
      {svhModalIsOpen && (
        <div
          onClick={() => setSvhModalIsOpen(false)}
          className={`${styles.modal} ${styles.svh100}`}
        >
          height: 100svh（メニューなどのUI表示時の「高さ」）
        </div>
      )}
      {lvhModalIsOpen && (
        <div
          onClick={() => setLvhModalIsOpen(false)}
          className={`${styles.modal} ${styles.lvh100}`}
        >
          height: 100dvh（メニューなどのUI非表示時の「高さ」）
        </div>
      )}
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
        <button onClick={() => setDvhModalIsOpen(true)}>100dvhモーダル</button>
        <button onClick={() => setDvhModalIsOpen(true)}>100svhモーダル</button>
        <button onClick={() => setDvhModalIsOpen(true)}>100lvhモーダル</button>
      </div>
    </>
  );
};

export default HeightDVHPage;
