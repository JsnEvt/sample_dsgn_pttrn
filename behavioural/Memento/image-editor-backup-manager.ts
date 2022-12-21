//Caretaker = zelador
// Essa classe e basicamente um comando concreto.
// O METODO SAVE NA CLASSE IMAGEEDITOR REALIZA O BACKUP
// O METODO  RESTORE NA CLASSE IMAGEEDITOR, RESTAURA O BKP.

import { ImageEditor } from './image-editor';
import { MementoProtocol } from './memento_protocol';

export class ImageEditorBkpManager {
  private mementos: MementoProtocol[] = [];

  constructor(private readonly imageEditor: ImageEditor) {} // imageEditor = originator

  backup(): void {
    console.log(`Backup: salvando o estado de ImageEditor`);
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();
    if (!memento) {
      console.log('Backup: No mementos.');
      return;
    }
    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} foi restaurado com sucesso.`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
