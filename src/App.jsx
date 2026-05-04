import KashimaLandingPage from './HomePage'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <KashimaLandingPage />, 
    <Analytics />
  )
}

export default App