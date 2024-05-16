import React from 'react'

import { TopBarProps } from './interface'
import styles from './TopBar.css'

export const TopBar: React.FC<TopBarProps> = ({ text }) => {
  return (
    <div className={styles['top-bar__contianer']}>
      <span className={styles['top-bar__text']}>
        <b>{text}</b>
      </span>
    </div>
  )
}
