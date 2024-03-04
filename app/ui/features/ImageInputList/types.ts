export type item = {
  label: string;
  value: number;
};

export interface IImageInputList {
  imageURIs: string[];
  onRemoveImage: (uri: string) => void;
  onAddImage: (uri: string) => void;
}
