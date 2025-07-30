interface CartContextModel {
  selectedIds: string[];
  toggleId: (id: string) => void;
  removeId: (id: string) => void;
  isSelected: (id: string) => boolean;
}
