import React from 'react';
import styles from './Adminpage.module.css';

const Adminpage = () => {
  const menuItems = [
    { text: 'Dashboard', colorClass: 'red' },
    { text: 'Company', colorClass: 'blue' },
    { text: 'Users', colorClass: 'pink' },
    { text: 'Invoices', colorClass: 'green' },
    { text: 'Messages', colorClass: 'teal' },
    { text: 'Settings', colorClass: 'gray' }
  ];

  return (
    <div className={styles.adminPage}>
      <div className={styles.gridContainer}>
        {menuItems.map((item, index) => (
          <button key={index} className={`${styles.menuItem} ${styles[item.colorClass]}`}>
            <span className={styles.text}>{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Adminpage;
