import Input from "./components/Input";
import TextInput from "./components/Input";
import Select from "./components/Select";
import { Diagnose } from "./model/Diagnose";
import { Doctor } from "./model/Doctor";
import { DoctorDiagnose } from "./model/DoctorDiagnose";
import Specialization from "./model/Specialization";

export enum TableEnum {
    "doctor" = "Доктор",
    "diagnose" = "Диагноз",
    "doctordiagnose" = "Доктор-Диагноз"
}

export type Table = "doctor" | "diagnose" | "doctordiagnose"

export type EntityArray = Doctor[] | Diagnose[] | DoctorDiagnose[]

export type Entity = Doctor | Diagnose | DoctorDiagnose

export type PartialEntityRecord = Partial<Record<keyof Doctor | keyof Diagnose | keyof DoctorDiagnose, Doctor[keyof Doctor] | Diagnose[keyof Diagnose] | DoctorDiagnose[keyof DoctorDiagnose] | null>>

export type EntityFields = keyof Doctor & keyof Diagnose & keyof DoctorDiagnose

export function isTable<T>(e: any, f: keyof T): e is T { return f in e }

export function getFormFields(t: Table) {
    switch(t) {
        case "doctor": return <>
            <Input type="text" name="Name" placeholder="Имя"/>
            <Select>
                {Object.keys(Specialization).map(e => <option value={Specialization[Number(e)]}>{Specialization[Number(e)]}</option>)}
            </Select>
        </>
        case "diagnose": return <>
            <Input type="text" name="Code" placeholder="Код"/>
            <Input type="text" name="Body" placeholder="Содержание"/>
        </>
        case "doctordiagnose": return <>
            <Input type="date" name="Date"/>
            <Input type="number" name="docID" placeholder="ID доктора"/>
            <Input type="number" name="diagID" placeholder="ID диагноза"/>
        </>
    }
}

export function getFormData(e: FormData) {
    const data: PartialEntityRecord = {};
    for(let k of e.keys()) {
        data[k as EntityFields] = e.get(k) as Exclude<FormDataEntryValue, File>
    }
    return data
}