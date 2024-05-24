import { FormEvent } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { Entity, Table, TableEnum, getFormData, getFormFields } from "../shared"
import Main from "../components/Main"

export default function EditEntity() {
    const data: Entity = useLoaderData() as Entity
    const navigate = useNavigate()
    const table = useLocation().pathname.split("/")[1] as Table
    const update = async (e: FormEvent) => {
        e.preventDefault()
        const fd = new FormData(e.target as HTMLFormElement)
        await fetch("http://localhost:5152/api/" + table + "s/id?id=" + data.id, { method: "PATCH", body: JSON.stringify(getFormData(fd)) })
        navigate("..")
    }
    return <Main heading={TableEnum[table] + " с ID " + data.id}>
        <Form onSubmit={update}>
            {getFormFields(table, data)}
            <Button stretched>Изменить</Button>
        </Form>
    </Main>
}


