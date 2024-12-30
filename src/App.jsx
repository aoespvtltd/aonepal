import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react'; // Import lazy and Suspense
import OurTeams from './components/Home/OurTeams';
// import Index from './components/RVM/paisaTrackerClone/Index';

// Lazy load the components
const Home = lazy(() => import('./pages/Home'));
const Index = lazy(() => import('./components/RVM/rvm/Index'));
const LphaVend = lazy(() => import('./components/RVM/lphaVend/Index'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Services = lazy(() => import('./pages/Services'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const RvmComparison = lazy(() => import('./pages/RvmComparison'));
const SecondHome = lazy(() => import('./pages/tryouts/SecondHome'));
const ThirdHome = lazy(() => import('./pages/tryouts/ThirdHome'));
const LoginTry = lazy(() => import('./pages/tryouts/loginTry'));
const Header = lazy(() => import('./components/Header/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const MobileHeader = lazy(() => import('./components/Header/MobileHeader'));
const ScrollToTop = lazy(() => import('./components/scrollToTop'));

// Lazy loading for the address bar (optional)
const AddressBar = lazy(() => import('./components/Header/AddressBar'));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
          {/* Lazy load AddressBar if needed */}
          {/* <AddressBar /> */}
          <Header />
          <MobileHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:slug" element={<ProjectDetails />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/rvmcomparison" element={<RvmComparison />} />
            <Route path="/megavend" element={<Index />} />
            <Route path="/lphaVend" element={<LphaVend />} />

            <Route path="/secondhome" element={<SecondHome />} />
            <Route path="/thirdHome" element={<ThirdHome />} />
            <Route path="/loginTry" element={<LoginTry />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
