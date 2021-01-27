import React from 'react';
import { bind } from '../../../utils/bind';
import styles from './Logo.module.css';

const cx = bind(styles);

interface Props {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

export const Logo: React.FunctionComponent<Props> = ({ size }) => {
  return (
    <>
      <img
        src="./logo-color.png"
        data-testid="Logo"
        alt="Jump Logo"
        className={cx(size)}
      />
    </>
  );
};
