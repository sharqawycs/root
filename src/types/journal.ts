import type { CollectionEntry } from 'astro:content';

type Journal =
  | {
      slug: string;
      data: {
        title: string;
        date: Date;
        description?: string;
        tags?: string[];
        image?: string;
      };
    }
  | CollectionEntry<'journal'>;

export type { Journal };
