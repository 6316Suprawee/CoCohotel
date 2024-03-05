import React from 'react';
import styles from './Adminpage.module.css';
import { Link } from 'react-router-dom';
import Admin_edit_site from './Admin_edit_site';
import Adminbooking from './Adminbooking';
import Admin_camera from './Admin_camera';
import Admin_login from './Admin_login';

const menuItems = [
  { text: 'แก้ไขเว็บไซด์', colorClass: 'red', path: '/Admin_edit_site' },
  { text: 'การจอง', colorClass: 'blue', path: '/Adminbooking' },
  { text: 'จัดการกล้อง', colorClass: 'pink', path: '/Admin_camera' },
  { text: 'Logout', colorClass: 'gray', path: '/Admin_login' } // Assuming you have a logout or similar page
];

const AdminPage = () => {
  return (
    <div className={styles.adminPage}>
      <div className={styles.gridContainer}>
        {menuItems.map((item, index) => (
          <a key={index} href={item.path} className={`${styles.menuItem} ${styles[item.colorClass]}`}>
            <span className={styles.text}>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;

