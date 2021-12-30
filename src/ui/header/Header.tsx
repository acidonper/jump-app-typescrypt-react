import React from 'react';
import { bind } from '../../utils/bind';
import styles from './Header.module.css';
import { Logo } from '../../core/components/logo/Logo';

const cx = bind(styles);

interface Props {}

export const Header: React.FunctionComponent<Props> = () => {
  return (
    <>
      <div role='logo' className={cx('logo')}>
        <a href='/'>
          <Logo size='xxl'></Logo>
        </a>
        <h1>Jump App v.2.1 DEV - user1 </h1>
      </div>
    </>
  );
};
