import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    stretched?: boolean
}

export default function Button({ stretched = false, ...props}) {
    return (
    <button className={`${stretched ? "w-full px-4 p-2" : "max-w-max aspect-square p-3"} transition-all grid place-items-center justify-self-end rounded-full font-bold outline outline-blue-400 outline-2 text-blue-400 -outline-offset-2 bg-slate-200 hover:bg-blue-400 hover:text-slate-100`} {...props}>{props.children}</button>
    )
}
