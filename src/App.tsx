import {fetchContries} from "./components/fetchContries.tsx";
import {Country} from "./components/Country.tsx";

function App() {
  return (
      <>
          <Country></Country>
          <button onClick={fetchContries}></button>
      </>
  )
}

export default App
