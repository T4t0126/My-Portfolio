import { Layout } from '@/components/layout/Layout';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Trophy, Award, CheckCircle } from 'lucide-react';

const hackathons = [
  {
    title: '1st Place – VIT Hackathon',
    project: 'Oceanographic Data Pipeline',
    description: 'Built a full-stack data pipeline for marine sensor data with anomaly detection.',
  },
  {
    title: 'Best Accuracy – ENIGMA 2K24',
    project: 'ML Model Optimization',
    description: 'Achieved highest model accuracy in competitive ML challenge.',
  },
];

const otherHackathons = [
  'CellStrat Dockathon (Healthcare ML)',
  'Various ML & Data Science Hackathons',
  'Web Development Competitions',
  'Cybersecurity CTF Events',
];

const certifications = [
  { name: 'Ethical Hacking', category: 'Security' },
  { name: 'Python Programming', category: 'Development' },
  { name: 'Web Development', category: 'Development' },
  { name: 'Generative AI', category: 'AI/ML' },
  { name: 'Power BI', category: 'Data' },
  { name: 'Tableau', category: 'Data' },
];

const Experience = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="section-container">
          {/* Header */}
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Experience
              </span>
              <h1 className="mt-2">
                Applied engineering
                <br />
                <span className="text-muted-foreground">through competition.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                As a fresher, my applied experience comes from hackathons—high-pressure 
                environments that demand rapid prototyping, real constraints, and working 
                systems that judges can actually test.
              </p>
            </div>
          </FadeIn>

          {/* Status */}
          <FadeIn delay={0.1}>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-16 max-w-2xl">
              <p className="font-medium text-accent mb-2">Open to Opportunities</p>
              <p className="text-sm text-muted-foreground">
                Currently seeking AI, ML, and Cybersecurity roles—internship or full-time. 
                Hands-on experience in building ML pipelines, data visualization, and 
                secure coding from hackathon and academic projects.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Hackathons */}
            <div>
              <FadeIn delay={0.15}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="font-serif text-2xl">Competition Wins</h2>
                </div>
              </FadeIn>

              <StaggerContainer className="space-y-6">
                {hackathons.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.project}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeIn delay={0.3}>
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Other Hackathon Participation (7+ total)</h4>
                  <ul className="space-y-2">
                    {otherHackathons.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Certifications */}
            <div>
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h2 className="font-serif text-2xl">Certifications</h2>
                </div>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <StaggerItem key={cert.name}>
                    <div className="bg-card border border-border rounded-lg p-4">
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.category}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Timeline Note */}
              <FadeIn delay={0.4}>
                <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">My learning approach:</span> I 
                    believe in learning through building. Each certification represents a 
                    foundation, but the real skill development happens in projects where 
                    theory meets messy reality.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
