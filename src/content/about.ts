export type FeedIconId =
  | 'openai'
  | 'anthropic'
  | 'gemini'
  | 'salesforce'
  | 'aws'
  | 'teams'
  | 'gmail'
  | 'drive'
  | 'slack'
  | 'zoom'
  | 'apple'
  | 'microsoft'
  | 'okta'
  | 'snowflake';

export type FeedIcon =
  | { type: 'icon'; id: FeedIconId; label: string }
  | { type: 'more'; label: string };

export const aboutContent = {
  eyebrow: 'About us',
  titleLead: 'Your',
  titleAccent: 'Next-Gen',
  titlePurple: 'Security Partner.',
  layers: ['Real-Time AI Analyst', '360° Insights'],
  pillars: [
    {
      title: 'Threat intelligence',
      body: 'Detect, investigate, and attribute threats with AI-driven intelligence across modern digital environments.',
      accent: 'magenta' as const,
    },
    {
      title: 'Security automation',
      body: 'Unify SOC operations, tickets, and response so analysts spend time on decisions, not swivel-chair work.',
      accent: 'peach' as const,
    },
    {
      title: 'Proactive defense',
      body: 'Phishing simulation, OSINT investigation, and continuous monitoring to stop attacks before they cause damage.',
      accent: 'orange' as const,
    },
  ],
  profileBar: 'Unique Behavioral Profile',
  platformTitle: 'Adaptive AI',
  platformSubtitle: 'Our proprietary AI technology',
  feeds: [
    {
      title: 'Frontier AI, MCP, & SaaS Data',
      icons: [
        { type: 'icon', id: 'openai', label: 'OpenAI' },
        { type: 'icon', id: 'anthropic', label: 'Anthropic' },
        { type: 'icon', id: 'gemini', label: 'Google Gemini' },
        { type: 'icon', id: 'salesforce', label: 'Salesforce' },
        { type: 'icon', id: 'aws', label: 'AWS' },
        { type: 'more', label: '+ more' },
      ] satisfies FeedIcon[],
    },
    {
      title: 'Email and Collaboration Data',
      icons: [
        { type: 'icon', id: 'teams', label: 'Microsoft Teams' },
        { type: 'icon', id: 'gmail', label: 'Gmail' },
        { type: 'icon', id: 'drive', label: 'Google Drive' },
        { type: 'icon', id: 'slack', label: 'Slack' },
        { type: 'icon', id: 'zoom', label: 'Zoom' },
        { type: 'more', label: '+ more' },
      ] satisfies FeedIcon[],
    },
    {
      title: 'Network, Endpoint, Cloud, and Identity Data',
      icons: [
        { type: 'icon', id: 'aws', label: 'AWS' },
        { type: 'icon', id: 'apple', label: 'Apple' },
        { type: 'icon', id: 'microsoft', label: 'Microsoft' },
        { type: 'icon', id: 'okta', label: 'Okta' },
        { type: 'icon', id: 'snowflake', label: 'Snowflake' },
        { type: 'more', label: '+ more' },
      ] satisfies FeedIcon[],
    },
  ],
} as const;
