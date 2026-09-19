import {
  servicesMarqueeItems,
  type ServiceMarqueeItem,
} from '@/content/servicesMarquee';

export type ServiceModule =
  | 'Offensive'
  | 'Defensive'
  | 'Identity & Access'
  | 'Cloud & App'
  | 'Threat Intel'
  | 'Governance'
  | 'AI & Automation';

type ServiceMeta = {
  aliases: string[];
  relatedIds: string[];
  module: ServiceModule;
};

/** Short forms, nicknames, and common misspellings keyed by service id. */
const serviceMeta: Record<string, ServiceMeta> = {
  '01': {
    module: 'Offensive',
    aliases: ['va', 'vuln assessment', 'vulnerability scan', 'vuln scan'],
    relatedIds: ['02', '18', '20'],
  },
  '02': {
    module: 'Offensive',
    aliases: ['pentest', 'pen test', 'pt', 'vapt', 'pen-testing'],
    relatedIds: ['01', '03', '20'],
  },
  '03': {
    module: 'Cloud & App',
    aliases: ['web app security', 'appsec', 'owasp', 'websec'],
    relatedIds: ['04', '47', '24'],
  },
  '04': {
    module: 'Cloud & App',
    aliases: ['api sec', 'api protection', 'rest security'],
    relatedIds: ['03', '47', '06'],
  },
  '05': {
    module: 'Defensive',
    aliases: ['mobile security', 'endpoint security', 'mdm', 'mobile endpoint'],
    relatedIds: ['12', '07', '06'],
  },
  '06': {
    module: 'Cloud & App',
    aliases: ['cloudsec', 'aws security', 'azure security', 'gcp security'],
    relatedIds: ['45', '04', '18'],
  },
  '07': {
    module: 'Defensive',
    aliases: ['netsec', 'network defence', 'firewall'],
    relatedIds: ['08', '46', '18'],
  },
  '08': {
    module: 'Defensive',
    aliases: ['infra security', 'infra sec', 'server hardening'],
    relatedIds: ['07', '36', '35'],
  },
  '09': {
    module: 'Defensive',
    aliases: ['soc', 'managed soc', 'security operations', 'soc as a service'],
    relatedIds: ['10', '11', '13'],
  },
  '10': {
    module: 'Defensive',
    aliases: ['24/7 monitoring', 'continuous monitoring', 'security monitoring'],
    relatedIds: ['09', '11', '12'],
  },
  '11': {
    module: 'Defensive',
    aliases: ['siem', 'splunk', 'log management', 'siem mgmt'],
    relatedIds: ['09', '12', '48'],
  },
  '12': {
    module: 'Defensive',
    aliases: ['edr', 'xdr', 'endpoint detection', 'crowdstrike', 'sentinelone'],
    relatedIds: ['09', '13', '05'],
  },
  '13': {
    module: 'Defensive',
    aliases: ['ir', 'incident response', 'breach response', 'dfir'],
    relatedIds: ['14', '09', '30'],
  },
  '14': {
    module: 'Threat Intel',
    aliases: ['forensics', 'dfir', 'digital forensics', 'investigation'],
    relatedIds: ['13', '31', '32'],
  },
  '15': {
    module: 'Threat Intel',
    aliases: ['ti', 'cti', 'threat intel', 'intel'],
    relatedIds: ['16', '17', '18'],
  },
  '16': {
    module: 'Threat Intel',
    aliases: ['hunt', 'proactive hunting', 'threat hunt'],
    relatedIds: ['15', '12', '09'],
  },
  '17': {
    module: 'Threat Intel',
    aliases: ['darkweb', 'dark web', 'leak monitoring', 'credential leak'],
    relatedIds: ['15', '18', '33'],
  },
  '18': {
    module: 'Offensive',
    aliases: ['asm', 'attack surface', 'exposure management'],
    relatedIds: ['19', '01', '06'],
  },
  '19': {
    module: 'Offensive',
    aliases: ['easm', 'external asm', 'external attack surface'],
    relatedIds: ['18', '01', '02'],
  },
  '20': {
    module: 'Offensive',
    aliases: ['red team', 'redteam', 'adversary emulation'],
    relatedIds: ['21', '22', '02'],
  },
  '21': {
    module: 'Offensive',
    aliases: ['purple team', 'purpleteam'],
    relatedIds: ['20', '22', '16'],
  },
  '22': {
    module: 'Offensive',
    aliases: ['bas', 'breach and attack simulation', 'adversary sim'],
    relatedIds: ['20', '21', '02'],
  },
  '23': {
    module: 'Cloud & App',
    aliases: ['devsecops', 'secure sdlc', 'shift left'],
    relatedIds: ['24', '45', '04'],
  },
  '24': {
    module: 'Cloud & App',
    aliases: ['sast', 'dast', 'sca', 'code scanning', 'app scanning'],
    relatedIds: ['23', '03', '04'],
  },
  '25': {
    module: 'Identity & Access',
    aliases: ['iam', 'identity', 'access management', 'sso'],
    relatedIds: ['26', '27', '36'],
  },
  '26': {
    module: 'Identity & Access',
    aliases: ['pam', 'privileged access', 'vault'],
    relatedIds: ['25', '27', '32'],
  },
  '27': {
    module: 'Identity & Access',
    aliases: ['zero trust', 'ztna', 'zta'],
    relatedIds: ['25', '26', '07'],
  },
  '28': {
    module: 'Defensive',
    aliases: ['emailsec', 'phishing defense', 'secure email'],
    relatedIds: ['38', '30', '17'],
  },
  '29': {
    module: 'Defensive',
    aliases: ['datasec', 'dlp', 'data protection', 'encryption'],
    relatedIds: ['30', '43', '06'],
  },
  '30': {
    module: 'Defensive',
    aliases: ['ransomware', 'ransom', 'ransomware response'],
    relatedIds: ['13', '12', '29'],
  },
  '31': {
    module: 'Threat Intel',
    aliases: ['malware', 'reverse engineering', 'malware reverse'],
    relatedIds: ['14', '15', '13'],
  },
  '32': {
    module: 'Threat Intel',
    aliases: ['compromise assess', 'breach assessment', 'ca'],
    relatedIds: ['13', '14', '18'],
  },
  '33': {
    module: 'Governance',
    aliases: ['tprm', 'vendor risk', 'third party risk', 'supply chain risk'],
    relatedIds: ['34', '39', '17'],
  },
  '34': {
    module: 'Governance',
    aliases: ['risk assessment', 'cyber risk', 'risk assess'],
    relatedIds: ['33', '39', '35'],
  },
  '35': {
    module: 'Governance',
    aliases: ['architecture review', 'sec arch', 'design review'],
    relatedIds: ['36', '34', '08'],
  },
  '36': {
    module: 'Governance',
    aliases: ['config review', 'hardening review', 'security config'],
    relatedIds: ['35', '08', '25'],
  },
  '37': {
    module: 'Governance',
    aliases: ['awareness', 'security training', 'sat'],
    relatedIds: ['38', '28', '39'],
  },
  '38': {
    module: 'Offensive',
    aliases: ['phish', 'phishing sim', 'phish test', 'human risk'],
    relatedIds: ['37', '28', '20'],
  },
  '39': {
    module: 'Governance',
    aliases: ['grc', 'compliance', 'governance risk'],
    relatedIds: ['40', '41', '34'],
  },
  '40': {
    module: 'Governance',
    aliases: ['iso', 'iso27001', 'iso 27001', 'isms'],
    relatedIds: ['39', '41', '42'],
  },
  '41': {
    module: 'Governance',
    aliases: ['soc2', 'soc 2', 'soc ii', 'type 2'],
    relatedIds: ['39', '40', '42'],
  },
  '42': {
    module: 'Governance',
    aliases: ['pci', 'pci dss', 'payment card'],
    relatedIds: ['39', '40', '29'],
  },
  '43': {
    module: 'Governance',
    aliases: ['gdpr', 'dpdp', 'privacy', 'data privacy'],
    relatedIds: ['29', '39', '40'],
  },
  '44': {
    module: 'AI & Automation',
    aliases: ['ai sec', 'llm security', 'genai security', 'ml security'],
    relatedIds: ['48', '24', '15'],
  },
  '45': {
    module: 'Cloud & App',
    aliases: ['k8s', 'kubernetes', 'container security', 'docker security'],
    relatedIds: ['06', '23', '04'],
  },
  '46': {
    module: 'Defensive',
    aliases: ['ddos', 'denial of service', 'dos protection'],
    relatedIds: ['47', '07', '06'],
  },
  '47': {
    module: 'Cloud & App',
    aliases: ['waf', 'web application firewall', 'app firewall'],
    relatedIds: ['03', '46', '04'],
  },
  '48': {
    module: 'AI & Automation',
    aliases: ['soar', 'security automation', 'orchestration', 'playbooks'],
    relatedIds: ['09', '11', '44'],
  },
};

export type SearchableService = ServiceMarqueeItem & ServiceMeta;

export const searchableServices: SearchableService[] = servicesMarqueeItems.map(
  (item) => ({
    ...item,
    ...(serviceMeta[item.id] ?? {
      aliases: [],
      relatedIds: [],
      module: 'Defensive' as ServiceModule,
    }),
  }),
);

export type ServiceSearchResult = {
  primary: SearchableService;
  relatedImages: SearchableService[];
  correctedFrom?: string;
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9+/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 0; i < a.length; i += 1) {
    let prev = i;
    row[0] = i + 1;
    for (let j = 0; j < b.length; j += 1) {
      const current = row[j + 1];
      const cost = a[i] === b[j] ? 0 : 1;
      row[j + 1] = Math.min(row[j + 1] + 1, row[j] + 1, prev + cost);
      prev = current;
    }
  }
  return row[b.length];
}

function scoreCandidate(query: string, service: SearchableService) {
  const q = normalize(query);
  if (!q) return 0;

  const title = normalize(service.title);
  const haystacks = [title, ...service.aliases.map(normalize), normalize(service.module)];

  let best = 0;
  for (const hay of haystacks) {
    if (!hay) continue;
    if (hay === q) best = Math.max(best, 100);
    else if (hay.startsWith(q) || q.startsWith(hay)) best = Math.max(best, 92);
    else if (hay.includes(q) || q.includes(hay)) best = Math.max(best, 80);

    const tokens = hay.split(' ');
    for (const token of tokens) {
      if (!token) continue;
      if (token === q) best = Math.max(best, 88);
      const distance = levenshtein(q, token);
      const maxLen = Math.max(q.length, token.length);
      if (maxLen > 0 && distance / maxLen <= 0.34) {
        best = Math.max(best, Math.round(72 - distance * 8));
      }
    }

    const titleDistance = levenshtein(q, hay);
    const titleMax = Math.max(q.length, hay.length);
    if (titleMax > 0 && titleDistance / titleMax <= 0.28) {
      best = Math.max(best, Math.round(68 - titleDistance * 4));
    }
  }

  return best;
}

function resolveRelated(primary: SearchableService, limit: number) {
  const byId = new Map(searchableServices.map((s) => [s.id, s]));
  const picked: SearchableService[] = [];
  const seen = new Set<string>([primary.id]);

  for (const id of primary.relatedIds) {
    const item = byId.get(id);
    if (!item || seen.has(item.id)) continue;
    picked.push(item);
    seen.add(item.id);
    if (picked.length >= limit) return picked;
  }

  for (const item of searchableServices) {
    if (seen.has(item.id)) continue;
    if (item.module !== primary.module) continue;
    picked.push(item);
    seen.add(item.id);
    if (picked.length >= limit) break;
  }

  return picked;
}

export function searchServices(query: string): ServiceSearchResult | null {
  const trimmed = query.trim();
  if (!trimmed) return null;

  const ranked = searchableServices
    .map((service) => ({ service, score: scoreCandidate(trimmed, service) }))
    .filter((entry) => entry.score >= 48)
    .sort((a, b) => b.score - a.score || a.service.title.localeCompare(b.service.title));

  if (!ranked.length) return null;

  const primary = ranked[0].service;
  const related = resolveRelated(primary, 2);
  const titleNorm = normalize(primary.title);
  const queryNorm = normalize(trimmed);
  const aliasHit = primary.aliases.some((alias) => normalize(alias) === queryNorm);
  const correctedFrom =
    !aliasHit && !titleNorm.includes(queryNorm) && queryNorm !== titleNorm
      ? trimmed
      : undefined;

  return {
    primary,
    relatedImages: related.slice(0, 2),
    correctedFrom,
  };
}

export function getServiceById(id: string) {
  return searchableServices.find((service) => service.id === id) ?? null;
}
