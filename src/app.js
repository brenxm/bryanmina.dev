
import NavBar from "./components/nav";

function App(prop) {
  return (
    <div className="app-container">
      <NavBar />
      {prop.route}
    </div>
  )
}

export default App;