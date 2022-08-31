import * as React from 'react';
import { TagButton } from '../../styles/component/button';

export default function Tags(props) {
  const { label, onDelete } = props;
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
      <TagButton label={label} variant="outlined" onDelete={() => handleDelete(onDelete)} />
  );
}