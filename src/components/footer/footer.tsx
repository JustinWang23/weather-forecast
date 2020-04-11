import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { ITouchEvent } from '@tarojs/components/types/common';

import './footer.scss';

interface FooterProps {
  onAddClick?: (e: ITouchEvent) => any;
}

const Footer = ({ onAddClick }: FooterProps) => (
  <View className='footer-wrap'>
    <View>°C / °F</View>
    <View onClick={onAddClick}>Add</View>
  </View>
);

export default Taro.memo(Footer);
