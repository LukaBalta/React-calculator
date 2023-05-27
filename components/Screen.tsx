
const Screen = (props: any) => {
  return (
    <div>

      <input
        onChange={props.onChange}
        value={props.value}
      />

    </div>
  )
}

export default Screen;