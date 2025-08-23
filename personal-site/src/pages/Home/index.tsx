import Page from '@/components/layout/Page';
import { AboutSection, SocialLinksSection } from './sections';

export default function Home() {
  return (
    <Page>
      <AboutSection />
      <br />
      <SocialLinksSection />
    </Page>
  );
}
