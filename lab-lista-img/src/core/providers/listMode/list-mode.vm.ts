export type ListMode = "cats" | "dogs";

export interface ListModeContextModel {
  mode: ListMode;
  setMode: (mode: ListMode) => void;
}
