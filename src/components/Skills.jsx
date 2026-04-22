const Skills = () => {
  const skills = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "TypeScript", "GitHub", "VS Code"];
  
  return (
    <section id="habilidades" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-white">Habilidades e <span className="text-orange-500">Ferramentas</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="flex flex-col items-center justify-center p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <span className="text-slate-300 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;