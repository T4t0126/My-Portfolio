import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { ParticleField } from '@/components/three/ParticleField';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <ParticleField />
      
      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Metadata */}
          <FadeIn delay={0}>
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border rounded-sm">
                <Brain className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-mono text-muted-foreground">AI Engineering</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border rounded-sm">
                <Shield className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-mono text-muted-foreground">Cybersecurity</span>
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.1}>
            <h1 className="text-balance mb-6">
              Building intelligent systems
              <br />
              <span className="text-muted-foreground">with security at the core.</span>
            </h1>
          </FadeIn>

          {/* Subtext */}
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              AI Engineer with expertise in machine learning pipelines, data systems, and secure 
              architectures. I design solutions that are both intelligent and resilient.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2 group">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.4}>
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
              <div>
                <p className="font-mono text-2xl md:text-3xl font-semibold text-accent">7+</p>
                <p className="text-sm text-muted-foreground mt-1">Hackathons</p>
              </div>
              <div>
                <p className="font-mono text-2xl md:text-3xl font-semibold text-accent">4</p>
                <p className="text-sm text-muted-foreground mt-1">Major Projects</p>
              </div>
              <div>
                <p className="font-mono text-2xl md:text-3xl font-semibold text-accent">2</p>
                <p className="text-sm text-muted-foreground mt-1">Competition Wins</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
