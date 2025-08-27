import type { ReactNode } from 'react';

interface CalloutBoxProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  children: ReactNode;
}

export default function CalloutBox({ type = 'info', children }: CalloutBoxProps) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };

  return <div className={`p-4 border-l-4 rounded-r ${styles[type]} my-4`}>{children}</div>;
}
