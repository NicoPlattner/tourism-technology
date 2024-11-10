


export function getUser(id: string) {
  return {
      skiPassNumber: '#1-134-45-450312',
      averageSpeed: 20,
      liftsTaken: ['Sonnenbahn Ladis-Fiss', 'Planseggbahn', 'Rastbahn'],
      kilometersSkied: 15.2,
      minutesSkied: 202,
      minutesLifted: 45,
    }
}

export function getSkiRegions() {
  // regions of Austria
  return [
    {
      name: 'Tyrol',
      slug: 'tyrol',
    },
    {
      name: 'Salzburg',
      slug: 'salzburg',
    },
    {
      name: 'Carinthia',
      slug: 'carinthia',
    },
    {
      name: 'Styria',
      slug: 'styria',
    },
    {
      name: 'Vorarlberg',
      slug: 'vorarlberg',
    },
    {
      name: 'Upper Austria',
      slug: 'upper-austria',
    },
    {
      name: 'Lower Austria',
      slug: 'lower-austria',
    },
    {
      name: 'Vienna',
      slug: 'vienna',
    },
    {
      name: 'Burgenland',
      slug: 'burgenland',
    },
  ]

}

export function getSkiAreas() {
  // mock data 
  return [
    {
      name: 'Serfaus Fiss Ladis',
      publishedAt: '2024-01-01',
      summary: "Familienurlaub in Tirol",
      image: '/images/serfaus-foto.jpg',
      region: 'Tirol',
      slug: 'innsbruck-slopes',
      content: 'Enjoy the scenic mountains of Innsbruck.',
    },
    {
      name: 'Kitzbühel Ski Paradise',
      publishedAt: '2024-01-15',
      summary: "Experience world-class skiing!",
      image: '/images/kitzbuehel.jpg',
      region: 'tyrol',
      slug: 'kitzbuehel-ski-paradise',
      content: 'Kitzbühel offers premium skiing experiences for all levels.',
    },
    {
      name: 'Carinthia Snow Park',
      publishedAt: '2024-02-01',
      summary: "Perfect for snowboarders and freestyle skiers!",
      image: '/images/carinthia-snow-park.jpg',
      region: 'carinthia',
      slug: 'carinthia-snow-park',
      content: 'Explore Carinthia\'s best snow park with jumps and rails.',
    },
    {
      name: 'Villach Alpine Resort',
      publishedAt: '2024-02-20',
      summary: "Relaxing slopes with scenic views.",
      image: '/images/villach-resort.jpg',
      region: 'carinthia',
      slug: 'villach-alpine-resort',
      content: 'Villach offers a peaceful skiing experience for families and beginners.',
    },
    {
      name: 'Salzburg High Slopes',
      publishedAt: '2024-03-05',
      summary: "Challenge yourself with steep runs.",
      image: '/images/salzburg-high-slopes.jpg',
      region: 'salzburg',
      slug: 'salzburg-high-slopes',
      content: 'The high slopes of Salzburg are known for their challenging trails.',
    },
    {
      name: 'Zell am See Lakeside Trails',
      publishedAt: '2024-03-15',
      summary: "Ski by the beautiful lake!",
      image: '/images/zell-am-see.jpg',
      region: 'salzburg',
      slug: 'zell-am-see-lakeside-trails',
      content: 'A unique skiing experience next to the lake at Zell am See.',
    },
  ]
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
