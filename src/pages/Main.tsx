import { Outlet } from 'react-router-dom'
import Tab from '../components/Tab'

export default function Main() {
    return <main className='p-64 px-[25%] grid place-items-center'>
        <div className='rounded-xl overflow-hidden flex flex-col'>
            <div className='flex'>
                <Tab to="/visit">Учителя</Tab>
                <Tab to="/service">Ученики</Tab>
                <Tab to="/client">Классы</Tab>
            </div>
            <Outlet/>
        </div>
    </main>
}
