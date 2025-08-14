import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";

function App() {
  const base = "/teach-react"

  return (
    <BrowserRouter>
      <Routes>
        <Route index path={base} element={<UseStatePage />} />
        <Route path={`${base}/use_state`} element={<UseStatePage />} />
        <Route path={`${base}/use_effect`} element={<UseEffectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
