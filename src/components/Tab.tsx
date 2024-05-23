import { Link, LinkProps, useLocation } from 'react-router-dom'

interface TabProps extends LinkProps {
}

export default function Tab(p: TabProps) {
    const location = useLocation()
    const current = location.pathname.split("/")[1] == p.to.toString().split("/")[1]
    return (
        <label className='group'>
            <Link className='group-last:rounded-tr-xl group-first:rounded-tl-xl py-3 px-16 bg-slate-200 grid place-items-center transition-all text-2xl outline outline-2 -outline-offset-2 outline-transparent font-semibold text-blue-400 group-has-[input:checked]:text-slate-200 group-has-[input:checked]:bg-blue-400 hover:outline-blue-400' to={p.to}>{p.children}</Link>
            <input type='checkbox' className='hidden' readOnly checked={current}/>
        </label>
    
  )
}
