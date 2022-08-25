import * as React from 'react';
import { TagButton } from '../../styles/component/button';

export default function Tags(props) {
  const { label, onClick } = props;
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
      <TagButton label={label} variant="outlined" onDelete={handleDelete} />
  );
}