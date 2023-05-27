import Button from "./Button";
import styles from '../styles/buttonpad.module.scss';


const ButtonPad = () => {
  return (
    <div className={styles.pad_wrapper}>
      <div className={styles.tools_side}>
        <Button
          value={'/'}
        />

        <Button
          value={'x'}
        />

        <Button
          value={'-'}
        />

        <Button
          value={'+'}
        />

        <Button
          value={'='}
        />
      </div>


      <div className={styles.mid}>
        <div className={styles.tool_top}>
          <Button
            value={'AC'}
          />
          <Button
            value={'+/-'}
          />
          <Button
            value={'%'}
          />

        </div>

        <div className={styles.num_pad}>
          <Button
            value={'7'}
          />
          <Button
            value={'8'}
          />
          <Button
            value={'9'}
          />
          <Button
            value={'4'}
          />
          <Button
            value={'5'}
          />
          <Button
            value={'6'}
          />
          <Button
            value={'1'}
          />
          <Button
            value={'2'}
          />
          <Button
            value={'3'}
          />
          <div className={styles.coma}>

            <div className={styles.zero}>
              <Button
                value={'0'}
              />
            </div>
            <div className={styles.zarez}>
              <Button
                value={','}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonPad;