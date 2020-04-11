import Taro, { View, Block } from '@tarojs/components';

import { Header, Footer, TempCard } from '@src/components';

import './index.scss';

const Index = () => {
  return (
    <Block>
      <Header title='Weather Forecast' />
      <View>
        <TempCard location='Shanghai' temperature='17' />
      </View>
      <Footer />
    </Block>
  );
};

export default Index;
