import { AuthModel } from './auth.model';

export class UserModel extends AuthModel {
  id: number;
  password: string;
  fullname: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  profileImage: string;
  role: string[] = [];
  companyName: string;
  contactNumber: string;
  website: string;

  setUser(_user: unknown) {
    const user = _user as UserModel;
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email || '';
    this.profileImage = user.profileImage || './assets/media/users/default.jpg';
    this.role = user.role || [];
    this.contactNumber = user.contactNumber || '';
    this.status = user.status;
  }
}
