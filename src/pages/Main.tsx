import { Outlet } from 'react-router-dom'
import Tab from '../components/Tab'

export default function Main() {
    return <main className='p-64 px-[25%] grid place-items-center'>
        <div className='rounded-xl overflow-hidden flex flex-col'>
            <div className='grid grid-flow-col auto-cols-fr'>
                <Tab to="/visit/create">Посещения</Tab>
                <Tab to="/service/create">Услуги</Tab>
                <Tab to="/client/create">Клиенты</Tab>
            </div>
            <Outlet/>
        </div>
    </main>
}
