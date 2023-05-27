'use client';
import { useState } from 'react';
import Screen from '../components/Screen';
import ButtonPad from '@/components/ButtonPad';
import styles from '../styles/page.module.scss'


export default function Home() {

  const [value, setValue] = useState('')

  return (
    <div className={styles.main_wrapper}>
      <Screen
        onChange={(e: any) => {
          setValue(e.target.value)
        }}
        value={value}
      />
      <ButtonPad />
    </div>
  )
}
