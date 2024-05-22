import { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "date" | "email" | "time"
}

export default function TextInput(p: TextInputProps) {
  return (
    <input className="transition-all p-2 px-4 rounded-xl flex-1 bg-white focus:outline-gray-700 outline outline-2 -outline-offset-2 hover:outline-blue-400 outline-transparent" {...p}/>
  )
}
