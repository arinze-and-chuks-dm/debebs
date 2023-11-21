import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { description, title } from '../configs/site.json';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title,
    description: description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.slug}/`,
    })),
  });
}
