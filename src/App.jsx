import { BrowserRouter } from "react-router"
import AppRouter from "./router/AppRouter"
import { ColorModeProvider } from "./components/ui/color-mode"

function App() {

  return (
    <BrowserRouter>
      <ColorModeProvider forcedTheme="dark">
        <AppRouter/>
      </ColorModeProvider> 
    </BrowserRouter>
  )
}

export default App
