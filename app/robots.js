export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: 'https://www.primeidea.in/sitemap.xml',
    host: 'https://www.primeidea.in',
  };
}
