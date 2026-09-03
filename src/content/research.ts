export const researchContent = {
  title: 'Research & field notes',
  ctaLabel: 'Explore the library',
  ctaHref: '/blogs',
  columns: [
    {
      title: 'Identify actual risk',
      body: 'Let ATLAS pull threat needles from the alert haystack, correlating nation-state and criminal activity across the deep and dark web.',
      href: '/blogs/securing-cloud-environments-for-modern-enterprises',
    },
    {
      title: 'Investigate cases faster',
      body: 'Trace chases answers on complex, prioritized cases with plain-language queries, showing its work across every source it touches.',
      href: '/blogs/how-ai-improves-threat-detection-and-response-time',
    },
    {
      title: 'Reduce response time',
      body: 'VECTOR compresses detect-to-respond into one console, so briefs leave the SOC as tickets, not slide decks.',
      href: '/blogs/preventing-threats-through-early-detection',
    },
  ],
  sources: [
    { name: 'ATLAS', hint: 'Threat intel' },
    { name: 'VECTOR', hint: 'SOC platform' },
    { name: 'Trace', hint: 'OSINT' },
    { name: 'ZeroXphish', hint: 'Awareness' },
    { name: 'SIEM', hint: 'Telemetry' },
    { name: 'OSINT', hint: 'Open source' },
    { name: 'Cloud', hint: 'Workloads' },
    { name: 'Dark web', hint: 'Underground' },
  ],
  flowLabel: 'collect → analyse → publish',
  outputLabel: 'Field notes',
} as const;
