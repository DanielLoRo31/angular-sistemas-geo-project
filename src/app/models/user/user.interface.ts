export interface IUser {
  _id?: string;
  email: string;
  password: string;
  name?: string;
  direction?: string;
  geometry?: {
    lat?: number;
    lng?: number;
  };
}
