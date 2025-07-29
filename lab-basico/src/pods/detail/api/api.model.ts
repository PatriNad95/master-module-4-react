export interface MemberDetail {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  hireable: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gits: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: BasicInfo;
  location: BasicInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface BasicInfo {
  name: string;
  url: string;
}
