import { FormEvent } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { SERVER_HOST, SERVER_PORT, Table } from "../shared"
import Main from "../components/Main"
import { Doctor } from "../model/Doctor"
import Specialization from "../model/Specialization"
import Checkbox from "../components/Checkbox"
import Input from "../components/Input"
import TableList from "../components/TableList"
import { Diagnose } from "../model/Diagnose"
import { DoctorDiagnose } from "../model/DoctorDiagnose"

export default function EditEntity() {
    const navigate = useNavigate()
    const params = useParams()
    const table = params.tableName as Table
    const update = async (e: Record<string, any>) => {
        await fetch(SERVER_HOST + ":" + SERVER_PORT + "/api/" + table + "s/", { method: "PATCH", body: JSON.stringify(e), headers: {
            "Content-Type": "application/json"
        }})
        navigate(-1)
    }
    const remove = async (id: number) => {
        await fetch(SERVER_HOST + ":" + SERVER_PORT + "/api/" + table + "s/id?id=" + id, { method: "DELETE" })
        navigate(-1)
    }
    switch(table) {
        case "doctor": return <EditDoctor updateF={update} deleteF={remove}/>
        case "diagnose": return <EditDiagnose updateF={update} deleteF={remove}/>
        case "docdiagnose": return <EditDoctorDiagnose updateF={update} deleteF={remove}/>
    }
}

type InnerPageProps = {
    updateF: (e: Record<string, any>) => void
    deleteF: (id: number) => void
}

function EditDoctor({ updateF, deleteF }: InnerPageProps) {
    const data: Doctor = useLoaderData() as Doctor
    const update = async (e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        formData.append("id", String(data.id))
        updateF({ ...Object.fromEntries(formData), specializations: formData.getAll("specializations").map(s => Number(s))})
    }
    return <Main heading={"Изменить доктора"}>
        <Form onSubmit={update}>
            <Input type="text" name="name" placeholder="Имя" required defaultValue={data.name}/>
            <div className="font-bold text-fpurple">Специализация:</div>
            <div className="flex flex-wrap gap-2">
                {Specialization.map((e, i) => <Checkbox key={e} name="specializations" value={i} label={e} defaultChecked={data.specializations.includes(i)}/>)}
            </div>
            <Button stretched>Изменить</Button>
        </Form>
        <Button stretched onClick={() => deleteF(data.id)}>Удалить</Button>
    </Main>
}

function EditDiagnose({ updateF, deleteF }: InnerPageProps) {
    const data: Diagnose = useLoaderData() as Diagnose
    const update = async (e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        formData.append("id", String(data.id))
        updateF(Object.fromEntries(formData))
    }
    return <Main heading={"Изменить диагноз"}>
        <Form onSubmit={update}>
            <Input type="text" name="body" placeholder="Содержание" required defaultValue={data.body}/>
            <Input type="date" name="date" required defaultValue={data.date}/>
            <Button stretched>Изменить</Button>
        </Form>
        <Button stretched onClick={() => deleteF(data.id)}>Удалить</Button>
    </Main>
}

function EditDoctorDiagnose({ updateF, deleteF }: InnerPageProps) {
    const data: DoctorDiagnose = useLoaderData() as DoctorDiagnose
    const update = async (e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        formData.append("id", String(data.id))
        updateF(Object.fromEntries(formData))
    }
    return <Main heading={"Изменить диагноз"}>
        <Form onSubmit={update}>
            <TableList name="docId" table="doctor" required defaultValue={data.docId}/>
            <TableList name="diagId" table="diagnose" required defaultValue={data.diagId}/>
            <Button stretched>Изменить</Button>
        </Form>
        <Button stretched onClick={() => deleteF(data.id)}>Удалить</Button>
    </Main>
}


