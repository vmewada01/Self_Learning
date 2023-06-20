import React from 'react'

interface HeaderProps{
    label?: string;
    children?: JSX.Element | JSX.Element[];
}

const Header = ({label, children}: HeaderProps) => {
  return (
    <>
    <h2>{label}</h2>
    {children}
    </>
  )
}

export default Header