// SlateEditor.stories.js
import React from 'react';
import SlateEditor from '../components/StateEditor';

export default {
  title: 'Atoms/SlateEditor',
  component: SlateEditor,
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Default = {
  args: {
    initialValue: [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text.' }],
      },
    ],
  }
};
