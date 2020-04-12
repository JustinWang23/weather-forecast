import { useState } from '@tarojs/taro';

import { TempUnitType } from '@src/types';

export const useTempUnit = (unit: TempUnitType = TempUnitType.C) => {
  const [tempUnit, setTempUnit] = useState<TempUnitType>(unit);

  return { tempUnit, setTempUnit };
};
