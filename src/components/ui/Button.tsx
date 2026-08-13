import clsx from 'clsx'
import Link from 'next/link'

type ButtonProps = {
  text: string
  variant: 'normal' | 'ghost'
  href?: string
  size?: 'default' | 'sm'
}

function Button({ text, variant, href, size = 'default' }: ButtonProps) {
  const className = clsx(
    "rounded-full inline-block tracking-wide text-center font-bold",
    "transition duration-150 ease-in-out cursor-pointer",
    {
      "mt-2 px-14 py-4": size === 'default',
      "px-5 py-2 text-sm": size === 'sm',
    },
    {
      "bg-black text-white hover:shadow-xl hover:opacity-90 active:opacity-80 active:shadow-lg": variant === 'normal',
      "bg-transparent": variant === 'ghost',
    }
  )

  if (href) {
    return (
      <div className="mx-3">
        <Link href={href} className={className}>
          {text}
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-3">
      <button className={className}>{text}</button>
    </div>
  )
}

export default Button