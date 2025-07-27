import * as api from "./api";
import { mapMembersToVM } from "./list.mapper";

export const getMembers = (org) => api.getMembers(org).then(mapMembersToVM);
