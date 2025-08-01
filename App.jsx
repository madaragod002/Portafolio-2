import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import About from "./pages/About"

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}