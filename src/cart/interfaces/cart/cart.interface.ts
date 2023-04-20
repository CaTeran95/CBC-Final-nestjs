export type MapType = {
  [id: string]: number;
};

export interface Cart {
  readonly UUID: string;
  readonly products: MapType;
}
