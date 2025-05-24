import './App.css'
import Header from './components/Header'
import BondPage from './pages/BondPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BondPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
