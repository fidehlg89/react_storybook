import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

// eslint-disable-next-line react/prop-types
const SlateEditor = ({ initialValue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  // Initial value: an array of objects, each representing a node
  const [value, setValue] = useState(initialValue);

  return (
    <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
      <Editable />
    </Slate>
  );
};

export default SlateEditor;
