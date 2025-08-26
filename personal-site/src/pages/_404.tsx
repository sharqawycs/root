import PageHeader from '@/components/blog/PageHeader';
import Page from '@/components/layout/Page';

export default function NotFound() {
  return (
    <Page title="404" description="Page not found.">
      <PageHeader subtitle="Not Found - Sorry bro :(">404</PageHeader>
    </Page>
  );
}
