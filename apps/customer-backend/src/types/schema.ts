export interface IUser extends Document {
  _id: string;
  userName: string;
  role:string;
  email: string;
  password: string;
  termsAccepted?: Boolean;
  organizationId?:string;
  createdAt:string;
  phone?: string;
}
