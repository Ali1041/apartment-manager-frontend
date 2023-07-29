import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menuList } from '../utils/constants/CONSTANTS'


const Sidebar = () => {
    const route = useLocation()

    return (

        <div className="h-full bg-white">
            <ul className="py-4  sticky top-20">
                {
                    menuList.map((item) => {
                        const active = route.pathname === item.path ? true : false
                        return (<li className={`mb-3 py-1 ${active ? 'text-active bg-gradient-to-r from-cyan-100 to-white' : ''}`} key={item.path}>
                            <Link to={item.path} className='flex'>
                                <span className={`inline-flex items-center justify-center w-12 h-10 ml-3 text-lg ${active ? 'text-active' : 'text-gray-400'}`}>{item?.icon}</span>
                                <span className={`inline-flex items-center text-sm`}>{active ? <strong>{item.name}</strong> : item.name}</span>
                            </Link>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar