import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md p-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          LP.<span className="text-orange-500">dev</span>
        </h1>

        {/* Links de navegação: Escondidos no mobile (hidden), visíveis no desktop (md:flex) */}
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          {['Hero', 'Sobre', 'Habilidades', 'Formação', 'Projetos', 'Contato'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-400 transition">
              {item}
            </a>
          ))}
        </div>

        {/* Botão de Menu para Mobile (Opcional - apenas um ícone para indicar que existe menu) */}
        <div className="md:hidden text-orange-500 text-2xl">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;