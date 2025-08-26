export interface JournalInfo {
  title: string;
  slug: string;
  date: string;
}

export interface Journal extends JournalInfo {
  content: string;
}
