import { AppDataSource } from "./database";
import { SmartGen } from "./device.entity";
import { Payload } from "./types";
export async function Handler(event: Payload) {
  if(!AppDataSource.isInitialized){
    await AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been set up!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization. Check config!', err);
    });
  }
  
  const smartGenRepository = AppDataSource.getRepository(SmartGen);
  const newDataEntry = smartGenRepository.create();

  newDataEntry.deviceID = event.deviceID;
  newDataEntry.clientId = event.clientId;
  newDataEntry.status = event.status;
  newDataEntry.vPhase1 = event.vPhase1;
  newDataEntry.vPhase2 = event.vPhase2;
  newDataEntry.vPhase3 = event.vPhase3;
  newDataEntry.I1 = event.I1;
  newDataEntry.I2 = event.I2;
  newDataEntry.I3 = event.I3;
  newDataEntry.apparentPower1 = event.apparentPower1;
  newDataEntry.apparentPower2 = event.apparentPower2;
  newDataEntry.apparentPower3 = event.apparentPower3;
  newDataEntry.realPower1 = event.realPower1;
  newDataEntry.realPower2 = event.realPower2;
  newDataEntry.realPower3 = event.realPower3;
  newDataEntry.powerFactor = event.powerFactor;
  newDataEntry.frequency = 10 * event.frequency;
  newDataEntry.kwh = event.KWh;
  newDataEntry.signalStrength = event.signalStrenght;

  await smartGenRepository.save(newDataEntry);
  return newDataEntry;
};