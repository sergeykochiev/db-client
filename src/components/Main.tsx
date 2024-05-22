import React, { HTMLAttributes } from 'react'

interface MainProps extends HTMLAttributes<HTMLElement> {
    heading: string
}

export default function Main({ heading, ...props }: MainProps) {
    return <main className='flex items-center justify-center flex-col gap-4 w-screen h-screen'>
        <div className='text-blue-400 text-3xl font-bold'>{heading}</div>
        <div className='w-[400px] h-[600px] p-8 rounded-3xl bg-gray-100 flex flex-col gap-4' {...props}/>
    </main>
}