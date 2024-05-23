import { ChangeEvent, useEffect, useState } from 'react'
import fetchApi from '../helpers/fetchApi'
import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import Select from '../components/Select'
import { AnyTable, AnyTableKey, ModelUnion } from '../types'

export default function Table() {
    const data: ModelUnion[] = useLoaderData() as ModelUnion[]
    const navigate = useNavigate()
    const pathname = useLocation().pathname.split("/")[1] as AnyTableKey
    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (Number(e.target.value) === -1) {
            navigate("/client/create")
        }
        navigate("/client/" + e.target.value)
    }
    return (
        <div className='rounded-4 bg-gray-200 p-6 flex flex-col gap-4'>
            <Select onChange={changeHandler}>
                <option selected value="-1">Создать</option>
                {data.map(e => <option selected value={e.id}>{AnyTable[pathname]} {e.id}</option>)}
            </Select>
            <Outlet/>
        </div>
    )
}
