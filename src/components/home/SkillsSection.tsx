import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Brain, Shield, Database, Code } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    skills: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    skills: ['Ethical Hacking', 'Penetration Testing', 'Nmap', 'Wireshark', 'Cryptography'],
  },
  {
    icon: Database,
    title: 'Data & Tools',
    skills: ['PostgreSQL', 'Power BI', 'Tableau', 'Docker', 'Git', 'Linux'],
  },
  {
    icon: Code,
    title: 'Development',
    skills: ['Python', 'JavaScript', 'React', 'Node.js', 'Django', 'FastAPI'],
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Technical Expertise
            </span>
            <h2 className="mt-2">Skills & Technologies</h2>
            <p className="mt-4 text-muted-foreground">
              A balanced foundation across AI engineering and security—building systems 
              that are both intelligent and resilient.
            </p>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="bg-card border border-border rounded-lg p-6 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4">
                  <category.icon className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-medium mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill} 
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
