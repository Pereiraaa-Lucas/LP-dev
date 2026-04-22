import { motion } from 'framer-motion';
// 1. IMPORTANTE: Importe a sua imagem aqui
import fotoPerfil from '../assets/perfil.png'; 

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* --- COLUNA DA FOTO --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* O "brilho" laranja de fundo (opcional, mas fica lindo) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            {/* A FOTO COM A BORDA LARANJA */}
            <img 
              src={fotoPerfil} 
              alt="Foto de perfil de Lucas Pereira" 
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-orange-500 shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* --- COLUNA DO TEXTO --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-orange-500 leading-tight">
            Lucas Pereira
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-xl">
            Desenvolvedor Front-End · Graduando em ADS
          </p>
          
          <div className="flex gap-4">
            <a href="#contato" className="bg-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition">
              Vamos conversar
            </a>
            <a href="#projetos" className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-950 transition">
              Ver projetos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;