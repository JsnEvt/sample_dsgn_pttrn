import { LightIntensityCommand } from './light-intensity-comman';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

//Receiver
const bedroomLight = new SmartHouseLight('Luz do quarto');
const bathroomlight = new SmartHouseLight('Luz do banheiro');

//Command
const bedlightpowercommand = new LightPowerCommand(bedroomLight);
const bathlightpowercommand = new LightPowerCommand(bathroomlight);
const bedintensitycommand = new LightIntensityCommand(bedroomLight);
const bathintensitycommand = new LightIntensityCommand(bathroomlight);

//Invoker
const smarthouseapp = new SmartHouseApp();
smarthouseapp.addCommand('btn-1', bedlightpowercommand);
smarthouseapp.addCommand('btn-2', bathlightpowercommand);
smarthouseapp.addCommand('btn-3', bedintensitycommand);
smarthouseapp.addCommand('btn-4', bathintensitycommand);

// lightpowercommand.execute();
// lightpowercommand.undo();

smarthouseapp.executeCommand('btn-1');
smarthouseapp.undoCommand('btn-1');

smarthouseapp.executeCommand('btn-2');
smarthouseapp.undoCommand('btn-2');

for (let i = 0; i < 200; i++) {
  smarthouseapp.executeCommand('btn-3');
}

for (let i = 0; i < 200; i++) {
  smarthouseapp.undoCommand('btn-4');
}
