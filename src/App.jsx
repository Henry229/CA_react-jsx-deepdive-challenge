import React from 'react';
import Card from './Card';
import Comment from './comment';

const App = () => {
  return (
    // section>article*3>(header>img+p+time)+p
    <section>
      <Comment
        name='Sue Smith'
        date='5/12/2022'
        comment='This is cool!'
        avatar='https://i.pravatar.cc/60?1'
      />
      <Card>
        <Comment
          name='Joe Bloggs'
          date='12/8/2022'
          comment="It's a hot today!"
          avatar='https://i.pravatar.cc/60?2'
        />
      </Card>
      <Comment
        name='Alan Smithee'
        date='5/11/2021'
        comment='This is awesome!'
        avatar='https://i.pravatar.cc/60?3'
      />
    </section>
  );
};

export default App;
