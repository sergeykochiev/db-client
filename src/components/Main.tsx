import { ReactNode } from 'react'
import Button from './Button'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

type MainProps = {
    heading: string
    init?: boolean
    children: ReactNode
}

export default function Main({ heading, children, init = false }: MainProps) {
    const navigate = useNavigate()
    return <main className='flex justify-center py-[5%] w-screen h-screen'>
        <div className='flex flex-col gap-6'>
            <div className='flex gap-6'>
                {!init && <Button onClick={() => navigate(-1)}><IoMdArrowRoundBack size={20}/></Button>}
                <div className='text-fpurple text-3xl font-bold text-ellipsis'>{heading}</div>
            </div>
            <div className='w-[400px] flex flex-col gap-4'>
                {children}
            </div>
        </div>
    </main>
}