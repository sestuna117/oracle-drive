export type APIData<T> = {
  count: number;
  query: Object;
  results: Array<T>;
};

export type CardListCard = Card & {
  sources: CardSource
};

export type CardSource = {
  npcs: Array<NPC>;
  packs: Array<CardPack>;
  drops: Array<string>;
  purchase: number | null;
}

export type CardType = {
  id: number;
  name: string;
  image: string | null;
};

export type CardPack = {
  cost: number;
  id: number;
  link: string;
  name: string;
};

export type NPC = {
  difficulty: string;
  id: number;
  link: string;
  location: NPCLocation;
  name: string;
  patch: string;
  quest: CardNPCQuest | null;
  resident_id: number;
  rule_ids: Array<number>;
  rules: Array<string>;
};

export type NPCLocation = {
  name: string;
  region: string;
  x: number;
  y: number;
};

export type CardNPCQuest = {
  id: number;
  link: string;
  name: string;
};

export type NPCListNPC = NPC & {
  rewards: Array<Card>;
};

export type Card = {
  deck_order: number;
  description: string;
  icon: string;
  id: number;
  image: string;
  link: string;
  name: string;
  number: string;
  order: number;
  order_group: number;
  owned: string;
  patch: string;
  sell_price: number;
  stars: number;
  stats: {
    numeric: { top: number; right: number; bottom: number; left: number };
    formatted: { top: number | string; right: number | string; bottom: number | string; left: number | string };
  };
  type: CardType;
};

export type CardPacks = {
  cards: Array<Card>;
  cost: number;
  id: number;
  link: string;
  name: string;
};
