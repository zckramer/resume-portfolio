import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route, Outlet } from "react-router-dom";
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Bloggish from './components/Bloggish/Bloggish';

const BASE_URL_ROUTE = '/resume-portfolio';

export const ROUTE_PATHS = {
  HOME: BASE_URL_ROUTE + '/',
  RESUME: BASE_URL_ROUTE + '/resume',
  PORTFOLIO: BASE_URL_ROUTE + '/portfolio',
  BLOGGISH: BASE_URL_ROUTE + '/bloggish'
}

const Layout = () => {
  return (
    <div className="app">
      <main id="main" className="app-main" role="main">
        <div className="viewport">
          <Outlet />
        </div>
      </main>
      <NavBar />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Resume />} />
        <Route path={ROUTE_PATHS.HOME} element={<Resume />} />
        <Route path={ROUTE_PATHS.RESUME} element={<Resume />} />
        <Route path={ROUTE_PATHS.PORTFOLIO} element={<Portfolio />} />
        <Route path={ROUTE_PATHS.BLOGGISH} element={<Bloggish />} />
        <Route path="*" element={<div style={{ padding: 16 }}>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App
