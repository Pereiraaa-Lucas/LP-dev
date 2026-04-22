import { motion } from 'framer-motion';

const Projects = () => {
  const projs = [
    { title: "Starbucks App", desc: "Landing page focada em UI/UX." },
    { title: "CamisaPRO", desc: "Uniforme com modo escuro." },
    { title: "Elite Barber Shop", desc: "Sistema de agendamento moderno." }
  ];

  return (
    <section id="projetos" className="py-20 px-4">
      {/* max-w-5xl limita a largura e mx-auto centraliza o container */}
      <div className="max-w-5xl mx-auto">
        
        {/* text-center garante que o título fique centralizado em todos os dispositivos */}
        <h2 className="text-3xl font-bold mb-10 text-white text-center">
          Meus <span className="text-orange-500">Projetos</span>
        </h2>

        {/* grid-cols-1: 1 coluna no celular
          sm:grid-cols-2: 2 colunas em tablets
          md:grid-cols-3: 3 colunas em desktops
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projs.map((p, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-orange-500 transition-colors flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{p.title}</h3>
              <p className="text-slate-400 mb-4">{p.desc}</p>
              <a href="#" className="text-orange-500 hover:underline">Ver Código</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;