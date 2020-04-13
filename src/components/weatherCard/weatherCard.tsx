import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { TempUnitType } from '@src/types';
import { convertTemp } from '@src/utils';

import './weatherCard.scss';

interface TempCardProps {
  text: string;
  weather: string;
  temperature: number;
  tempUnit: TempUnitType;
  onClick?: (e: string) => any;
}

const WeatherCard = ({ text, weather, temperature, tempUnit, onClick }: TempCardProps) => {
  const onCardClick = () => {
    onClick && onClick(text);
  };

  return (
    <View className='weather-card-wrap' onClick={onCardClick}>
      <View className='weather-card-left-wrap'>
        <View className='weather-card-text'>{text}</View>
        <View className='weather-card-weather'>{weather}</View>
      </View>
      <View className='weather-card-temperature'>{convertTemp(temperature, tempUnit)}°</View>
    </View>
  );
};

export default Taro.memo(WeatherCard);
