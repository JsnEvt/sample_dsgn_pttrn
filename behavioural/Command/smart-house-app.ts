import { SmartHouseCommand } from './smart-house-command';

//Esse codigo simula um controle que seria o Invoker
export class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommand } = {}; // smarthousecommand e a interface

  addCommand(key: string, command: SmartHouseCommand): void {
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }
  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}
