import { redirect, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { EntityElement } from '../components/EntityElement'
import { EntityArray, Table, TableEnum } from '../shared'
import Main from '../components/Main'
import Button from '../components/Button'
import { IoMdArrowRoundBack } from 'react-icons/io'

export default function Entities() {
    const data: EntityArray = useLoaderData() as EntityArray
    const table = useLocation().pathname.split("/")[1] as Table
    const navigate = useNavigate()
    return <Main heading={TableEnum[table]}>
        <Button onClick={() => navigate("..")}><IoMdArrowRoundBack/></Button>
        <div className='flex flex-col gap-4 h-full'>
            <Button stretched onClick={() => navigate("create")}>Создать</Button>
            {data.map(e => <EntityElement e={e} onClick={() => navigate(e.id)}/>)}
            {data.length === 0 && <div className='flex items-center rounded-xl w-full h-full outline outline-1 -outline-offset-1 outline-blue-400 rounded-4 justify-center text-blue-400'>Нет данных</div>}
        </div>
    </Main>
}
