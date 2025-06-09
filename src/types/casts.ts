type Image = {
  url: string;
  height: number;
  width: number;
};

type Affiliate = {
  name: string;
  twitter: string;
  soundcloud: string | null;
  other: string | null;
};

export type Act = 'DJ' | 'VJ' | 'Live Paint';

export type Floor = 'Main Floor' | '2F Floor' | 'Lounge Floor';

type Links = {
  twitter: string;
  soundcloud: string | null;
  other: string | null;
};

export type Cast = {
  name: string;
  image: Image;
  pickup: boolean;
  affiliates: Affiliate[] | null;
  act: Act[];
  floor: Floor[];
  links: Links;
  profile: string;
  eventAffiliates: string;
};
