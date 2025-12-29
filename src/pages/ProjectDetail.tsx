import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { FadeIn } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { getProject } from '@/lib/projects';

const categoryColors: Record<string, string> = {
  AI: 'bg-accent/10 text-accent border-accent/20',
  Data: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  Cybersecurity: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  'Full-Stack': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      <article className="py-24 md:py-32">
        <div className="section-container">
          {/* Back Link */}
          <FadeIn>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.1}>
            <div className="max-w-3xl mb-12">
              <span className={`inline-flex px-2.5 py-1 text-xs font-mono border rounded-sm mb-4 ${categoryColors[project.category]}`}>
                {project.category}
              </span>
              <h1 className="mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground">
                {project.shortDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {project.github && (
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Case Study Content */}
          <div className="max-w-3xl space-y-12">
            {/* Context */}
            <FadeIn delay={0.2}>
              <section>
                <h3 className="font-serif text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-accent" />
                  Context
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.context}
                </p>
              </section>
            </FadeIn>

            {/* Problem */}
            <FadeIn delay={0.25}>
              <section>
                <h3 className="font-serif text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-accent" />
                  Problem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </section>
            </FadeIn>

            {/* System Design */}
            <FadeIn delay={0.3}>
              <section>
                <h3 className="font-serif text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-accent" />
                  System Design
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.systemDesign}
                </p>
              </section>
            </FadeIn>

            {/* Tools */}
            <FadeIn delay={0.35}>
              <section>
                <h3 className="font-serif text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-accent" />
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tech-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            </FadeIn>

            {/* Outcome */}
            <FadeIn delay={0.4}>
              <section>
                <h3 className="font-serif text-xl mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-accent" />
                  Outcome
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.outcome}
                </p>
              </section>
            </FadeIn>

            {/* Key Engineering Insight */}
            <FadeIn delay={0.45}>
              <section className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4 text-accent">
                  Key Engineering Insight
                </h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{project.insight}"
                </p>
              </section>
            </FadeIn>

            {/* Back Link */}
            <FadeIn delay={0.5}>
              <div className="pt-8 border-t border-border">
                <Link 
                  to="/projects" 
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all projects
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
