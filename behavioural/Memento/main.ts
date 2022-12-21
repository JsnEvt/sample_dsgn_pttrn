import { ImageEditor } from './image-editor';
import { ImageEditorBkpManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBkpManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('bmp');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);
