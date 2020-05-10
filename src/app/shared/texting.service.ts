import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextingService {
  constructor() {}

  appendSMSGateway(phoneNumber: string, provider: string) {
    let appendedNumber;

    switch (provider) {
      case 'TMobile':
        appendedNumber = phoneNumber.concat(CellAdresses.TMobile);
        break;
      case 'ATT':
        appendedNumber = phoneNumber.concat(CellAdresses.ATT);
        break;
      case 'Sprint':
        appendedNumber = phoneNumber.concat(CellAdresses.Sprint);
        break;
      case 'Verizon':
        appendedNumber = phoneNumber.concat(CellAdresses.Verizon);
        break;
    }
    console.log('TEXTING SERVICE', appendedNumber);
    return appendedNumber;
  }
}

export const CellAdresses = {
  TMobile: '@tmomail.net',
  ATT: '@txt.att.net',
  Sprint: '@messaging.sprintpcs.com',
  Verizon: '@vtext.com',
};
