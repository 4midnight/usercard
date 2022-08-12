import React from 'react'

interface ButtonSubmitProps{
    children: React.ReactNode | string,
    className: string
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
    children,
    className
}) => {
  return (
    <>
        <button className={className} type="submit">
            {children}
        </button>
    </>
  )
}

export default ButtonSubmit