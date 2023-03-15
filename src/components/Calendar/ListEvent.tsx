import React, { useState, useEffect } from 'react';
import getEventAPI from 'apis/event/getEventAPI';
import { useRecoilValue } from 'recoil';
import { selectedDateAtom } from 'state/atoms';
import { GoogleEvents, GoogleEventItem } from '../../types';

interface ApiResponse {
  status: number;
  message: string;
  data: Record<string, unknown>; // key-value 쌍을 가진 객체
}

function ListEvent() {
  const selectedDate = useRecoilValue(selectedDateAtom);
  const [items, setItems] = useState<GoogleEventItem[]>();
  useEffect(() => {
    getEventAPI(selectedDate)
      .then((data) => {
        console.log(data);
        setItems(data.items as GoogleEventItem[]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedDate]);
  if (!items) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>ListEvent</div>
      {items.length >= 1 ? (
        items.map((item: GoogleEventItem) => (
          <div key={item.id}>
            <div>{item.summary}</div>
            <div>{item.start.dateTime}</div>
            <div>{item.end.dateTime}</div>
          </div>
        ))
      ) : (
        <div>이벤트가 없습니다</div>
      )}
    </>
  );
}

export default ListEvent;
