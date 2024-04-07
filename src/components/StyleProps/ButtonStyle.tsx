import React from "react";


type ButtonStyleProps = {
  btnStyle: React.CSSProperties
}

const ButtonStyle = (props: ButtonStyleProps) => {

  return (

    <>
      <div style={props.btnStyle}>
      button style
      </div>
    </>
  )
}

export default ButtonStyle;
