import { FormEvent } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLocation, useNavigate } from "react-router-dom"
import { Table, TableEnum, getFormData, getFormFields } from "../shared"
import Main from "../components/Main"

export default function Create() {
    const navigate = useNavigate()
    const table = useLocation().pathname.split("/")[1] as Table
    const create = async (e: FormEvent) => {
        e.preventDefault()
        const fd = new FormData(e.target as HTMLFormElement)
        await fetch("http://localhost:5132/api/" + table + "s/", { method: "POST", body: JSON.stringify(getFormData(fd)), headers: {
            "Content-Type": "application/json"
        }})
        navigate("..")
    }
    return <Main heading={"Создать " + TableEnum[table]}>
        <Form onSubmit={create}>
            {getFormFields(table)}
            <Button stretched>Создать</Button>
        </Form>
    </Main>
}
