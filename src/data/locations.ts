export interface ServiceLocation {
  slug: string;
  city: string;
  state: string;
}

export const locations: ServiceLocation[] = [
  { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
  { slug: "marietta-ga", city: "Marietta", state: "GA" },
  { slug: "alpharetta-ga", city: "Alpharetta", state: "GA" },
  { slug: "roswell-ga", city: "Roswell", state: "GA" },
];
