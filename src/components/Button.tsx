import { ButtonHTMLAttributes } from 'react'

export default function Button(p: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className='transition-all justify-self-end p-2 rounded-xl font-bold bg-white hover:bg-blue-400 hover:text-gray-100' {...p}>{p.children}</button>
  )
}
