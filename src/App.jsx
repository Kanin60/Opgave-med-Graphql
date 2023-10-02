import { Mainlayout } from "./pages/Mainlayout"
import './App.css'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Planet } from "./pages/Planet";

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Mainlayout />} />
              <Route path="/planet/:id" element={<Planet />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
