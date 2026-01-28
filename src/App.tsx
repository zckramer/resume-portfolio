import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route, Outlet } from "react-router-dom";
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Bloggish from './components/Bloggish/Bloggish';
import { ROUTE_PATHS } from './routes';
import RouteFocusManager from './components/a11y/RouteFocusManager';

const Layout = () => {
  return (
    <div className="app">
      <a className="skip-link" href="#viewport">Skip to content</a>
      <RouteFocusManager />
      <NavBar />
      <main id="main" className="app-main" role="main" tabIndex={-1}>
        <div id="viewport" className="viewport" tabIndex={-1}>
          <Outlet />
        </div>
      </main>
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
