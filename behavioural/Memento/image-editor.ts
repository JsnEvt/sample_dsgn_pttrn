import { ConcreteMemento } from './concrete-memento';
import { MementoProtocol } from './memento_protocol';

// Originator
export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').splice(0, -1).join('');
    //A linha de cima remove a extensao do arquivo. split - separa no ponto
    //Splice, fatia do inicio do nome do arquivo ate o penultimo elemento
    //Join, une com espaco vazio.
    this.filePath += '.' + format;
    //Aqui, o arquivo recebe um ponto, esperando a nova extensao.
  }
  save(): Readonly<MementoProtocol> {
    const date = new Date();
    return new ConcreteMemento(
      date.toISOString(), //Aqui e o proprio nome do arquivo.
      date,
      this.filePath,
      this.fileFormat
    );
  }

  restore(memento: MementoProtocol): void {
    const concreteMemento = memento as ConcreteMemento;
    //na linha acima e feito o type casting para ter acesso a todos os metodos da classe ConcreteMemento
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}
