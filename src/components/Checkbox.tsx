import { InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: never
    label: string
}

export default function Checkbox({ type, ...props }: CheckboxProps) {
    return (
        <label className='transition-all p-2 px-4 grid rounded-full cursor-pointer place-items-center text-blue-400 bg-slate-200 outline outline-2 -outline-offset-2 outline-transparent hover:outline-blue-400 has-[input:checked]:bg-blue-400 has-[input:checked]:text-slate-200'>
            {props.label}
            <input type="checkbox" name="specializations" className='hidden' {...props}/>
        </label>
    )
}