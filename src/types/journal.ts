type Journal = {
  slug: string;
  data: {
    title: string;
    date: Date;
    description?: string;
    tags?: string[];
    image?: string;
  };
};

export type { Journal };
