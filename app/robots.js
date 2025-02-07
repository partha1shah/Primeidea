export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: 'https://primeidea.in/sitemap.xml',
    host: 'https://primeidea.in',
  };
}
