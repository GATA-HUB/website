export type Validator = {
  icon: string;
  title: string;
  network: string;
  tokens: number;
  symbol: string;
  commission: string;
  status?: string;
  stake?: string;
  autoCompound?: string;
  stat: string;
  addr: string;
  active: boolean;
}
  
export type Team = {
  image: string;
  name: string;
  title: string;
  desc: string;
  twitter: string;
}

export type Liquidity = {
  network: string;
  icon: string;
  quantity: number;
  symbol: string;
}

export type YGataNFT = {
  network: string;
  icon: string;
  quantity: number;
  usdValue: number;
}

export type StakedAssetsBreakdown = {
  network: string;
  symbol: string;
  icon: string;
  addr: string;
  quantity: number;
}

export type Endpoints = {
  icon: string;
  title: string;
  endpoints: Array<string>;
}

export type NFTCollection = {
  image: string;
  name: string;
  desc?: string;
  collection: string;
  active: boolean;
  href: string;
  details: string;
  rewardsUrl?: string;
}

export type Points = {
  point: string;
  href?: string;
}

export type RoadmapCont = {
  subTitle: string;
  points: Points[];
}

export type GataEpoch = {
  title: string;
  desc: string;
  atomeDist: number;
  date: string;
  href: string;
}

export type RewardNfts = {
  icon: string;
  title: string;
}

export type Reward = {
  nfts: RewardNfts[];
  rewardSol: number;
  rewardYGata: number;
  revenue: number;
}

export type YGReward = {
  nfts: RewardNfts[];
  reward: number;
  revenue: number;
}

export type YGEpoch = {
  title: string;
  date: string;
  href: string;
  rewards: YGReward[];
}

export type YCEpoch = {
  title: string;
  date: string;
  href: string;
  rewards: Reward[];
}