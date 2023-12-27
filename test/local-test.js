const { handler } = require('../dist/index.js'); 
const sampleEvent = require('./samplepayload.json'); 


(async () => {
  try {
    const result = await handler(sampleEvent);
    console.log('Lambda execution result:', result); 
  } catch (error) {
    console.error('Lambda execution error:', error);
  }
})();
