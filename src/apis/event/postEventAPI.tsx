import { EventInstance } from 'apis/Eventinstance';
import { Event } from '../../types';

function postEventAPI(body: Event) {
  EventInstance.post(`/`, body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default postEventAPI;
