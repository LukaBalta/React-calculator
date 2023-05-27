'use client';
import styles from '../styles/page.module.scss';
import { useState } from 'react';
import Screen from '../components/Screen';

export default function Home() {

  const [value, setValue] = useState('')

  return (
    <main className={styles.main}>
      <Screen
        onChange={(e: any) => {
          setValue(e.target.value)
        }}
        value={value}
      />
    </main>
  )
}
