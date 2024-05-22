import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
}

export default function Select(p: SelectProps) {
    return (
        <select className="transition-all w-full bg-white p-2 px-4 flex-1 rounded-xl focus:outline-gray-700 outline outline-2 -outline-offset-2 hover:outline-blue-400 outline-transparent" {...p}>
            {p.children}
        </select>
    )
}
