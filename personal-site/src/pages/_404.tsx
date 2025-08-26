import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';
import Seo from '@/components/Seo';

export default function NotFound() {
  return (
    <Page>
      <Seo title="404" description="Page not found." />
      <PageHeader subtitle="Not Found - Sorry bro :(">404</PageHeader>
    </Page>
  );
}
