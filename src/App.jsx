import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RoutesMain } from './routes/RoutesMain'
import { GlobalStyle } from './styles/global'
import { ResetStyle } from './styles/reset'


function App() {
  
  return (
    <div>
      <GlobalStyle />
      <ResetStyle />
      <RoutesMain />
    </div>
  )
}

export default App
