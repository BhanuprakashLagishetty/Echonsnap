import React from 'react'
import MiniDrawer from '../../Components/Home'
import { Box } from '@mui/material'
import WrappedDashBoardPage from './WrappedDashBoardPage'

function DashBoardPage() {
  return (
    <>
  <MiniDrawer component={<WrappedDashBoardPage/>}/>
  
      
    </>
  )
}

export default DashBoardPage
