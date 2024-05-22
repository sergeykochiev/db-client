import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link, LinkProps } from 'react-router-dom'

export default function LinkButton(props: LinkProps) {
    const {children, ...p} = props
    return <Link className='flex items-center justify-between px-6 py-3 rounded-3xl bg-slate-200 hover:text-slate-200 transition-all text-2xl outline outline-2 -outline-offset-2 font-semibold hover:bg-blue-400 text-blue-400 group-has-[input:checked]:text-slate-200 group-has-[input:checked]:font-bold outline-blue-400' {...p}>
        {children}
        <IoMdArrowRoundForward/>
    </Link>
}
