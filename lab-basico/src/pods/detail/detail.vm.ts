export interface MemberDetail {
  id: string;
  login?: string;
  name: string;
  avatarUrl: string;
}

export const createDefaultMemberDetail = (): MemberDetail => ({
  id: "",
  name: "",
  avatarUrl: "",
});
