import React from 'react';
import styles from '../styles/style.module.css';

const Component = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h4 className={styles.cardTitle}>Free</h4>
          <p className={styles.cardPrice}>$0<span className={styles.cardDuration}>/month</span></p>
        </div>
        <div className={styles.cardBody}>
          <ul className={styles.cardList}>
            <li>Single User</li>
            <li>5GB Storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
          </ul>
        </div>
        <div className={styles.cardFooter}>
          <button className={styles.cardButton}>Select</button>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h4 className={styles.cardTitle}>Plus</h4>
          <p className={styles.cardPrice}>$9<span className={styles.cardDuration}>/month</span></p>
        </div>
        <div className={styles.cardBody}>
          <ul className={styles.cardList}>
            <li><strong>5 Users</strong></li>
            <li>50GB Storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
          </ul>
        </div>
        <div className={styles.cardFooter}>
          <button className={styles.cardButton}>Select</button>
        </div>
      </div>

</div>
  );
};

export default Component;
 