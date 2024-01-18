// SlateEditor.stories.js
import React from 'react';
import SlateEditor from '../components/StateEditor';

export default {
  title: 'Atoms/SlateEditor',
  component: SlateEditor,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <SlateEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ],
};
