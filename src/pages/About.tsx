import { Layout } from '@/components/layout/Layout';
import { FadeIn } from '@/components/ui/motion';
import { GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="max-w-3xl">
            {/* Header */}
            <FadeIn>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                About
              </span>
              <h1 className="mt-2 mb-8">
                Engineering systems that
                <br />
                <span className="text-muted-foreground">think and protect.</span>
              </h1>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={0.1}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Tarun, an AI Engineer and Cybersecurity practitioner based in Bengaluru. 
                  I build machine learning pipelines, design secure data systems, and ship 
                  solutions that work in production—not just in notebooks.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My approach to engineering is straightforward: understand the problem deeply, 
                  design for the constraints you have, and iterate based on real feedback. I 
                  don't believe in complexity for its own sake—the best systems are often the 
                  ones that do less, but do it reliably.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  What draws me to both AI and security is the adversarial thinking they require. 
                  In ML, you're constantly asking "how will this model fail?" In security, it's 
                  "how will this system be attacked?" Both disciplines demand rigorous testing 
                  and a healthy skepticism of your own assumptions.
                </p>
              </div>
            </FadeIn>

            {/* Details */}
            <FadeIn delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-6 mt-12 pt-12 border-t border-border">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Bengaluru, India</p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-sm text-muted-foreground">
                      B.E. in AI & Machine Learning
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Vemana Institute of Technology • CGPA: 7.04
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Philosophy */}
            <FadeIn delay={0.3}>
              <div className="mt-12 pt-12 border-t border-border">
                <h3 className="font-serif text-2xl mb-6">How I work</h3>
                <div className="grid gap-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-2">Start with the problem, not the tool</h4>
                    <p className="text-sm text-muted-foreground">
                      I resist the urge to use the latest framework or model just because it's 
                      new. The right tool is the one that solves the actual problem with 
                      acceptable trade-offs.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-2">Test your assumptions early</h4>
                    <p className="text-sm text-muted-foreground">
                      Whether it's a model hypothesis or a security boundary, I try to 
                      invalidate assumptions as quickly as possible. Cheap failures 
                      early are better than expensive failures late.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-2">Documentation is architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      If I can't explain what a system does simply, the system is probably 
                      too complex. Good documentation isn't separate from good design—it's 
                      a forcing function for it.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
