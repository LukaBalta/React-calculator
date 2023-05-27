

const Button = (props: any) => {
  return (
    <button
      value={props.value}
      onClick={props.onClick}
      className={props.className}
    />
  )
}

export default Button;