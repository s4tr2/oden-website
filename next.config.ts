import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'standalone', // Not needed for Firebase App Hosting
  experimental: {
    optimizePackageImports: ['lucide-react', 'phosphor-react', '@tiptap/react', '@tiptap/starter-kit'],
  },
  serverExternalPackages: ['gray-matter'],
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  async redirects() {
    // Phase 1 + 2 + 3: Off-topic comparison blog posts → homepage (SEO topical authority cleanup)
    const offTopicBlogRedirects = [
      // Phase 1: 15 posts
      '/blog/coderabbit-vs-cursor-bugbot-vs-greptile-vs-graphite-agent',
      '/blog/parallel-vs-exa-vs-tavily-vs-you-com',
      '/blog/cursor-vs-ampcode-vs-windsurf-droid-claudecode',
      '/blog/postman-vs-insomnia-vs-hoppscotch-vs-bruno',
      '/blog/chainalysis-vs-elliptic-vs-trm-labs-vs-ciphertrace',
      '/blog/telnyx-vs-twilio-vs-vonage-vs-plivo',
      '/blog/harvey-vs-cocounsel-vs-spellbook-vs-everlaw',
      '/blog/fireworksai-vs-togetherai-vs-replicate-vs-anyscale',
      '/blog/doximity-vs-sermo-vs-figure-1-vs-medscape',
      '/blog/transfix-vs-uber-freight-vs-convoy-vs-loadsmart',
      '/blog/alchemy-vs-infura-vs-quicknode-vs-moralis',
      '/blog/cockroachdb-vs-yugabytedb-vs-google-cloud-spanner-vs-tidb-vs-amazon-aurora',
      '/blog/doubleverify-vs-ias-vs-moat-vs-pixalate',
      '/blog/moveworks-vs-servicenow-vs-espressive-vs-atomicwork',
      '/blog/merge-vs-finch-vs-rutter-vs-apideck',
      // Phase 2: 16 posts
      '/blog/mintlify-vs-gitbook-vs-readme-vs-docusaurus',
      '/blog/serval-vs-aisera-vs-moveworks-vs-atomicwork',
      '/blog/sentinelone-vs-crowdstrike-vs-palo-alto-vs-microsoft-defender',
      '/blog/sentry-vs-datadog-vs-rollbar-vs-bugsnag',
      '/blog/algolia-vs-elasticsearch-vs-meilisearch-vs-typesense',
      '/blog/datarobot-vs-h2oai-vs-dataiku-vs-databricks',
      '/blog/ambientai-vs-verkada-vs-rhombus-vs-spot-ai',
      '/blog/pixalate-vs-doubleverify-vs-ias-vs-moat',
      '/blog/mixpanel-vs-amplitude-vs-heap-vs-posthog',
      '/blog/atlan-vs-alation-vs-collibra-vs-informatica-edc',
      '/blog/vapi-vs-synthflow-vs-bland-ai-vs-retell',
      '/blog/wisdomai-vs-thoughtspot-vs-pyramid-analytics-vs-alteryx',
      '/blog/antithesis-vs-gremlin-vs-mabl-vs-prodperfect',
      '/blog/delve-vs-vanta-vs-drata-vs-secureframe',
      '/blog/sweep-vs-brex-vs-ramp-vs-divvy',
      '/blog/redpanda-vs-confluent-vs-apache-kafka-vs-streamnative',
      // Phase 3: 19 off-topic posts
      '/blog/contentful-vs-sanity-vs-strapi-vs-prismic',
      '/blog/cultureamp-vs-lattice-vs-15five-vs-officevibe',
      '/blog/hightouch-vs-census-vs-polytomic-vs-grouparoo',
      '/blog/scale-vs-labelbox-vs-appen-vs-snorkel-ai-vs-v7',
      '/blog/intempt-vs-segment-vs-mparticle-vs-rudderstack',
      '/blog/datavisor-vs-forter-vs-sift-vs-signifyd',
      '/blog/envoy-vs-teem-vs-robin-vs-skedda',
      '/blog/elevenlabs-vs-murf-vs-playht-vs-cartesia',
      '/blog/nextdoor-vs-facebook-groups-vs-patch-vs-neighbors',
      '/blog/eightfold-vs-seekout-vs-phenom-vs-hireez',
      '/blog/turnitin-vs-grammarly-vs-copyscape-vs-plagscan',
      '/blog/articulate-vs-adobe-captivate-vs-ispring-vs-storyline',
      '/blog/superhuman-vs-shortwave-vs-spike-vs-front',
      '/blog/cohere-vs-openai-vs-anthropic-vs-google-ai-vs-ai21-labs',
      '/blog/retool-vs-budibase-vs-appsmith-vs-airplane',
      '/blog/nango-vs-merge-vs-apideck-vs-paragon',
      '/blog/webflow-vs-wix-vs-squarespace-vs-framer',
      '/blog/magic-patterns-vs-v0-vs-uizard-vs-bolt',
      '/blog/lovable-vs-bolt-vs-cursor-vs-replit',
      // Phase 3: 3 remaining low-value posts
      '/blog/quizlet-vs-kahoot-vs-anki-vs-memrise',
      '/blog/decagon-vs-intercom-vs-zendesk-vs-ada-vs-kustomer',
      '/blog/coefficient-vs-hex-vs-observable-vs-deepnote',
      '/blog/whatfix-vs-walkme-vs-sap-enable-now-vs-apty',
      // Phase 4: GA4 404 audit — posts generating "Post Not Found" traffic
      '/blog/n8n-vs-zapier-vs-make-vs-pipedream',
      '/blog/crewai-vs-langchain-vs-autogpt-vs-bardeen-vs-11xai',
      '/blog/practisai-vs-gong-vs-chorusai-vs-mindtickle',
      '/blog/uniphore-vs-gong-vs-chorusai-vs-avoma',
      '/blog/coactiveai-vs-scale-ai-vs-labelbox-vs-v7',
      '/blog/gorgias-vs-zendesk-vs-freshdesk-vs-reamaze',
      '/blog/descript-vs-riverside-vs-veed-vs-kapwing',
      '/blog/vapi-vs-synthflow-bland-ai-vs-retell',
    ].map((source) => ({
      source,
      destination: '/',
      permanent: true,
    }));

    // Phase 2: Merged posts → canonical versions
    const mergedBlogRedirects = [
      {
        source: '/blog/jasper-vs-copyai-vs-writesonic-vs-grammarly',
        destination: '/blog/typeface-vs-jasper-vs-copyai-vs-writesonic',
        permanent: true,
      },
      {
        source: '/blog/attentive-vs-braze-vs-klaviyo-vs-insider',
        destination: '/blog/customerio-vs-braze-vs-iterable-vs-klaviyo',
        permanent: true,
      },
      {
        source: '/blog/responsiveio-vs-klaviyo-vs-attentive-vs-postscript',
        destination: '/blog/customerio-vs-braze-vs-iterable-vs-klaviyo',
        permanent: true,
      },
    ];

    return [
      {
        source: '/tools/pmm-job-board',
        destination: '/tools/product-marketing-job-board',
        permanent: true,
      },
      ...offTopicBlogRedirects,
      ...mergedBlogRedirects,
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
