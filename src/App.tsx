import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route, Outlet } from "react-router-dom";
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Bloggish from './components/Bloggish/Bloggish';

const BASE_URL_ROUTE = '/resume-portfolio';

export const ROUTE_PATHS = {
  HOME: BASE_URL_ROUTE + '/',
  RESUME: BASE_URL_ROUTE + '/resume',
  PORTFOLIO: BASE_URL_ROUTE + '/portfolio',
  BLOGGISH: BASE_URL_ROUTE + '/bloggish',
  CONTACT: BASE_URL_ROUTE + '/contact'
}

const Layout = () => {
  return (
    <div className="app">
      {/* Scrollable viewport-constrained content */}
      <main id="main" className="app-main" role="main">
        <div className="viewport">
          <Outlet />
        </div>
      </main>

      {/* Static bottom nav, never scrolls */}
      <NavBar />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Contact />} />
        <Route path={ROUTE_PATHS.HOME} element={<Contact />} />
        <Route path={ROUTE_PATHS.RESUME} element={<Resume />} />
        <Route path={ROUTE_PATHS.PORTFOLIO} element={<Portfolio />} />
        <Route path={ROUTE_PATHS.BLOGGISH} element={<Bloggish />} />
        <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
        <Route path="*" element={<div style={{ padding: 16 }}>Not Found</div>} />
      </Route>
    </Routes>
  );
}

// const App = () => {
  
//   return (
//     <>
//       <NavBar/>
//       <Routes>
//         <Route path={ROUTE_PATHS.HOME} element={<Contact />} />
//         <Route path={ROUTE_PATHS.RESUME} element={<Resume/>} />
//         <Route path={ROUTE_PATHS.PORTFOLIO} element={<Portfolio />} />
//         <Route path={ROUTE_PATHS.BLOGGISH} element={<Bloggish />} />
//         <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
//       </Routes>
//     </>
//   )
// }

export default App
