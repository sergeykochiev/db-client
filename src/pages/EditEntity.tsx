import { FormEvent } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { Entity, Table, TableEnum, getFormData, getFormFields } from "../shared"
import Main from "../components/Main"
import { IoMdArrowRoundBack } from "react-icons/io"

export default function EditEntity() {
    const data: Entity = useLoaderData() as Entity
    const navigate = useNavigate()
    const table = useLocation().pathname.split("/")[1] as Table
    const update = async (e: FormEvent) => {
        e.preventDefault()
        const fd = new FormData(e.target as HTMLFormElement)
        await fetch("/api/" + table + "/edit/" + data.id + "/", { method: "UPDATE", body: JSON.stringify(getFormData(fd)) })
        navigate("..")
    }
    return <Main heading={TableEnum[table] + " с ID " + data.id}>
        <Button onClick={() => navigate("..")}><IoMdArrowRoundBack size="lg"/></Button>
        <Form onSubmit={update}>
            {getFormFields(table)}
            <Button stretched>Создать</Button>
        </Form>
    </Main>
}


