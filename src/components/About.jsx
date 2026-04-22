import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre" className="py-20 px-6 max-w-4xl mx-auto">
      {/* Título alterado: "Sobre" em branco, "Mim" em laranja */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-white"
      >
        Sobre <span className="text-orange-500">Mim</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="space-y-6 text-slate-300 leading-relaxed text-lg"
      >
        <p>
          Olá! Sou Lucas Pereira, tenho 21 anos e sou um aspirante a Desenvolvedor Front-End movido pelo desafio de transformar linhas de código em experiências digitais memoráveis.
        </p>
        <p>
          Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS), com formação prevista para julho de 2028. Minha jornada na tecnologia começou com uma base sólida em Python, HTML5, CSS e JavaScript, e desde então venho refinando minha capacidade de unir código limpo a um design moderno e funcional.
        </p>
        <p>
          Estou focado em conquistar minha primeira oportunidade como Estagiário ou Suporte Júnior. Acredito que a tecnologia deve ser visualmente impressionante, mas, acima de tudo, eficiente e acessível.
        </p>
      </motion.div>
    </section>
  );
};

export default About;