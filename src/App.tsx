import  { useState, Suspense, lazy, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load section components
const HomePageSection = lazy(() => import('./components/HomePageSection'));
const AboutPageSection = lazy(() => import('./components/AboutPageSection'));
const ContactPageSection = lazy(() => import('./components/ContactPageSection'));

function App() {
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null);

  const scrollToSection = useCallback((sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      requestAnimationFrame(() => {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 64;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      });
    }
  }, []);

  const openModal = useCallback((imageUrl: string): void => {
    setModalImageUrl(imageUrl);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback((): void => {
    setModalImageUrl(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <Suspense 
        fallback={
          <div className="min-h-[calc(100vh-128px)] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }>
          <HomePageSection onImageClick={openModal} />
          <AboutPageSection />
          <ContactPageSection />
        </Suspense>
      </main>
      <Footer />
      <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />
    </div>
  );
}

export default App;