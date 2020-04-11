import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import './tempCard.scss';

interface TempCardProps {
  location: string;
  temperature: string;
}

const TempCard = ({ location, temperature }: TempCardProps) => (
  <View className='temp-card-wrap'>
    <View className='temp-card-location'>{location}</View>
    <View className='temp-card-temperature'>{temperature}°</View>
  </View>
);

export default Taro.memo(TempCard);
