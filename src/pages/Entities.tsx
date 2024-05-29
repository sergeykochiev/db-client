import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { EntityElement } from '../components/EntityElement'
import { Table, TableEnum } from '../shared'
import Main from '../components/Main'
import Button from '../components/Button'
import { Doctor } from '../model/Doctor'
import { DoctorDiagnose } from '../model/DoctorDiagnose'
import { Diagnose } from '../model/Diagnose'

export default function Entities() {
    const navigate = useNavigate()
    const params = useParams()
    const table = params.tableName as Table
    let entities
    const onClick = (id: number) => navigate(String(id))
    switch(table) {
        case "doctor": entities = <DoctorEntities onClick={onClick}/>; break
        case "diagnose": entities = <DiagnoseEntities onClick={onClick}/>; break
        case "docdiagnose": entities = <DoctorDiagnoseEntities onClick={onClick}/>; break
    }
    return <Main heading={TableEnum[table]}>
        <Button stretched onClick={() => navigate("create")}>Создать</Button>
        <div className='flex flex-col gap-4 h-full'>
            {entities}
        </div>
    </Main>
}

type InnerPageProps = {
    onClick: (id: number) => void
}

function DoctorEntities({ onClick }: InnerPageProps) {
    const data: Doctor[] = useLoaderData() as Doctor[]
    return <>
        {data.length ? data.sort((a, b) => a.id - b.id).sort((a, b) => a.id - b.id).map(e => <EntityElement label={e.id + ".     " + e.name} key={e.id} onClick={() => onClick(e.id)}/>) : <div className='flex items-center rounded-xl w-full h-fullrounded-4 justify-center text-fpurple'>Нет данных</div>}
    </>
}

function DiagnoseEntities({ onClick }: InnerPageProps) {
    const data: Diagnose[] = useLoaderData() as Diagnose[]
    return <>
        {data.length ? data.map(e => <EntityElement label={e.id + ". " + e.body} key={e.id} onClick={() => onClick(e.id)}/>) : <div className='flex items-center rounded-xl w-full h-fullrounded-4 justify-center text-fpurple'>Нет данных</div>}
    </>
}

function DoctorDiagnoseEntities({ onClick }: InnerPageProps) {
    const data: DoctorDiagnose[] = useLoaderData() as DoctorDiagnose[]
    return <>
        {data.length ? data.sort((a, b) => a.id - b.id).map(e => <EntityElement label={e.id + ". Доктор с Id " + e.docId + " - Диагноз с Id " + e.diagId} key={e.id} onClick={() => onClick(e.id)}/>) : <div className='flex items-center rounded-xl w-full h-fullrounded-4 justify-center text-fpurple'>Нет данных</div>}
    </>
}

