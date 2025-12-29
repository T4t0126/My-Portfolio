import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { projects } from '@/lib/projects';

const categoryColors: Record<string, string> = {
  AI: 'bg-accent/10 text-accent border-accent/20',
  Data: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  Cybersecurity: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  'Full-Stack': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
};

const Projects = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="section-container">
          {/* Header */}
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Projects
              </span>
              <h1 className="mt-2">
                Work that solves
                <br />
                <span className="text-muted-foreground">real problems.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Each project here represents a complete engineering effort—from problem 
                definition through system design to deployment. Click through for detailed 
                case studies.
              </p>
            </div>
          </FadeIn>

          {/* Projects List */}
          <StaggerContainer className="space-y-6">
            {projects.map((project, index) => (
              <StaggerItem key={project.slug}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block elevated-card hover:bg-elevated transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Number */}
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <span className="font-mono text-sm text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-flex px-2.5 py-1 text-xs font-mono border rounded-sm ${categoryColors[project.category]}`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tags & Arrow */}
                    <div className="flex items-center gap-4">
                      <div className="hidden lg:flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="tech-tag text-[10px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
