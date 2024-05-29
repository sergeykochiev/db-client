import { FormEvent } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useNavigate, useParams } from "react-router-dom"
import { SERVER_HOST, SERVER_PORT, Table } from "../shared"
import Main from "../components/Main"
import Input from "../components/Input"
import Checkbox from "../components/Checkbox"
import Specialization from "../model/Specialization"
import TableList from "../components/TableList"

export default function Create() {
    const navigate = useNavigate()
    const params = useParams()
    const table = params.tableName as Table
    const create = async (e: Record<string, any>) => {
        console.log(e)
        await fetch(SERVER_HOST + ":" + SERVER_PORT + "/api/" + table + "s/", { method: "POST", body: JSON.stringify(e), headers: {
            "Content-Type": "application/json"
        }})
        navigate(-1)
    }
    switch(table) {
        case "doctor": return <CreateDoctor createF={create}/>
        case "diagnose": return <CreateDiagnose createF={create}/>
        case "docdiagnose": return <CreateDoctorDiagnose createF={create}/>
    }
}

type InnerPageProps = {
    createF: (e: Record<string, any>) => void
}

function CreateDoctor({ createF }: InnerPageProps) {
    const create = (e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        createF({ ...Object.fromEntries(formData), specializations: formData.getAll("specializations").map(s => Number(s))})
    }
    return <Main heading={"Создать доктора"}>
        <Form onSubmit={create}>
            <Input type="text" name="name" placeholder="Имя" required/>
            <div className="font-bold text-fpurple">Специализация:</div>
            <div className="flex flex-wrap gap-2">
                {Specialization.map((e, i) => <Checkbox key={e} name="specializations" value={i} label={e}/>)}
            </div>
            <Button stretched>Создать</Button>
        </Form>
    </Main>
}

function CreateDiagnose({ createF }: InnerPageProps) {
    const create = (e: FormEvent) => {
        e.preventDefault()
        createF(Object.fromEntries(new FormData(e.target as HTMLFormElement)))
    }
    return <Main heading={"Создать диагноз"}>
        <Form onSubmit={create}>
            <Input type="text" name="body" placeholder="Содержание" required/>
            <Input type="date" name="date" required/>
            <Button stretched>Создать</Button>
        </Form>
    </Main>
}

function CreateDoctorDiagnose({ createF }: InnerPageProps) {
    const create = (e: FormEvent) => {
        e.preventDefault()
        createF(Object.fromEntries(new FormData(e.target as HTMLFormElement)))
    }
    return <Main heading={"Создать диагноз"}>
        <Form onSubmit={create}>
            <TableList name="docId" table="doctor" required/>
            <TableList name="diagId" table="diagnose" required/>
            <Button stretched>Создать</Button>
        </Form>
    </Main>
}
