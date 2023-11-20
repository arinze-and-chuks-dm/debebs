export function formatPhoneNumber(phoneNumberString: string) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

export function isActiveLink({
  link,
  pathname,
}: {
  link: string;
  pathname: string;
}) {
  return link === pathname || link === pathname.replace(/\/$/, '');
}

export const dateFormat = (datetime: string | Date) => {
  const dateTime = new Date(datetime);

  const date = dateTime.toLocaleDateString([], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const time = dateTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return { date, time };
};

// content reading
export const readingTime = (content: string) => {
  const WPS = 275 / 60;

  let images = 0;
  const regex = /\w/;

  let words = content.split(' ').filter((word) => {
    if (word.includes('<img')) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  let imageAdjust = images * 4;
  let imageSecs = 0;
  let imageFactor = 12;

  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);

  if (minutes < 10) {
    if (minutes < 2) {
      return '0' + minutes + ` Min read`;
    } else {
      return '0' + minutes + ` Mins read`;
    }
  } else {
    return minutes + ` Mins read`;
  }
};

export default readingTime;
