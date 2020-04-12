import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import cx from 'classnames';

import { TempUnitType } from '@src/types';

import './footer.scss';

interface FooterProps {
  tempUnit: TempUnitType;
  onTempUnitChange: (v: TempUnitType) => any;
}

const Footer = ({ tempUnit, onTempUnitChange }: FooterProps) => {
  const onTemperatureUnitChange = () => {
    onTempUnitChange(tempUnit === TempUnitType.C ? TempUnitType.F : TempUnitType.C);
  };

  return (
    <View className='footer-wrap'>
      <View className='temp-unit' onClick={onTemperatureUnitChange}>
        <Text className={cx({ 'temp-unit__selected': tempUnit === TempUnitType.C })}>°C</Text>
        <Text> / </Text>
        <Text className={cx({ 'temp-unit__selected': tempUnit === TempUnitType.F })}>°F</Text>
      </View>
    </View>
  );
};

export default Taro.memo(Footer);
