import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapMemberToVM = (data: am.MemberDetail): vm.MemberDetail => ({
  id: data.id.toString(),
  login: data.login,
  name: data.name,
  avatarUrl: data.avatar_url,
});

export const mapCharacterToVM = (data: am.Result): vm.MemberDetail => ({
  id: data.id.toString(),
  name: data.name,
  avatarUrl: data.image,
});
