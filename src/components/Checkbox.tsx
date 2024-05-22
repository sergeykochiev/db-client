import { InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "radio" | "checkbox"
}

export default function Checkbox({ type = "checkbox", ...p }: CheckboxProps) {
  return (
    <label className='flex gap-2 items-center group'>
        <div className='transition-all h-5 aspect-square bg-white rounded-lg outline-gray-700 outline -outline-offset-2 outline-2 group-has-[input:checked]:bg-blue-400 group-has-[input:checked]:outline-blue-400 hover:outline-blue-400'></div>
        <input type={type} className="hidden" {...p}/>
    </label>
  )
}
