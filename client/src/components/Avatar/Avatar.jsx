import React from 'react'

const Avatar = ({children, backgroundColor,px,py,color,borderRadius,fontSize,cursor,marginRight}) => {

  const style ={
  backgroundColor,
  padding: `${px} ${py}`,
  color: color || 'white',
  borderRadius,
  fontSize,
  textAlign: "center",
  cursor: cursor || null,
  textDecoration: "none",
  borderRadius : borderRadius|| "15%",
  marginRight: marginRight || "0px"
}

  return (
    <div style={style}>
      {children}
    </div>
    
  )
}

export default Avatar