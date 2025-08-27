import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';

const PAGE_TITLE = 'Content Worth Consuming';

export default function Content() {
  return (
    <Page title={PAGE_TITLE} description="Selected writing and projects I think are worth your time.">
      <PageHeader subtitle="Stuff I actually think is worth your time">{PAGE_TITLE} </PageHeader>
      <p>coming soon...</p>
    </Page>
  );
}
