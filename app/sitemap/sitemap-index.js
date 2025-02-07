const BASE_URL = 'http://localhost:3000/';

export default function sitemap() {
  return [
    {
      url: `${BASE_URL}/sitemap/static.xml`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/sitemap/blogs.xml`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/sitemap/categories.xml`,
      lastModified: new Date(),
    },
  ];
}
