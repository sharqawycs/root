import PageHeader from '@/components/blog/PageHeader';
import Seo from '@/components/Seo';
import Page from '@/components/layout/Page';

export default function Content() {
  return (
    <Page>
      <Seo title="Content Worth Consuming" description="Selected writing and projects I think are worth your time." />
      <PageHeader subtitle="Stuff I actually think is worth your time">Content Worth Consuming</PageHeader>
      <p>coming soon...</p>
    </Page>
  );
}
