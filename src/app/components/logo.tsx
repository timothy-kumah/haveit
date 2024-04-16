import React from 'react'

const logo = ({title,className}) => {
  return (
    <h1 className={`text-3xl font-extrabold uppercase ${className}`}>{title}</h1>
  )
}

export default logo