export class SmartHouseLight {
  //Luz inteligente
  //Aqui sao informados os metodos que serao atribuidos a luz inteligente.
  //E como se perguntassemos: como dar uma funcao a luz
  //A interface sera o comando que ira executar a acao
  //Esses metodos sao a resposta a esses comandos.
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} agora esta ${this.getPowerStatus()}`);
    return this.isOn;
  }
  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} agora esta ${this.getPowerStatus()}`);
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;
    this.intensity += 1;
    return this.intensity;
  }
  decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;
    this.intensity -= 1;
    return this.intensity;
  }
}
