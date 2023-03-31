import { NowTemp } from 'types';

const useClothes = (nowTemp: NowTemp | undefined): string => {
  if (nowTemp === undefined) {
    return '현재 기온 정보를 찾을 수 없습니다';
  }
  if (nowTemp !== null && nowTemp !== undefined) {
    if (nowTemp >= 28) {
      return '민소매, 반팔, 반바지, 린넨';
    }
    if (nowTemp >= 23) {
      return '반팔, 반바지, 면바지';
    }
    if (nowTemp >= 20) {
      return '블라우스, 긴팔 티, 면바지';
    }
    if (nowTemp >= 17) {
      return '가디건, 니트, 맨투맨, 후드, 긴 바지 ';
    }
    if (nowTemp >= 12) {
      return '자켓, 가디건, 스타킹, 청바지';
    }
    if (nowTemp >= 9) {
      return '트렌치코트, 점퍼, 스타킹, 기모바지';
    }
    if (nowTemp >= 5) {
      return '울 코트, 내복, 기모';
    }
    return '패딩, 두꺼운 코트, 누빔 옷, 목도리';
  }
  return '기온 별 옷차림 정보가 없습니다';
};

export default useClothes;
