import React, { MouseEventHandler, useState } from 'react';
import classnames from 'classnames';
import styles from './Drawer.module.scss';
import { Link } from 'react-router-dom';
import { getPath } from '@routes';

type DrawerType = {
  isOpen?: boolean;
  onClickLogOut?: () => void;
  onClick: MouseEventHandler<any>,
};

const Drawer: React.FC<DrawerType> = ({ isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classnames(styles.drawerToggleButton, {
        [styles.drawerToggleButtonIsOpen]: isOpen,
      })}
    >
      <span></span>
    </div>
  );
};

export default Drawer;
