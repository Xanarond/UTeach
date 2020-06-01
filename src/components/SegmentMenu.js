import React from 'react';
import { Button, Segment, Text } from 'native-base';

export default function SegmentMenu() {
  return (
    <Segment>
      <Button first active>
        <Text>Абонемент</Text>
      </Button>
      <Button>
        <Text>Пробные</Text>
      </Button>
      <Button last>
        <Text>Первое занятие</Text>
      </Button>
    </Segment>
  );
}
