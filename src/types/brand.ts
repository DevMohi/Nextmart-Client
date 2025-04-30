export interface IBrand {
  _id: string;
  name: string;
  logo: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  children: IBrand[];
}
