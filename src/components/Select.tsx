import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
}

export default function Select(p: SelectProps) {
    return (
        <select className="transition-all p-2 px-4 flex-1 text-blue-400 rounded-full font-semibold bg-slate-200 focus:outline-blue-400 outline outline-2 outline-offset-[-1px]  outline-transparent" {...p}>
            {p.children}
        </select>
    )
}
