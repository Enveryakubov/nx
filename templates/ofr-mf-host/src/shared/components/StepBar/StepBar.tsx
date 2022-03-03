import React from 'react';
import { Steps } from 'antd';
import styles from './Step.module.scss';
import './Stepbar.css';

const { Step } = Steps;

const StepBar = ({ current = 0 }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Страхование квартиры</h1>
      <p className={styles.description}>
        Страхование имущества, отделки в Вашей квартире и гражданской ответственности на сумму до 700 000 руб и
        стоимостью от 1000 руб
      </p>
      <div className={styles.stepContainer}>
        <Steps current={current}>
          <Step title="Программа" />
          <Step title="Оформление" />
          <Step title="Оплата" />
        </Steps>
      </div>
    </div>
  );
};

export default StepBar;
