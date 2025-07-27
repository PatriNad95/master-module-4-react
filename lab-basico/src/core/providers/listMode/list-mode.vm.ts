export type ListMode = "github" | "rickmorty";

export interface ListModeContextModel {
  mode: ListMode;
  setMode: (mode: ListMode) => void;
}
