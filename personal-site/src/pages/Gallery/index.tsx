import PageHeader from '@/components/blog/PageHeader';
import Seo from '@/components/Seo';
import Page from '@/components/layout/Page';

export default function Gallery() {
  return (
    <Page>
      <Seo title="Gallery" description="A collection of my art and visuals." />
      <PageHeader subtitle="A collection of my art">Gallery</PageHeader>
      <p>coming soon...</p>
    </Page>
  );
}
