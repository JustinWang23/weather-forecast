import { TempUnitType } from './../types/index';

export const convertTemp = (temp: number, target = TempUnitType.C) => {
  return target === TempUnitType.F ? Math.round(temp * 1.8 + 32) : Math.round(temp);
};
