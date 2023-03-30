import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GoogleEventItem } from '../../../../types';
import 'dayjs/locale/ko';
import { convertDateForm } from '../../utils';

type Props = {
  item: GoogleEventItem;
};

export default function EventItem({ item }: Props) {
  const start = convertDateForm(item.start.dateTime);
  const end = convertDateForm(item.end.dateTime);
  return (
    <Card
      sx={{ width: 275, minHeight: 100, marginBottom: '10px' }}
      onClick={() => {
        window.open(item.htmlLink, '_blank');
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          fontSize="22px"
          sx={{ display: 'inline-block', width: '100%' }}
        >
          {item.summary}
        </Typography>
        <Typography variant="body2" fontSize="15px">
          start {start}
          <br />
          end {end}
        </Typography>
      </CardContent>
    </Card>
  );
}
