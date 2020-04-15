import { convertTemp } from './';
import { TempUnitType } from '../types';

describe('test utils', () => {
  it('should convert "10°C" to 50°F', () => {
    const tempInC = '10';

    const convertedTempInF = convertTemp(tempInC, TempUnitType.F);

    expect(convertedTempInF).toEqual(50);
  })

  it('should convert 23°C to 74°F', () => {
    const tempInC = 23;

    const convertedTempInF = convertTemp(tempInC, TempUnitType.F);

    expect(convertedTempInF).toEqual(74);
  });

  it('should convert 10.2°C to 11°C', () => {
    const tempInC = 10.2;

    const convertedTempInC = convertTemp(tempInC);

    expect(convertedTempInC).toEqual(11);
  })
});
