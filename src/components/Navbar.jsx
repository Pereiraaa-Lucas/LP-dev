import { useState } from 'react'; // 1. Importar o useState

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // 2. Criar o estado do menu

  const links = ['Hero', 'Sobre', 'Habilidades', 'Formação', 'Projetos', 'Contato'];

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md p-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          LP.<span className="text-orange-500">dev</span>
        </h1>

        {/* Links Desktop (visíveis apenas no desktop) */}
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-400 transition">
              {item}
            </a>
          ))}
        </div>

        {/* Botão de Menu Mobile (visível apenas no celular) */}
        <button 
          className="md:hidden text-orange-500 text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)} // 3. Ao clicar, inverte o valor de isOpen (true/false)
        >
          {isOpen ? '✕' : '☰'} {/* Mostra X se aberto, ☰ se fechado */}
        </button>
      </div>

      {/* Menu Mobile (Aparece apenas se isOpen for true) */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-slate-900 p-6 rounded-lg flex flex-col gap-4 text-center">
          {links.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-white hover:text-orange-400 transition"
              onClick={() => setIsOpen(false)} // Fecha o menu ao clicar em um link
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;