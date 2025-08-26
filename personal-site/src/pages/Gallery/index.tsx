import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';

const PAGE_TITLE = 'Gallery';
export default function Gallery() {
  return (
    <Page title={PAGE_TITLE} description="A collection of my art and visuals.">
      <PageHeader subtitle="A collection of my art">{PAGE_TITLE} </PageHeader>
      <p>coming soon...</p>
    </Page>
  );
}
