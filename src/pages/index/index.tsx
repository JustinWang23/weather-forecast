import Taro, { useEffect, useState } from '@tarojs/taro';
import { Block, View } from '@tarojs/components';

import { Header, Footer, TempCard } from '@src/components';
import { OPEN_WEATHER_API_KEY } from '@src/configs';
import { TempUnitType } from '@src/types';

import './index.scss';

const Index = () => {
  const [tempUnit, setTempUnit] = useState<TempUnitType>(TempUnitType.C);
  const [cityWeatherList, setCityWeatherList] = useState<{ city: string; temp: string }[]>([]);

  useEffect(() => {
    Taro.request({
      url: `https://api.openweathermap.org/data/2.5/weather?q=Shanghai&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
      method: 'GET',
    }).then((res) => {
      setCityWeatherList([...cityWeatherList, { city: 'Shanghai', temp: res.data.main.temp }]);
    });
  }, []);

  const onTempUnitChange = (v: TempUnitType) => {
    setTempUnit(v);
  };

  return (
    <Block>
      <Header title='Weather Forecast' />
      {cityWeatherList.map((weather) => (
        <TempCard
          key={weather.city}
          location={weather.city}
          temperature={Math.round(Number(weather.temp))}
          tempUnit={tempUnit}
        />
      ))}
      <View className='add-btn'>Add</View>
      <Footer tempUnit={tempUnit} onTempUnitChange={onTempUnitChange} />
    </Block>
  );
};

export default Index;
