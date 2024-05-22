import { InputHTMLAttributes } from 'react'

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input className="transition-all p-2 px-4 font-semibold rounded-full flex-1 placeholder:font-normal bg-slate-200 focus:outline-blue-400 text-blue-400 placeholder:text-slate-400 outline outline-2 outline-offset-[-1px]  outline-transparent" {...props}/>
}
