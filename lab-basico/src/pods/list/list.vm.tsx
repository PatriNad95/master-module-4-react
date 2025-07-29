export interface Member {
  id: string;
  login: string;
  avatarUrl: string;
}

export interface InfoRickMorty {
  info: Info;
  results: Member[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
