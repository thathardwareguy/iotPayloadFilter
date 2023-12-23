export interface Payload {
    deviceID:       string;
    clientId:       string;
    status:           number;
    vPhase1:          number;
    vPhase2:          number;
    vPhase3:          number;
    I1:               number;
    I2:               number;
    I3:               number;
    realPower1:       number;
    realPower2:       number;
    realPower3:       number;
    apparentPower1:   number;
    apparentPower2:   number;
    apparentPower3:   number;
    powerFactor:      number;
    frequency:        number;
    KWh:              number;
    signalStrenght:   number; 
  };
  /*
  export interface ENVTYPES {
    username: string;
    host: string;
    database: string;
    password: string;
    port: number;
  };
  */
  /*
  export const vars: ENVTYPES = {
    username: process.env.USERNAME ?? '',
    host: process.env.HOST ?? '',
    database: process.env.DATABASE ?? '',
    password: process.env.PASSWORD ?? '',
    port: Number(process.env.PORT ?? '5432')
  }
  */