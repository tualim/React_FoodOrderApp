import React, { Fragment } from "react";
import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from '../../assets/meals.jpeg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Shuga Kafe</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="a table of food"/>
      </div>
    </Fragment>
  );
};

export default Header;
