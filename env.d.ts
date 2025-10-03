interface ImportMetaEnv {
  readonly PUBLIC_DEFAULT_TITLE: string;
  readonly PUBLIC_DEFAULT_DESCRIPTION: string;
  readonly PUBLIC_OG_IMAGE: string;
  readonly PUBLIC_POSTFIX: string;
  readonly PUBLIC_BASE_URL: string;
  readonly PUBLIC_APPWRITE_PROJECT_ID: string;
  readonly PUBLIC_IMAGES_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
