import { validateOrReject, ValidationError } from 'class-validator';
import { AppDataSource } from "./database";
import { SmartGen } from "./device.entity";
import { Payload } from "./types";
import * as dotenv from 'dotenv';

dotenv.config();

export async function Handler(event: Payload) {
  try {
    await validateOrReject(event);
    console.log('Validation successful!');

    await initializeDataSource();
    const savedData = await createAndSaveSmartGen(event);
    return { success: true, data: savedData };
  } catch (errors) {
    console.error('Validation failed. Errors: ', errors);

    if (errors instanceof Array && errors.length > 0 && errors[0] instanceof ValidationError) {
      console.error('First validation error: ', errors[0].toString());
    }

    return { success: false, error: 'Validation failed' };
  }
}

async function initializeDataSource() {
	try {
	  if (!AppDataSource.isInitialized) {
		await AppDataSource.initialize();
		console.log('Data Source has been set up!');
	  }
	} catch (err) {
	  console.error('Error during Data Source initialization. Check config!', err);
	  throw err; 
	}
  }
  
  async function createAndSaveSmartGen(event: Payload) {
	const { frequency, ...rest } = event;
	const smartGenRepository = AppDataSource.getRepository(SmartGen);
	const newDataEntry = smartGenRepository.create(rest);
	newDataEntry.frequency = 10 * frequency;
  
	try {
	  const savedData = await smartGenRepository.save(newDataEntry);
	  console.log('Data saved to the database:', savedData);
	  return savedData;
	} catch (err) {
	  console.error('Error saving to the database:', err);
	  throw err; 
	}
  }
  