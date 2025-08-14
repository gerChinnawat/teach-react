import { BrowserRouter, Routes, Route } from "react-router";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import UseRefPage from "./pages/UseRefPage";

function App() {
  const base = "/teach-react/"

  return (
    <BrowserRouter>
      <Routes>
        <Route path={base} element={<UseStatePage />} />
        <Route path={base}>
          <Route path="use_state" element={<UseStatePage />} />
          <Route path="use_effect" element={<UseEffectPage />} />
          <Route path="use_ref" element={<UseRefPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
