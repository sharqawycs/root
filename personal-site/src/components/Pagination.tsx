import Link from 'next/link';

export function Pagination({ baseUrl, page, perPage, total }: { baseUrl: string; page: number; perPage: number; total: number }) {
  const totalPages = Math.ceil(total / perPage);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
      <div className="flex space-x-4">
        {page > 1 && (
          <Link href={page === 2 ? baseUrl : `${baseUrl}/page/${page - 1}`} className="text-blue-600 transition-colors hover:text-blue-800">
            ← Previous
          </Link>
        )}
      </div>

      <span className="text-sm text-gray-500">
        Page {page} of {totalPages}
      </span>

      <div className="flex space-x-4">
        {page < totalPages && (
          <Link href={`${baseUrl}/page/${page + 1}`} className="text-blue-600 transition-colors hover:text-blue-800">
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
