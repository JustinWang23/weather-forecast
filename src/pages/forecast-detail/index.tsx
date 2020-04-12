import Taro, { useRouter, useEffect, useState } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';

import { TempCard } from '@src/components';
import { OPEN_WEATHER_API_KEY } from '@src/configs';
import { TempUnitType } from '@src/types';

const ForecastDetail = () => {
  const { params } = useRouter();
  const [weatherList, setWeatherList] = useState<any>([]);
  const { city, unit } = params;

  useEffect(() => {
    Taro.request({
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
    }).then((res) => {
      const { list } = res.data;
      setWeatherList(list);
    });
  }, []);

  return (
    <Block>
      <View>{city}</View>
      {weatherList.map((weather) => (
        <TempCard
          key={weather.dt}
          text={weather.dt_txt}
          temperature={Math.round(weather.main.temp)}
          tempUnit={unit as TempUnitType}
        />
      ))}
    </Block>
  );
};

export default ForecastDetail;
