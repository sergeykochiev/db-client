import { SelectHTMLAttributes, useEffect, useState } from 'react'
import { Entity, Table, TableEnum } from '../shared'

interface TableListProps extends SelectHTMLAttributes<HTMLSelectElement> {
    table: Table
}

export default function TableList({ table, ...props }: TableListProps) {
    const [data, setData] = useState<Entity[]>()
    useEffect(() => {
        const get = async () => {
            const res = await fetch("http://localhost:5132/api/" + table + "s/")
            setData((await res.json()).result as Entity[])
        }
        get()
    }, [])
    return (
        <select className="transition-all w-full bg-slate-200 p-2 px-3 flex-1 rounded-full text-blue-400 focus:bg-fav font-bold outline outline-2 -outline-offset-2 hover:outline-blue-400 outline-transparent" {...props}>
            {data && data.map(e => <option value={e.id}>{TableEnum[table]} с ID {e.id}</option>)}
        </select>
    )
}
