import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import AuthWrapper from './components/AuthWrapper';
import Home from './pages/Home';
import Weddings from './pages/Weddings';
import Events from './pages/Events';
import LocationPage from './pages/Location';
import Catering from './pages/Catering';
import ContactPage from './pages/ContactPage';
import Accommodation from './pages/Accommodation';
import About from './pages/About';
import BlogIndex from './pages/Blog/BlogIndex';
import BlogPost from './pages/Blog/BlogPost';
import Impressum from './pages/legal/Impressum';
import Datenschutz from './pages/legal/Datenschutz';
import AGB from './pages/legal/AGB';

function App() {
  return (
    <AuthWrapper>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hochzeiten" element={<Weddings />} />
          <Route path="/veranstaltungen" element={<Events />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/uebernachten" element={<Accommodation />} />
          <Route path="/kulinarik" element={<Catering />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </Layout>
    </AuthWrapper>
  )
}

export default App;
