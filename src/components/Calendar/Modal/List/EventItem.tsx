import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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
    <Card sx={{ minWidth: 275, marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {item.summary}
        </Typography>
        <Typography variant="body2">
          start {start} AM
          <br />
          end {end} PM
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component="a" href={item.htmlLink} target="_blank">
          more
        </Button>
      </CardActions>
    </Card>
  );
}
