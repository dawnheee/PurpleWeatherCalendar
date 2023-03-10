import React from 'react';
import { WeatherInfo } from '../../../types';
import iconClassArr from '../static/iconClassArr.json';

// weatherInfo 의 iconNum을 이용해서 일치하는 아이콘 calssName을 리턴함

function useIcons(iconNum?: number): string {
  if (iconNum !== undefined) {
    return iconClassArr[iconNum - 1];
  }
  return '오류';
}

export default useIcons;
