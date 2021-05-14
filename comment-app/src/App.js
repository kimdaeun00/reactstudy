import React from 'react';
import CommentTemplate from './components/CommentTemplate';
import CommentInsert from './components/CommentInsert';

const App = () => {
  return (
    <CommentTemplate>
      <CommentInsert />
    </CommentTemplate>
  );
};

export default App;
