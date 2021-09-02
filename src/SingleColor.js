import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bgc = [...rgb];
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [alert])
  return (
    <article className={`color ${index > 10 && 'color-light'}`} 
    onClick={()=> {
      setAlert(true);
      navigator.clipboard.writeText(hexValue);  
    }}
    style={{backgroundColor: `rgb(${bgc})`}}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p> }
    </article>
  )
}

export default SingleColor
