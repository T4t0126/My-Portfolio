import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32 min-h-[70vh] flex items-center">
        <div className="section-container">
          <div className="max-w-xl">
            <span className="font-mono text-6xl md:text-8xl text-muted-foreground/30">404</span>
            <h1 className="mt-4 mb-4">Page not found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
