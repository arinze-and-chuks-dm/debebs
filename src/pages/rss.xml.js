import rss from '@astrojs/rss';
import { description, title } from '@configs/site.json';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blogPosts = await getCollection('blog');
  return rss({
    title,
    description: description,
    site: context.site,
    items: blogPosts.map((post) => ({
      ...post.data,
      link: `/${post.slug}/`,
    })),
  });
}
