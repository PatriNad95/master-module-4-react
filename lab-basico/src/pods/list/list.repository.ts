import * as api from "./api";
import { mapMembersToVM, mapResultsToVM } from "./list.mapper";

export const getMembers = (org) => api.getMembers(org).then(mapMembersToVM);

export const getCharacters = (url) => api.getInfo(url).then(mapResultsToVM);
