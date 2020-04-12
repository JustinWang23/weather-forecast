import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { TempUnitType } from '@src/types';
import { convertTemp } from '@src/utils';

import './tempCard.scss';

interface TempCardProps {
  location: string;
  temperature: number;
  tempUnit: TempUnitType;
}

const TempCard = ({ location, temperature, tempUnit }: TempCardProps) => (
  <View className='temp-card-wrap'>
    <View className='temp-card-location'>{location}</View>
    <View className='temp-card-temperature'>{convertTemp(temperature, tempUnit)}°</View>
  </View>
);

export default Taro.memo(TempCard);
