import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
    name: string,
    variant: 'normal' | 'ghost'
}

function Button({name, variant}: ButtonProps) {
  return (
    <div className='mx-3'>
      <button className={clsx(
          "mt-2 rounded-full inline-block px-14 py-4 tracking-wide text-center font-bold",
          "transition duration-150 ease-in-out cursor-pointer",
          {
              "bg-black text-white hover:shadow-xl hover:opacity-90 active:opacity-80 active:shadow-lg": variant === 'normal',
              "bg-transparen": variant === 'ghost'
          }
      )}>
        {name}
        </button>
    </div>
  )
}

export default Button