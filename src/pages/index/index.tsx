import Taro, { useEffect, useState } from '@tarojs/taro';
import { Block, View, Input } from '@tarojs/components';
import { BaseEventOrig } from '@tarojs/components/types/common';

import { Header, Footer, WeatherCard } from '@src/components';
import { OPEN_WEATHER_API_KEY } from '@src/configs';
import { TempUnitType } from '@src/types';

import './index.scss';

const Index = () => {
  const [tempUnit, setTempUnit] = useState<TempUnitType>(TempUnitType.C);
  const [searchCity, setSearchCity] = useState<string>('');
  const [cityWeatherList, setCityWeatherList] = useState<{ id: number; name: string; temp: number; weather: string }[]>(
    []
  );

  useEffect(() => {
    getCurrentWeather('Shanghai');
  }, []);

  const getCurrentWeather = (city: string) =>
    Taro.request({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
      method: 'GET',
    }).then((res) => {
      const {
        id,
        name,
        main: { temp },
        weather: [weatherDescp],
      } = res.data;

      setCityWeatherList([...cityWeatherList, { id, name, temp, weather: weatherDescp.main }]);
    });

  const onCityInput = (e: BaseEventOrig<any>) => {
    setSearchCity(e.detail.value);
  };

  const onAddWeather = () => {
    if (!searchCity) {
      Taro.showToast({ title: 'Please input city', icon: 'none' });
      return;
    }

    getCurrentWeather(searchCity).then(() => {
      setSearchCity('');
    });
  };

  const onTempCardClick = (city: string) => {
    Taro.navigateTo({ url: `/pages/forecast-detail/index?city=${city}&unit=${tempUnit}` });
  };

  const onTempUnitChange = (v: TempUnitType) => {
    setTempUnit(v);
  };

  return (
    <Block>
      <Header title='Weather Forecast' />
      {cityWeatherList.map((weather) => (
        <WeatherCard
          key={weather.id}
          text={weather.name}
          weather={weather.weather}
          temperature={Math.round(weather.temp)}
          tempUnit={tempUnit}
          onClick={onTempCardClick}
        />
      ))}
      <View className='add-area-wrap'>
        <Input placeholder='Search City' value={searchCity} onInput={onCityInput}></Input>
        <View className='add-btn' onClick={onAddWeather}>
          Add
        </View>
      </View>
      <Footer tempUnit={tempUnit} onTempUnitChange={onTempUnitChange} />
    </Block>
  );
};

export default Index;
