import { BrowserRouter } from "react-router"
import AppRouter from "./router/AppRouter"
import Layout from "./Layout"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <AppRouter/>
      </Layout>
    </BrowserRouter>
  )
}

export default App
