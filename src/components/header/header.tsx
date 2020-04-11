import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => <View className='header-wrap'>{title}</View>;

export default Taro.memo(Header);
