import { HTMLAttributes } from 'react'
import { Doctor } from '../model/Doctor'
import { Diagnose } from '../model/Diagnose'
import { DoctorDiagnose } from '../model/DoctorDiagnose'
import { Entity, isTable } from '../shared'

interface ElementProps<T> extends HTMLAttributes<HTMLElement> { e: T }

export function EntityElement(props: ElementProps<Entity>) {
    let content = ""
    if (isTable<Doctor>(props.e, "Specialization")) content = props.e.Name
    if (isTable<Diagnose>(props.e, "Code")) content = props.e.Body + " - " + props.e.Code
    if (isTable<DoctorDiagnose>(props.e, "Date")) content = props.e.diagID + " - " + props.e.docID + ", " + props.e.Date
    return <div className='p-4 rounded-4 flex items-center'>{content}</div>
}
  
