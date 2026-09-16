import type { FeedIconId } from '../content/about';

/** User-provided official brand logos (PNG). */
const LOGO_SRC: Record<FeedIconId, string> = {
  openai: '/partners/feed-icons/openai.png',
  anthropic: '/partners/feed-icons/anthropic.png',
  gemini: '/partners/feed-icons/gemini.png',
  salesforce: '/partners/feed-icons/salesforce.png?v=2',
  aws: '/partners/feed-icons/aws.png',
  teams: '/partners/feed-icons/teams.png',
  gmail: '/partners/feed-icons/gmail.png?v=2',
  drive: '/partners/feed-icons/drive.png',
  slack: '/partners/feed-icons/slack.png?v=2',
  zoom: '/partners/feed-icons/zoom.png',
  apple: '/partners/feed-icons/apple.png',
  microsoft: '/partners/feed-icons/windows.png',
  okta: '/partners/feed-icons/okta.png',
  snowflake: '/partners/feed-icons/snowflake.png',
};

export function FeedIcon({ id, label }: { id: FeedIconId; label: string }) {
  return (
    <img
      src={LOGO_SRC[id]}
      alt={label}
      className="about-section__feed-svg"
      width={28}
      height={28}
      loading="lazy"
      decoding="async"
    />
  );
}
