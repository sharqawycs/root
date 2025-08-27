import Page from '@/components/layout/Page';
import { AboutSection, SocialLinksSection } from './sections';

const PAGE_TITLE = 'Home';
export default function Home() {
  return (
    <Page title={PAGE_TITLE} description="Sharqawy — CS student, builder, and maker. Read my journal and view my projects.">
      <AboutSection />
      <br />
      <SocialLinksSection />
    </Page>
  );
}
