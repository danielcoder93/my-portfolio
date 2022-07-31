import Layout from "./components/Layout";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CaseStudyPage from "./pages/CaseStudyPage";
import PageThree from "./pages/PageThree";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/value-lock-vip"
            element={<CaseStudyPage title="Value Lock Vip" />}
          />
          <Route path="/page-three" element={<PageThree />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
