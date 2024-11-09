import fs from 'fs'
import { register } from 'module'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
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
      name: 'Innsbruck Slopes',
      publishedAt: '2024-01-01',
      summary: "Great slopes near Innsbruck!",
      image: '/images/innsbruck-slopes.jpg',
      region: 'tyrol',
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
