export type EventType = 'Conference' | 'Meetup' | 'Webinar' | 'Workshop'
export type EventLocationType = 'Virtual' | 'In-Person' | 'Hybrid'

export type ProductMarketingEvent = {
    id: string
    title: string
    organizer: string
    description: string
    locationType: EventLocationType
    locationCity?: string // e.g. "San Diego, CA" or "London, UK"
    startDate: string // ISO date string YYYY-MM-DD
    endDate?: string // ISO date string YYYY-MM-DD
    time?: string // e.g. "5:30 PM - 7:30 PM"
    registerUrl: string
    tags: string[]
}

const allProductMarketingEvents: ProductMarketingEvent[] = [
    {
        id: 'pms-denver-apr-1',
        title: 'Product Marketing Summit Denver',
        organizer: 'Product Marketing Alliance',
        description: 'Connect with Denver\'s product marketing community at the Hilton City Center Denver for two days of strategy, insights, and networking.',
        locationType: 'In-Person',
        locationCity: 'Denver, CO',
        startDate: '2026-04-01',
        endDate: '2026-04-02',
        registerUrl: 'https://world.productmarketingalliance.com/location/denver',
        tags: ['Summit', 'Conference']
    },
    {
        id: 'pmm-leaders-summit-sv-apr-14',
        title: 'PMM Leaders Summit Silicon Valley',
        organizer: 'Product Marketing Alliance',
        description: 'An exclusive summit for senior product marketing leaders in the tech capital of the world, held at 2050 Gateway Pl, San Jose.',
        locationType: 'In-Person',
        locationCity: 'San Jose, CA',
        startDate: '2026-04-14',
        registerUrl: 'https://world.productmarketingalliance.com/location/leaders',
        tags: ['Leadership', 'Summit']
    },
    {
        id: 'martech-summit-jakarta-apr-2026',
        title: 'MarTech Summit Jakarta',
        organizer: 'The MarTech Summit',
        description: 'Exploring the latest MarTech trends and strategies for the Indonesian market at The Grand Ballroom, Hotel Mulia.',
        locationType: 'In-Person',
        locationCity: 'Jakarta, Indonesia',
        startDate: '2026-04-15',
        registerUrl: 'https://themartechsummit.com/jakarta',
        tags: ['MarTech', 'International']
    },
    {
        id: 'adobe-summit-apr-2026',
        title: 'Adobe Summit \u2013 The Digital Experience Conference',
        organizer: 'Adobe',
        description: 'The premier digital experience conference with 200+ sessions covering marketing, creativity, AI, and content orchestration at the Venetian Convention Center.',
        locationType: 'Hybrid',
        locationCity: 'Las Vegas, NV',
        startDate: '2026-04-19',
        endDate: '2026-04-22',
        registerUrl: 'https://summit.adobe.com/na/',
        tags: ['Conference', 'Digital Experience', 'AI']
    },
    {
        id: 'gartner-marketing-symposium-london-2026',
        title: 'Gartner Marketing Symposium/Xpo London',
        organizer: 'Gartner',
        description: 'Research-driven sessions and expert insights for CMOs, digital marketing leaders, and marketing operations professionals.',
        locationType: 'In-Person',
        locationCity: 'London, UK',
        startDate: '2026-05-11',
        endDate: '2026-05-12',
        registerUrl: 'https://www.gartner.com/en/conferences/emea/marketing-symposium-uk',
        tags: ['Conference', 'Marketing Strategy', 'Leadership']
    },
    {
        id: 'saastr-annual-2026',
        title: 'SaaStr Annual 2026',
        organizer: 'SaaStr',
        description: 'The world\'s largest B2B + AI conference with 300+ speakers, 300+ tactical sessions, and 15,000+ attendees at the San Mateo County Events Center.',
        locationType: 'In-Person',
        locationCity: 'San Mateo, CA',
        startDate: '2026-05-12',
        endDate: '2026-05-14',
        registerUrl: 'https://www.saastrannual.com/',
        tags: ['B2B SaaS', 'Scaling', 'GTM Strategy', 'AI']
    },
    {
        id: 'pms-amsterdam-may-28',
        title: 'Product Marketing Summit Amsterdam',
        organizer: 'Product Marketing Alliance',
        description: 'Join the PMM community in Amsterdam for two days of insights and networking at Postillion Hotel & Convention Centre.',
        locationType: 'In-Person',
        locationCity: 'Amsterdam, NL',
        startDate: '2026-05-28',
        endDate: '2026-05-29',
        registerUrl: 'https://world.productmarketingalliance.com/location/amsterdam',
        tags: ['Summit', 'Conference', 'International']
    },
    {
        id: 'pms-atlanta-jun-3',
        title: 'Product Marketing Summit Atlanta',
        organizer: 'Product Marketing Alliance',
        description: 'Gather with PMM leaders in Atlanta for strategy, growth, and networking.',
        locationType: 'In-Person',
        locationCity: 'Atlanta, GA',
        startDate: '2026-06-03',
        endDate: '2026-06-04',
        registerUrl: 'https://world.productmarketingalliance.com/location/atlanta',
        tags: ['Summit', 'Conference']
    },
    {
        id: 'gartner-marketing-symposium-denver-2026',
        title: 'Gartner Marketing Symposium/Xpo Denver',
        organizer: 'Gartner',
        description: '20+ Gartner experts and 70+ research-driven sessions for CMOs, CX leaders, marketing ops, and brand marketing leaders.',
        locationType: 'In-Person',
        locationCity: 'Denver, CO',
        startDate: '2026-06-08',
        endDate: '2026-06-10',
        registerUrl: 'https://www.gartner.com/en/conferences/na/marketing-symposium-us',
        tags: ['Conference', 'Marketing Strategy', 'Leadership']
    },
    {
        id: 'pmm-leaders-nyc-jun-11',
        title: 'PMM Leaders Summit New York',
        organizer: 'Product Marketing Alliance',
        description: 'An exclusive summit for product marketing leaders at etc.venues 601 Lexington Avenue.',
        locationType: 'In-Person',
        locationCity: 'New York, NY',
        startDate: '2026-06-11',
        registerUrl: 'https://world.productmarketingalliance.com/location/leadersnyc',
        tags: ['Leadership', 'Summit']
    },
    {
        id: 'pms-seattle-jun-16',
        title: 'Product Marketing Summit Seattle',
        organizer: 'Product Marketing Alliance',
        description: 'Connect with Seattle\'s thriving product marketing community for two days of insights and networking.',
        locationType: 'In-Person',
        locationCity: 'Seattle, WA',
        startDate: '2026-06-16',
        endDate: '2026-06-17',
        registerUrl: 'https://world.productmarketingalliance.com/location/seattle',
        tags: ['Summit', 'Conference']
    },
    {
        id: 'pms-festival-london-jun-18',
        title: 'Product Marketing Festival London',
        organizer: 'Product Marketing Alliance',
        description: 'A massive gathering of PMMs in London at Convene Sancroft St Pauls for a dedicated day of learning and networking.',
        locationType: 'In-Person',
        locationCity: 'London, UK',
        startDate: '2026-06-18',
        registerUrl: 'https://world.productmarketingalliance.com/location/londonjune',
        tags: ['Festival', 'Conference', 'International']
    },
    {
        id: 'vidcon-anaheim-2026',
        title: 'VidCon Anaheim 2026',
        organizer: 'VidCon',
        description: 'The flagship event for digital creators, brands, and fans at the Anaheim Convention Center.',
        locationType: 'In-Person',
        locationCity: 'Anaheim, CA',
        startDate: '2026-06-25',
        endDate: '2026-06-27',
        registerUrl: 'https://www.vidcon.com/anaheim/',
        tags: ['Creator Economy', 'Digital Marketing', 'Content']
    },
    {
        id: 'pms-brazil-aug-6',
        title: 'Product Marketing Summit Brazil',
        organizer: 'Product Marketing Alliance',
        description: 'The Product Marketing Summit comes to Brazil, bringing together the local PMM community in S\u00e3o Paulo.',
        locationType: 'In-Person',
        locationCity: 'S\u00e3o Paulo, Brazil',
        startDate: '2026-08-06',
        registerUrl: 'https://world.productmarketingalliance.com/location/brazil',
        tags: ['Summit', 'International']
    },
    {
        id: 'pmm-leaders-london-sep-2',
        title: 'PMM Leaders Summit London',
        organizer: 'Product Marketing Alliance',
        description: 'An exclusive summit for senior product marketing leaders in London.',
        locationType: 'In-Person',
        locationCity: 'London, UK',
        startDate: '2026-09-02',
        registerUrl: 'https://world.productmarketingalliance.com/location/leaderslondon',
        tags: ['Leadership', 'Summit', 'International']
    },
    {
        id: 'pms-sf-sep-10',
        title: 'Product Marketing Summit San Francisco',
        organizer: 'Product Marketing Alliance',
        description: 'PMA returns to San Francisco for the flagship West Coast summit at the Hyatt Regency San Francisco Airport.',
        locationType: 'In-Person',
        locationCity: 'San Francisco, CA',
        startDate: '2026-09-10',
        endDate: '2026-09-11',
        registerUrl: 'https://world.productmarketingalliance.com/location/sanfrancisco',
        tags: ['Summit', 'Conference', 'Flagship']
    },
    {
        id: 'inbound-2026',
        title: 'INBOUND 2026',
        organizer: 'HubSpot',
        description: 'An immersive experience for marketing, sales, and customer success professionals at the Boston Convention and Exhibition Center.',
        locationType: 'In-Person',
        locationCity: 'Boston, MA',
        startDate: '2026-09-16',
        endDate: '2026-09-18',
        registerUrl: 'https://www.inbound.com/',
        tags: ['Inbound Marketing', 'Sales', 'CX', 'AI']
    },
    {
        id: 'martech-summit-dubai-2026',
        title: 'MarTech Summit Dubai',
        organizer: 'The MarTech Summit',
        description: 'Exploring MarTech, EMEA digital economy, and customer engagement strategies.',
        locationType: 'In-Person',
        locationCity: 'Dubai, UAE',
        startDate: '2026-09-29',
        registerUrl: 'https://themartechsummit.com/dubai',
        tags: ['MarTech', 'EMEA', 'Customer Engagement']
    },
    {
        id: 'pms-boston-oct-27',
        title: 'Product Marketing Summit Boston',
        organizer: 'Product Marketing Alliance',
        description: 'Join PMM leaders in Boston at the Westin Boston Seaport for networking and growth.',
        locationType: 'In-Person',
        locationCity: 'Boston, MA',
        startDate: '2026-10-27',
        endDate: '2026-10-28',
        registerUrl: 'https://world.productmarketingalliance.com/location/boston',
        tags: ['Summit', 'Conference']
    },
    {
        id: 'martech-summit-london-2026',
        title: 'MarTech Summit London',
        organizer: 'The MarTech Summit',
        description: 'Covering B2B/B2C marketing and MarTech integration strategies at Convene 155 Bishopsgate.',
        locationType: 'In-Person',
        locationCity: 'London, UK',
        startDate: '2026-11-10',
        endDate: '2026-11-11',
        registerUrl: 'https://themartechsummit.com/london',
        tags: ['B2B Marketing', 'B2C Marketing', 'MarTech']
    },
    {
        id: 'pms-london-dec-3',
        title: 'Product Marketing Summit London',
        organizer: 'Product Marketing Alliance',
        description: 'The PMA summit series comes to London at the Intercontinental O2 for two days of product marketing insights.',
        locationType: 'In-Person',
        locationCity: 'London, UK',
        startDate: '2026-12-03',
        endDate: '2026-12-04',
        registerUrl: 'https://world.productmarketingalliance.com/location/london',
        tags: ['Summit', 'Conference', 'International']
    },
]

export const productMarketingEvents: ProductMarketingEvent[] = allProductMarketingEvents.filter(
    event => new Date(event.startDate) >= new Date('2026-03-31')
) // Filter out past events roughly
