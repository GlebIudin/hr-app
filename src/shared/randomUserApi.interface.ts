export interface RandomUserApiResponse {
  results: RandomUser[];
}

export interface RandomUser {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  picture: {
    large: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
  };
}