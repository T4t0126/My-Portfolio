import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { getFeaturedProjects } from '@/lib/projects';

const categoryColors: Record<string, string> = {
  AI: 'bg-accent/10 text-accent border-accent/20',
  Data: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  Cybersecurity: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  'Full-Stack': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
};

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Selected Work
              </span>
              <h2 className="mt-2">Featured Projects</h2>
            </div>
            <Link 
              to="/projects" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link 
                to={`/projects/${project.slug}`}
                className="group block elevated-card h-full"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-flex px-2.5 py-1 text-xs font-mono border rounded-sm ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tech-tag text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                  Read case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile View All */}
        <FadeIn className="sm:hidden mt-8">
          <Link 
            to="/projects" 
            className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
