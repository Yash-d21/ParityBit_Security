import React from 'react';
import type { FeedIconId } from '../content/about';

function Svg({
  title,
  children,
  viewBox = '0 0 24 24',
  width = 28,
  height = 28,
}: {
  title: string;
  children: React.ReactNode;
  viewBox?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      aria-label={title}
      role="img"
      className="about-section__feed-svg"
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}

export function FeedIcon({ id }: { id: FeedIconId }) {
  switch (id) {
    case 'openai':
      return (
        <Svg title="OpenAI">
          <path
            fill="#111"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.787a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.663zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.306 12.863l-2.02-1.163a.08.08 0 0 1-.038-.057V6.074a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.098-2.365L12 8.88l2.597 1.498v2.993L12 14.87l-2.597-1.498z"
          />
        </Svg>
      );

    case 'anthropic':
      return (
        <Svg title="Anthropic">
          <path
            fill="#111"
            d="M12.8 4.2h2.7L21.5 19.8h-2.8l-1.3-3.4H9.4l-1.3 3.4H5.3L12.8 4.2zm.3 7.8L11 6.5 8.9 12h4.2zM3.5 4.2h2.9l5.2 13.5H8.8L3.5 4.2z"
          />
        </Svg>
      );

    case 'gemini':
      return (
        <Svg title="Google Gemini">
          <defs>
            <linearGradient id="about-gemini" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A73E8" />
              <stop offset=".35" stopColor="#7B61FF" />
              <stop offset=".65" stopColor="#F538A0" />
              <stop offset="1" stopColor="#FF8A00" />
            </linearGradient>
          </defs>
          <path
            fill="url(#about-gemini)"
            d="M12 2.2c.6 3.9 2.9 7.1 6.8 8.2-3.9 1.1-6.2 4.3-6.8 8.2-.6-3.9-2.9-7.1-6.8-8.2 3.9-1.1 6.2-4.3 6.8-8.2z"
          />
        </Svg>
      );

    case 'salesforce':
      return (
        <Svg title="Salesforce" width={34} height={24} viewBox="0 0 28 20">
          <path
            fill="#00A1E0"
            d="M11.4 2.2c.7-1.1 1.9-1.8 3.2-1.8 1.4 0 2.6.8 3.2 2 .6-.3 1.2-.4 1.9-.4 2.1 0 3.9 1.7 3.9 3.9 0 .2 0 .4-.1.6 1.3.4 2.3 1.7 2.3 3.1 0 1.9-1.5 3.4-3.4 3.4-.3 0-.7 0-1-.1-.6 1.4-2 2.3-3.6 2.3-.7 0-1.3-.2-1.9-.5-.7 1.3-2 2.2-3.5 2.2-1.3 0-2.5-.7-3.2-1.7-.5.2-1 .3-1.5.3-2.1 0-3.9-1.7-3.9-3.9 0-.3 0-.6.1-.8C2.3 11.2 1.5 10 1.5 8.5c0-2.1 1.7-3.9 3.9-3.9.5 0 1 .1 1.4.3C7.4 3.6 8.9 2.6 10.6 2.6c.3 0 .5 0 .8.1v-.5z"
          />
        </Svg>
      );

    case 'aws':
      return (
        <Svg title="AWS" viewBox="0 0 40 20" width={36} height={20}>
          <text
            x="1"
            y="11"
            fill="#232F3E"
            fontSize="11"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="700"
            letterSpacing="-0.5"
          >
            aws
          </text>
          <path
            fill="none"
            stroke="#FF9900"
            strokeWidth="1.6"
            strokeLinecap="round"
            d="M8 14.5c3.2 2.2 8.2 2.8 12.2 1"
          />
          <path fill="#FF9900" d="M20.5 14.2l2.2.2-.8 1.6-1.4-1.8z" />
        </Svg>
      );

    case 'teams':
      return (
        <Svg title="Microsoft Teams">
          <path
            fill="#5059C9"
            d="M17.6 8.4h4.1c1.1 0 2 .9 2 2v5.1c0 2-1.6 3.6-3.6 3.6h-.1c-2 0-3.6-1.6-3.6-3.6V9.7c0-.7.6-1.3 1.2-1.3z"
          />
          <circle fill="#5059C9" cx="20.5" cy="5.2" r="2" />
          <circle fill="#7B83EB" cx="13.1" cy="4.5" r="2.5" />
          <path
            fill="#7B83EB"
            d="M18.2 10.2v5.6c0 1.6-.7 3-1.8 4-1 .9-2.3 1.4-3.7 1.4H5.6c.5 1.4 1.8 2.4 3.4 2.4h7c2.1 0 3.8-1.7 3.8-3.8v-6.5c0-1.5-.9-2.8-1.6-3.1z"
          />
          <rect x="2" y="9.4" width="13.2" height="9.6" rx="1.8" fill="#4B53BC" />
          <path fill="#fff" d="M10.4 17.2H9V12.4H7.1v-1.2h3.3v6z" />
        </Svg>
      );

    case 'gmail':
      return (
        <Svg title="Gmail">
          <path fill="#EA4335" d="M2.8 6.2v12.1c0 .7.6 1.3 1.3 1.3h2.8V11.2L12 15.4l5.1-4.2v8.4h2.8c.7 0 1.3-.6 1.3-1.3V6.2L12 13.1 2.8 6.2z" />
          <path fill="#C5221F" d="M2.8 6.2 12 13.1 2.8 4.9v1.3z" />
          <path fill="#FBBC04" d="M21.2 6.2 12 13.1l9.2-8.2v1.3z" />
          <path fill="#34A853" d="M6.9 19.6h2.8v-8.4L6.9 9.2v10.4z" />
          <path fill="#4285F4" d="M14.3 11.2v8.4h2.8V9.2l-2.8 2z" />
        </Svg>
      );

    case 'drive':
      return (
        <Svg title="Google Drive">
          <path fill="#0066DA" d="M8.5 14.4 4.4 21h8.2l4.1-6.6H8.5z" />
          <path fill="#00AC47" d="M15.5 3 11.4 9.6h8.2L23.7 3h-8.2z" />
          <path fill="#FFBA00" d="M4.4 21 8.5 14.4h8.2L12.6 21H4.4z" />
          <path fill="#00832D" d="M11.4 9.6 15.5 3 8.5 14.4z" />
          <path fill="#2684FC" d="M19.6 9.6h-8.2l4.1 6.6h8.2z" />
        </Svg>
      );

    case 'slack':
      return (
        <Svg title="Slack">
          <path fill="#36C5F0" d="M8.2 12.5a1.7 1.7 0 1 1-1.7 1.7v-1.7h1.7zm.9 0a1.7 1.7 0 0 1 3.4 0v4.3a1.7 1.7 0 1 1-3.4 0v-4.3z" />
          <path fill="#2EB67D" d="M11.5 8.2a1.7 1.7 0 1 1 1.7-1.7v1.7h-1.7zm0 .9a1.7 1.7 0 0 1 0 3.4H7.2a1.7 1.7 0 1 1 0-3.4h4.3z" />
          <path fill="#ECB22E" d="M15.8 11.5a1.7 1.7 0 1 1 1.7 1.7h-1.7v-1.7zm-.9 0a1.7 1.7 0 0 1-3.4 0V7.2a1.7 1.7 0 1 1 3.4 0v4.3z" />
          <path fill="#E01E5A" d="M12.5 15.8a1.7 1.7 0 1 1-1.7 1.7v-1.7h1.7zm0-.9a1.7 1.7 0 0 1 0-3.4h4.3a1.7 1.7 0 1 1 0 3.4h-4.3z" />
        </Svg>
      );

    case 'zoom':
      return (
        <Svg title="Zoom" viewBox="0 0 48 16" width={40} height={16}>
          <text
            x="0"
            y="12.5"
            fill="#2D8CFF"
            fontSize="13"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="700"
            letterSpacing="-0.4"
          >
            zoom
          </text>
        </Svg>
      );

    case 'apple':
      return (
        <Svg title="Apple">
          <path
            fill="#111"
            d="M17.2 12.4c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.8-1.3-.1-2.6.8-3.3.8-.7 0-1.8-.8-3-.8-1.5.1-2.9.9-3.7 2.3-1.6 2.7-.4 6.7 1.1 8.9.8 1.1 1.7 2.3 3 2.2 1.2-.1 1.6-.8 3.1-.8s1.8.7 3.1.8c1.3.1 2.1-1.1 2.9-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.3-.9-2.3-3.4zM14.5 5.8c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.2 1.9-1 2.9 1.1.1 2.1-.5 2.7-1.3z"
          />
        </Svg>
      );

    case 'microsoft':
      return (
        <Svg title="Microsoft">
          <rect x="2" y="2" width="9" height="9" fill="#F25022" />
          <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
          <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
          <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
        </Svg>
      );

    case 'okta':
      return (
        <Svg title="Okta" viewBox="0 0 40 16" width={36} height={16}>
          <text
            x="0"
            y="12.5"
            fill="#111"
            fontSize="13"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="700"
            letterSpacing="-0.2"
          >
            okta
          </text>
        </Svg>
      );

    case 'snowflake':
      return (
        <Svg title="Snowflake">
          <path
            fill="#29B5E8"
            d="M12 1.8 13.2 5h2.6L14.2 7l1.2 3.2L12 8.6 8.6 10.2 9.8 7 8.2 5h2.6L12 1.8zm0 20.4L10.8 19H8.2l1.6-2-1.2-3.2L12 15.4l3.4-1.6-1.2 3.2 1.6 2h-2.6L12 22.2zM1.8 12 5 10.8V8.2L7 9.8l3.2-1.2L8.6 12l1.6 3.4L7 14.2 5 15.8v-2.6L1.8 12zm20.4 0L19 13.2v2.6L17 14.2l-3.2 1.2L15.4 12 13.8 8.6 17 9.8l2-1.6v2.6L22.2 12zM5.4 5.4l2.6.9 1.7-2.1 1.1 2.8 2.9.4-2.1 1.7.9 2.6-2.8-1.1-.4 2.9-1.7-2.1-2.6.9 1.1-2.8-2.9-.4 2.1-1.7-.9-2.6 2.8 1.1.4-2.9 1.7 2.1zm13.2 13.2-2.6-.9-1.7 2.1-1.1-2.8-2.9-.4 2.1-1.7-.9-2.6 2.8 1.1.4-2.9 1.7 2.1 2.6-.9-1.1 2.8 2.9.4-2.1 1.7.9 2.6-2.8-1.1-.4 2.9-1.7-2.1z"
          />
        </Svg>
      );

    default:
      return null;
  }
}
