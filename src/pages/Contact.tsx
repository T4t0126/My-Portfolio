import { Layout } from '@/components/layout/Layout';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Mail, Linkedin, Github, MessageCircle, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tarun4tech0126@gmail.com',
    href: 'mailto:tarun4tech0126@gmail.com',
    description: 'For professional inquiries and opportunities',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Tarun R',
    href: 'https://linkedin.com/in/tarun-r-60b0602b9',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'T4t0126',
    href: 'https://github.com/T4t0126',
    description: 'View my code and contributions',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 91102 39833',
    href: 'https://wa.me/919110239833',
    description: 'For quick conversations',
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="max-w-2xl">
            {/* Header */}
            <FadeIn>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Contact
              </span>
              <h1 className="mt-2 mb-6">
                Let's connect.
              </h1>
              <p className="text-lg text-muted-foreground mb-12">
                I'm open to AI, ML, and Cybersecurity roles—internship or full-time. 
                If you're working on interesting problems, I'd like to hear about them.
              </p>
            </FadeIn>

            {/* Contact Links */}
            <StaggerContainer className="space-y-4">
              {contactLinks.map((link) => (
                <StaggerItem key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block elevated-card hover:border-accent/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{link.label}</p>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <p className="text-sm text-muted-foreground">{link.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Location Note */}
            <FadeIn delay={0.4}>
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Based in Bengaluru, India.</span>
                  {' '}Open to remote opportunities and willing to relocate for the right role.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
