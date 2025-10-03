// To manage the image URLs from Appwrite storage for gallery and content entries

const projectId = import.meta.env.PUBLIC_APPWRITE_PROJECT_ID;
const imagesEndpoint = import.meta.env.PUBLIC_IMAGES_ENDPOINT;

const getDownloadUrl = (imageId: string) => {
  return imagesEndpoint + `/${imageId}/download?project=${projectId}`;
};

const getImageUrl = (imageId: string) => {
  return imagesEndpoint + `/${imageId}/view?project=${projectId}`;
};

export { getDownloadUrl, getImageUrl };
