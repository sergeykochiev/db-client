import { FormEvent } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLocation, useNavigate } from "react-router-dom"
import { Table, TableEnum, getFormData, getFormFields } from "../shared"
import Main from "../components/Main"
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Create() {
    const navigate = useNavigate()
    const table = useLocation().pathname.split("/")[1] as Table
    const create = async (e: FormEvent) => {
        e.preventDefault()
        const fd = new FormData(e.target as HTMLFormElement)
        await fetch("http://localhost:5152/" + table + "/create/", { method: "POST", body: JSON.stringify(getFormData(fd))})
        navigate("..")
    }
    return <Main heading={"Создать " + TableEnum[table]}>
        <Button onClick={() => navigate("..")}><IoMdArrowRoundBack/></Button>
        <Form onSubmit={create}>
            {getFormFields(table)}
            <Button stretched>Создать</Button>
        </Form>
    </Main>
}
