import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FC, useEffect, useState } from 'react';
import classes from "./Pagination.module.scss";

const Paginationmui: React.FC< {updatePage: (x: number) => number} > = (props) => {
  const [page, setPage] = useState<number>(0);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value-1);
  };

  const {updatePage} = props;

  useEffect(() => {
     updatePage(page)
  }, [page]);

  return (
    <Stack spacing={2}>
      <Pagination count={30} page={page+1} onChange={handleChange} sx={{margin: "40px auto"}}/>
    </Stack>
  );
}

export default Paginationmui;

