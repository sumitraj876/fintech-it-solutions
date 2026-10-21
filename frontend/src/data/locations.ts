export type LocationStatus = 'physical-office' | 'service-location' | 'planned';

export type Location = {
  city: string;
  region: string;
  status: LocationStatus;
  address: string | null;
  mapUrl: string | null;
  note?: string;
  image: string;
};

export const locations: Location[] = [
  { city: 'Pune', region: 'Maharashtra', status: 'service-location', address: null, mapUrl: null, note: 'Service coverage and client engagement.', image: '/images/locations/pune.webp' },
  { city: 'Bengaluru', region: 'Karnataka', status: 'service-location', address: null, mapUrl: null, note: 'Service coverage and client engagement.', image: '/images/locations/bengaluru.webp' },
  { city: 'Noida', region: 'Uttar Pradesh', status: 'service-location', address: null, mapUrl: null, note: 'Service coverage and client engagement.', image: '/images/locations/noida.webp' },
];

export const statusLabels: Record<LocationStatus, string> = {
  'physical-office': 'Physical office',
  'service-location': 'Service location',
  planned: 'Planned',
};