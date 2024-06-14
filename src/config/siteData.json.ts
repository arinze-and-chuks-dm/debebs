export interface SiteDataProps {
  name: String
  domain: string
  title: string
  description: string
  useViewTransitions?: boolean
  useAnimations?: boolean
  author: {
    name: string
    email: string
    twitter: string // used for twitter cards when sharing a blog post on twitter
    slug: string // author slug for the authors content collections. Used for a few components / pages
  }
  contact: {
    email: string
    phoneNumber: string
  }
  socials: {
    instagram: string
    facebook: string
  }
  address: {
    city: string
    state: {
      name: string
      abbreviation: string
    }
  }
  defaultImage: {
    src: string
    alt: string
  }
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: 'Debebs Media',
  domain: 'https://www.debebsmedia.com',
  // Your website's title and description (meta fields)
  title: 'Debebs Media | Top-Rated Family Photography Services in Dallas, TX',
  description:
    'Capture Precious Moments with the Best Family Photography in Dallas, TX',
  useViewTransitions: true,
  useAnimations: true,
  // Your information!
  author: {
    name: 'Edwina Debebs',
    // TODO: Update email
    email: 'issashade4ever@gmail.com',
    // TODO: Update twitter
    twitter: 'place_holder',
    slug: 'main-author', // this must match an author slug in the authors content collection at src/content/authors/{slug}
  },
  contact: {
    email: 'issashade4ever@gmail.com',
    phoneNumber: '+1 (214) 603-1334',
  },
  socials: {
    instagram: 'https://www.instagram.com/its_a_shade/',
    facebook: 'https://www.facebook.com/people/Itsashade/100080385189143/',
  },
  address: {
    city: 'Dallas',
    state: {
      name: 'Texas',
      abbreviation: 'TX',
    },
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    // TODO: Update image to use a family photo
    src: '/images/fam-three.jpeg',
    alt: 'Cosmic Themes Logo',
  },
}

export default siteData
