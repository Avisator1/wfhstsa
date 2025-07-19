import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'

import HomePage from './pages/Home'
import LeadershipPage from './pages/LeadershipPage'

const App = () => {
  return (
    <ReactLenis root options={{ smooth: true, duration: 1.2 }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
        </Routes>
      </Router>
    </ReactLenis>
  )
}

export default App
