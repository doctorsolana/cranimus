import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink className={styles.logo} to="/">
            <img alt="Gamba logo" src="/logo.png" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className={styles.externalLinks}>
            <a href="https://discord.com/invite/j62MJF2Tg2" target="_blank" rel="noreferrer">
              DISCORD
            </a>
            <a href="https://explorer.gamba.so" target="_blank" rel="noreferrer">
              STATS
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
