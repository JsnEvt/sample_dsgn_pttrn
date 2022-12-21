//A interface sera o comando que ira executar a acao
//Esses metodos sao a resposta a esses comandos.

export interface SmartHouseCommand {
  execute(): void;
  undo(): void;
}
