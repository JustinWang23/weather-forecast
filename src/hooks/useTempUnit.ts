import { useState } from '@tarojs/taro';

type TempUnitType = 'C' | 'F';

export const useTempUnit = (unit: TempUnitType = 'C') => {
  const [tempUnit, setTempUnit] = useState<TempUnitType>(unit);

  return { tempUnit, setTempUnit };
};
