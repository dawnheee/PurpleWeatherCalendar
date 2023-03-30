import { styled } from '@mui/material/styles';

export function TitleBox({ text }: { text: string }) {
  return (
    <Section>
      <div>{text}</div>
    </Section>
  );
}

const Section = styled('section')({
  backgroundColor: '#748af8',
  width: '200px',
  borderRadius: '20px',
  color: 'white',
  fontSize: '20px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
