import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Produits from './pages/Produits';
import ProduitDetail from './pages/ProduitDetail';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Actualites from './pages/Actualites';
import Contacts from './pages/Contacts';
import { Button } from './components/Shared';

function NotFound() {
  return (
    <section className="relative min-h-screen bg-navy-950 grid place-items-center overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-20 w-[30rem] h-[30rem] rounded-full bg-berec-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 w-[30rem] h-[30rem] rounded-full bg-gold-400/10 blur-3xl" />
      <div className="relative text-center px-5">
        <p className="font-heading text-[9rem] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-berec-400 to-berec-700">
          404
        </p>
        <p className="mt-6 font-heading text-3xl font-bold text-white">Page introuvable</p>
        <p className="mt-3 text-white/60 max-w-md mx-auto">La page que vous cherchez a été déplacée ou n'existe plus.</p>
        <div className="mt-9">
          <Button to="/" variant="gold">Retour à l'accueil</Button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <a href="#contenu" className="skip-link">Aller au contenu</a>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/produits/:slug" element={<ProduitDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
