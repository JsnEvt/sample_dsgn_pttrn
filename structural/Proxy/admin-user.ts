import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av.Sao Carlos', number: 60 },
          { street: 'Av.Drumond', number: 380 },
        ]);
      }, 2000);
    });
  }
}
