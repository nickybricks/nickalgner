import { useParams, useNavigate } from 'react-router-dom';
import { getProjectBySlug } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const project = getProjectBySlug(slug || '');

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container flex flex-col items-center justify-center px-4 py-20">
          <h1 className="text-2xl font-bold text-foreground">Project not found</h1>
          <Button variant="ghost" onClick={() => navigate('/')} className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.projectDetail.back}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.projectDetail.back}
        </Button>

        {/* Hero Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {project.description[language]}
          </p>

          {/* Visit Website Button */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex"
          >
            <Button className="gap-2">
              {t.projectDetail.visitWebsite}
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Challenges Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">
            {t.projectDetail.challenges}
          </h2>
          <ul className="mt-4 space-y-3">
            {project.challenges[language].map((challenge, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery Section */}
        <section className="mt-12 pb-12">
          <h2 className="text-xl font-semibold text-foreground">
            {t.projectDetail.gallery}
          </h2>
          <div className="mt-4 grid gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
