import React, { useState, useEffect } from 'react';
import getEventAPI from 'apis/event/getEventAPI';
import { useRecoilValue } from 'recoil';
import { selectedDateAtom } from 'state/atoms';
import { GoogleEventItem } from '../../../../types';
import EventItem from './EventItem';

function ListEvent() {
  const selectedDate = useRecoilValue(selectedDateAtom);
  const [items, setItems] = useState<GoogleEventItem[]>();
  useEffect(() => {
    getEventAPI(selectedDate).then((data) => {
      setItems(data.items as GoogleEventItem[]);
    });
  }, [selectedDate]);
  if (!items) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div />
      {items.length >= 1 ? (
        items.map((item: GoogleEventItem) => (
          <div key={item.id}>
            <EventItem item={item} />
          </div>
        ))
      ) : (
        <div>이벤트가 없습니다</div>
      )}
    </>
  );
}

export default ListEvent;
