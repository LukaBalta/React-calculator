import styles from '../styles/screen.module.scss'

const Screen = (props: any) => {
  return (
    <div className={styles.screen_wrapper}>

      <input
        className={styles.screen}
        onChange={props.onChange}
        value={props.value}
      />

    </div>
  )
}

export default Screen;