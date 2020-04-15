import { TempUnitType } from './../types/index';

export const convertTemp = (temp: number | string, target = TempUnitType.C) => {
  if (typeof temp === 'string') {
    temp = Number(temp);
  }

  return target === TempUnitType.F ? Math.ceil(temp * 1.8 + 32) : Math.ceil(temp);
};
