import Navbar from "./components/Navbar"
import SectionOne from "./components/SectionOne"

function App() {

  return (
    <>
      <header className="w-full flex justify-center">
        <Navbar />
      </header>
      <main>
        <SectionOne />
      </main>
    </>
  )
}

export default App
