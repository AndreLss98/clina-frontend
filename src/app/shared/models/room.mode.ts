export interface Room {
  name: string;
  city: string;
  uf: string;
  price: number;

  photos: RoomPhotos[];
}

export interface RoomPhotos {
  url: string;
}