// utils
import { countItems, getAllPosts, sortByValue } from '@js/blogUtils'
import { humanize } from '@js/textUtils'

// get the categories used in blog posts, to put into navbar
const posts = await getAllPosts()
const allCategories = posts.map((post) => post.data.categories).flat()
const countedCategories = countItems(allCategories)
const processedCategories = sortByValue(countedCategories)

export interface navLinkItem {
  text: string
  link: string
  newTab?: boolean // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
  text: string
  dropdown: navLinkItem[]
}

export type navItem = navLinkItem | navDropdownItem

export const NAV_LINKS = {
  home: {
    text: 'HOME',
    link: '/',
  },
  blog: {
    text: 'BLOG',
    link: '/blog/',
  },
  about: {
    text: 'ABOUT',
    link: '/about/',
  },
  contact: {
    text: 'CONTACT',
    link: '/contact/',
  },
} as const

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  ...Object.values(NAV_LINKS).map((link) => link),
  {
    // get the categories used in blog posts, to put into a navbar dropdown
    text: 'CATEGORIES',
    dropdown: processedCategories.map(([category, count]) => {
      return {
        text: humanize(category).toUpperCase(),
        link: `/categories/${category}/`,
      }
    }),
  },
  // ...processedCategories.map(([category, count]) => ({
  //   // get the categories used in blog posts, to create a navlink for each
  //   text: humanize(category).toUpperCase(),
  //   link: `/categories/${category}/`,
  // })),
]

export default navConfig
