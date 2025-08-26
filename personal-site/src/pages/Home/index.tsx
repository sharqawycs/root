import Page from '@/components/layout/Page';
import Seo from '@/components/Seo';
import { AboutSection, SocialLinksSection } from './sections';

export default function Home() {
  return (
    <Page>
      <Seo title="Home" description="Sharqawy — CS student, builder, and maker. Read my journal and view my projects." />
      <AboutSection />
      <br />
      <SocialLinksSection />
    </Page>
  );
}
