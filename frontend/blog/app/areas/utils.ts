


export async function getUser(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/stats/${id}`);
  const data = await response.json();
  return data;
}

type Pist = {
  color: string;
  id: number;
  name: string;
  speedScore: number;
  utilizationScore: number;
};

export const getPists = async (): Promise<Pist[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pists`);
    if (!response.ok) {
      throw new Error("Failed to fetch pists");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getPists:", error);
    throw error;
  }
};

export function getSkiRegions() {
  // regions of Austria
  return [
    {
      name: 'Tyrol',
      slug: 'Tyrol',
    },
    {
      name: 'Salzburg',
      slug: 'Salzburg',
    },
    {
      name: 'Carinthia',
      slug: 'Carinthia',
    },
    {
      name: 'Styria',
      slug: 'Styria',
    },
    {
      name: 'Vorarlberg',
      slug: 'Vorarlberg',
    },
    {
      name: 'Upper Austria',
      slug: 'Upper-austria',
    },
    {
      name: 'Lower Austria',
      slug: 'Lower-austria',
    },
    {
      name: 'Vienna',
      slug: 'Vienna',
    },
    {
      name: 'Burgenland',
      slug: 'Burgenland',
    },
  ]

}

export function getSkiAreas() {
  // mock data 
  return [
    {
      name: 'Serfaus Fiss Ladis',
      publishedAt: '2024-01-01',
      summary: "Family vacation in Tyrol",
      image: '/images/serfaus-foto.jpg',
      region: 'Tyrol',
      slug: 'serfaus-fiss-ladis',
      content: 'Old customs, lots of sunshine and a big heart for families: the region has specialized in family holidays more than almost any other holiday region in Tyrol.',
    },
    {
      name: 'Axamer Lizum',
      publishedAt: '2024-01-15',
      summary: "The biggest skiing area near Innsbruck",
      image: '/images/lizum.jpg',
      region: 'Tyrol',
      slug: 'axamer-lizum',
      content: 'The Axamer Lizum has 40 kilometers of slopes for every requirement: from extra-wide carving slopes to legendary slalom and downhill slopes and the large Golden Roof Snowpark, up to ten kilometers of ski routes and 300 hectares of freeride terrain.',
    },
    {
      name: 'Zell am See-Kaprun',
      publishedAt: '2024-02-01',
      summary: "3 Skiing areas & 408 kilometers",
      image: '/images/kaprun.jpg',
      region: 'Salzburg',
      slug: 'zell-see-kaprun',
      content: 'In Zell am See-Kaprun, your ski region in Austria, a total of 408 kilometers of slopes in three top ski areas await you with the Ski ALPIN CARD.',
    },
    {
      name: 'Schladming Dachstein',
      publishedAt: '2024-02-20',
      summary: "A vacation full of possibilities.",
      image: '/images/schladming.jpg',
      region: 'Styria',
      slug: 'schladmin-dachstein',
      content: 'Between the magnificent southern faces of the Dachstein, the Schladminger Tauern and the Grimming, seven tourism centers impress with a variety of offerings, Styrian hospitality, accommodation in all categories, top events and their very own charisma.',
    },
    {
      name: 'Silvretta Montafon',
      publishedAt: '2024-03-05',
      summary: "Experience the mountains",
      image: '/images/silvretta.webp ',
      region: 'Vorarlberg',
      slug: 'silvretta',
      content: 'There are several good reasons why Silvretta Montafon is considered the sportiest ski and hiking resort in Vorarlberg. Your days will be jam-packed with unique impressions, mountain adventures and culinary highlights!',
    },
    {
      name: 'Nassfeld',
      publishedAt: '2024-03-15',
      summary: "A ski area for all everyone",
      image: '/images/nassfeld.jpg',
      region: 'Carinthia',
      slug: 'nassfeld',
      content: 'Winter holidays in the Nassfeld-Pressegger See region are an unforgettable experience for families, recreational skiers and sports enthusiasts.',
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
