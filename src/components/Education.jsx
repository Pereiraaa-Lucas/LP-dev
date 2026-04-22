import { FaGraduationCap, FaTools, FaDesktop } from 'react-icons/fa';

const Education = () => {
  const education = [
    { title: "Graduação em ADS", subtitle: "Cursando - Previsão Jul/2028", desc: "Foco em engenharia de software e arquitetura.", icon: <FaGraduationCap /> },
    { title: "Mecânica e Injeção Eletrônica", subtitle: "Giga Byte - 2018 - 2019", desc: "Análise de falhas e sistemas complexos - refinou capacidade analítica.", icon: <FaTools /> },
    { title: "Informática Educacional", subtitle: "All Net", desc: "Base sólida em pacote Office, educação financeira e redes.", icon: <FaDesktop /> },
  ];

  return (
    <section id="formação" className="py-20 px-6">
      {/* Título alterado: "Formação" em branco, "Acadêmica" em laranja */}
      <h2 className="text-3xl font-bold mb-10 text-white">
        Formação <span className="text-orange-500">Acadêmica</span>
      </h2>
      
      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-orange-500 transition-colors">
            <div className="text-orange-500 text-2xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-orange-500 font-medium mb-2">{item.subtitle}</p>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;