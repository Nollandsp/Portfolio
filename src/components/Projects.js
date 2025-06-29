"use client";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Weathora",
      description:
        "Weathora est une application météo simple et intuitive, centrée exclusivement sur les villes françaises. Elle permet à l'utilisateur de saisir le nom d'une ville et d'obtenir rapidement ses conditions météorologiques actuelles.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com/Nollandsp/Weathora",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      id: 2,
      title: "EventMate",
      description:
        "EventMate est une application web qui permet à n'importe qui d'organiser ses évènements sur scène.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/Nollandsp/EventMate",
      technologies: ["HTML", "CSS", "Javascript", "Supabase"],
    },
    {
      id: 3,
      title: "Sport.com",
      description:
        "Sport.com est un site qui permet de retrouver des articles de sports de combats.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com/Nollandsp/sport.com",
      technologies: ["HTML", "CSS"],
    },
  ];

  return (
    <section
      id="completed-projects"
      className="w-screen relative left-1/2 right-1/2 -mx-[50vw] min-h-screen  py-20 mt-20"
    >
      <div className="w-full px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            COMPLETED PROJECTS
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Découvrez mes créations et réalisations techniques, de l'idée à la
            mise en production
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
              style={{
                animationDelay: `${index * 0.15}s`,
                animation: "fadeInUp 0.6s ease forwards",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
