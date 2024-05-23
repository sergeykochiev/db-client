import { ChangeEvent, useEffect, useState } from 'react'
import fetchApi from '../helpers/fetchApi'
import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import Select from '../components/Select'
import { AnyTable, AnyTableKey, ModelUnion } from '../types'

export default function Table() {
    const data: ModelUnion[] = useLoaderData() as ModelUnion[]
    const navigate = useNavigate()
    const path = useLocation().pathname.split("/")
    return (
        <div className='rounded-4 bg-gray-200 p-6 flex flex-col gap-4'>
            <Select onChange={(e: ChangeEvent<HTMLSelectElement>) => navigate("/" + path[1] + "/" + e.target.value)}>
                <option selected default value="create">Создать</option>
                {data.map(e => <option selected value={e.id}>{AnyTable[path[1] as AnyTableKey]} {e.id}</option>)}
            </Select>
            <Outlet/>
        </div>
    )
}
