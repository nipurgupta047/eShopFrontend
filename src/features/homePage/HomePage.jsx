import React from 'react'
import TopBar from '../../components/topBar/TopBar'
import { Routes, Route } from 'react-router-dom'
import AllShops from '../customerView/allShops/AllShops'
import EachShop from '../customerView/eachShop/EachShop'

export default function HomePage() {
    return (
        <div>
            <div>
                <TopBar />
            </div>
            <div>
                <Routes>
                    <Route exact path='/' element={<AllShops />} />
                    <Route exact path='/shop/:id' element={<EachShop />} />
                </Routes>
            </div>
        </div>
    )
}
