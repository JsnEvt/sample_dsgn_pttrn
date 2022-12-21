import { DeviceImplementation } from '../device/device-implementarion';

export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    3;
    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`
    );
  }
}
