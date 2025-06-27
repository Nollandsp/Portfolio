export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plateforme e-commerce complète avec Next.js, Stripe et MongoDB",
      image: "/api/placeholder/400/300",
      tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard de visualisation de données avec React et D3.js",
      image: "/api/placeholder/400/300",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Mobile App",
      description: "Application mobile avec React Native et Firebase",
      image: "/api/placeholder/400/300",
      tags: ["React Native", "Firebase", "TypeScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projets" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Projets
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-morphism rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
                    >
                      <span className="text-white">🔗</span>
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
                    >
                      <span className="text-white">👁️</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
