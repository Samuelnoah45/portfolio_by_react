function MagicButton(props) {
  return (
    <div>
      <div>{props.leadingIcon}</div>
      <button className={props.className} onClick={()=>{props.click(props.name)}}>
        {props.name}
      </button>
      <div>{props.tralingIcon}</div>
    </div>
  );
}

export default MagicButton;