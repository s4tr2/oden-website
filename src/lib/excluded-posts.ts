/**
 * Excluded Blog Post Slugs
 *
 * Single source of truth for blog posts being redirected away.
 * These posts are off-topic for our product marketing platform and
 * hurt SEO topical authority. They have 301 redirects to "/" in next.config.ts.
 *
 * This list controls:
 * - Blog listing page filtering (hidden from /blog and all category views)
 * - Sitemap exclusion (removed from sitemap.xml)
 * - Static param generation (excluded from generateStaticParams)
 *
 * Phase 1: 15 off-topic comparison posts (most damaging to topical authority)
 * Phase 2: 16 additional off-topic posts + 3 merged into canonical versions
 * Phase 3: 22 final off-topic comparison posts (final cleanup)
 *
 * Total: 57 excluded slugs
 */
export const EXCLUDED_SLUGS: ReadonlyArray<string> = [
  // Phase 1: 15 off-topic comparison posts
  'coderabbit-vs-cursor-bugbot-vs-greptile-vs-graphite-agent',
  'parallel-vs-exa-vs-tavily-vs-you-com',
  'cursor-vs-ampcode-vs-windsurf-droid-claudecode',
  'postman-vs-insomnia-vs-hoppscotch-vs-bruno',
  'chainalysis-vs-elliptic-vs-trm-labs-vs-ciphertrace',
  'telnyx-vs-twilio-vs-vonage-vs-plivo',
  'harvey-vs-cocounsel-vs-spellbook-vs-everlaw',
  'fireworksai-vs-togetherai-vs-replicate-vs-anyscale',
  'doximity-vs-sermo-vs-figure-1-vs-medscape',
  'transfix-vs-uber-freight-vs-convoy-vs-loadsmart',
  'alchemy-vs-infura-vs-quicknode-vs-moralis',
  'cockroachdb-vs-yugabytedb-vs-google-cloud-spanner-vs-tidb-vs-amazon-aurora',
  'doubleverify-vs-ias-vs-moat-vs-pixalate',
  'moveworks-vs-servicenow-vs-espressive-vs-atomicwork',
  'merge-vs-finch-vs-rutter-vs-apideck',

  // Phase 2: 16 off-topic comparison posts
  'mintlify-vs-gitbook-vs-readme-vs-docusaurus',
  'serval-vs-aisera-vs-moveworks-vs-atomicwork',
  'sentinelone-vs-crowdstrike-vs-palo-alto-vs-microsoft-defender',
  'sentry-vs-datadog-vs-rollbar-vs-bugsnag',
  'algolia-vs-elasticsearch-vs-meilisearch-vs-typesense',
  'datarobot-vs-h2oai-vs-dataiku-vs-databricks',
  'ambientai-vs-verkada-vs-rhombus-vs-spot-ai',
  'pixalate-vs-doubleverify-vs-ias-vs-moat',
  'mixpanel-vs-amplitude-vs-heap-vs-posthog',
  'atlan-vs-alation-vs-collibra-vs-informatica-edc',
  'vapi-vs-synthflow-vs-bland-ai-vs-retell',
  'wisdomai-vs-thoughtspot-vs-pyramid-analytics-vs-alteryx',
  'antithesis-vs-gremlin-vs-mabl-vs-prodperfect',
  'delve-vs-vanta-vs-drata-vs-secureframe',
  'sweep-vs-brex-vs-ramp-vs-divvy',
  'redpanda-vs-confluent-vs-apache-kafka-vs-streamnative',

  // Phase 2: 3 merged posts (redirected to canonical versions)
  'jasper-vs-copyai-vs-writesonic-vs-grammarly',
  'attentive-vs-braze-vs-klaviyo-vs-insider',
  'responsiveio-vs-klaviyo-vs-attentive-vs-postscript',

  // Phase 3: 19 off-topic comparison posts
  'contentful-vs-sanity-vs-strapi-vs-prismic',
  'cultureamp-vs-lattice-vs-15five-vs-officevibe',
  'hightouch-vs-census-vs-polytomic-vs-grouparoo',
  'scale-vs-labelbox-vs-appen-vs-snorkel-ai-vs-v7',
  'intempt-vs-segment-vs-mparticle-vs-rudderstack',
  'datavisor-vs-forter-vs-sift-vs-signifyd',
  'envoy-vs-teem-vs-robin-vs-skedda',
  'elevenlabs-vs-murf-vs-playht-vs-cartesia',
  'nextdoor-vs-facebook-groups-vs-patch-vs-neighbors',
  'eightfold-vs-seekout-vs-phenom-vs-hireez',
  'turnitin-vs-grammarly-vs-copyscape-vs-plagscan',
  'articulate-vs-adobe-captivate-vs-ispring-vs-storyline',
  'superhuman-vs-shortwave-vs-spike-vs-front',
  'cohere-vs-openai-vs-anthropic-vs-google-ai-vs-ai21-labs',
  'retool-vs-budibase-vs-appsmith-vs-airplane',
  'nango-vs-merge-vs-apideck-vs-paragon',
  'webflow-vs-wix-vs-squarespace-vs-framer',
  'magic-patterns-vs-v0-vs-uizard-vs-bolt',
  'lovable-vs-bolt-vs-cursor-vs-replit',

  // Phase 3: 3 remaining low-value posts
  'quizlet-vs-kahoot-vs-anki-vs-memrise',
  'decagon-vs-intercom-vs-zendesk-vs-ada-vs-kustomer',
  'coefficient-vs-hex-vs-observable-vs-deepnote',
  'whatfix-vs-walkme-vs-sap-enable-now-vs-apty',
  // Phase 4: GA4 404 audit
  'n8n-vs-zapier-vs-make-vs-pipedream',
  'crewai-vs-langchain-vs-autogpt-vs-bardeen-vs-11xai',
  'practisai-vs-gong-vs-chorusai-vs-mindtickle',
  'uniphore-vs-gong-vs-chorusai-vs-avoma',
  'coactiveai-vs-scale-ai-vs-labelbox-vs-v7',
  'gorgias-vs-zendesk-vs-freshdesk-vs-reamaze',
  'descript-vs-riverside-vs-veed-vs-kapwing',
  'vapi-vs-synthflow-bland-ai-vs-retell',
]

const excludedSet = new Set(EXCLUDED_SLUGS)

export function isExcludedSlug(slug: string): boolean {
  return excludedSet.has(slug)
}
