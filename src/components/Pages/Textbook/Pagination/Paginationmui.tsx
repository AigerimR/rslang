import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';

const Paginationmui: React.FC< {updatePage: (x: number) => void} > = (props) => {
  const [page, setPage] = useState<number>(localStorage.getItem('page') === null ? 0 : +localStorage.getItem('page')!);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value-1);
    // localStorage.setItem('page', `${value-1}`);
  };

  const {updatePage} = props;

  useEffect(() => {
     updatePage(page)
  }, [page]);

  // Using Materil Ui Library
  return (
    <Stack spacing={2}>
      <Pagination count={30} page={page+1} onChange={handleChange} sx = {{margin: '20px auto'}}/>
    </Stack>
  );
}

export default Paginationmui;

