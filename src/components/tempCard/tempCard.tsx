import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { TempUnitType } from '@src/types';
import { convertTemp } from '@src/utils';

import './tempCard.scss';

interface TempCardProps {
  text: string;
  temperature: number;
  tempUnit: TempUnitType;
  onClick?: (e: string) => any;
}

const TempCard = ({ text, temperature, tempUnit, onClick }: TempCardProps) => {
  const onCardClick = () => {
    onClick && onClick(text);
  };

  return (
    <View className='temp-card-wrap' onClick={onCardClick}>
      <View className='temp-card-text'>{text}</View>
      <View className='temp-card-temperature'>{convertTemp(temperature, tempUnit)}°</View>
    </View>
  );
};

export default Taro.memo(TempCard);
