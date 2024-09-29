export type Accommodation = {
  name: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
  };
  website: string;
  image: string;
  coordinates: [number, number];
  icon: string;
  phone: string;
};
