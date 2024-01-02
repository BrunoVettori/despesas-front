import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/home/home'

import Sidebar from '../layout/sidebar/sidebar'

function Router() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default Router
