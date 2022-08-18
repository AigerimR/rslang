import { TWord } from "../../@types/words";
import React, { FC, useEffect, useState } from "react";
import { getWord } from "../../apiHelpers/words/wordsController";
// import usePromise from "react-promise";
import classes from "./WordCard.module.scss"
// import { Button, Card, CardActions, CardContent, Collapse, Typography } from "@mui/material";
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const WordCard: FC = () => {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let [data, setData] = useState<TWord>();
  let id = '5e9f5ee35eb9e72bc21af4a0';
  useEffect(()=>{getData(id)}, []);

  const getData = async (id) => {
    const res = await getWord(id);
    setData(res);
  }
  if(data === undefined){
    return  <div>
    </div>
  }
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <VolumeUpIcon />
          </IconButton>
        }
        title={data.word}
        subheader={data.wordTranslate}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="share">
          <RemoveIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {data.transcription}
      </Typography>
        <CardMedia
        component="img"
        height="100"
        image={data.image}
        alt="image here"
      />
          <Typography paragraph>
          {data.textExample}
          </Typography>
          <Typography paragraph>
          {data.textExampleTranslate}
          </Typography>
          <Typography paragraph>
          {data.textMeaning}
          </Typography>
          <Typography>
          {data.textMeaningTranslate}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



// const WordCard: FC = () => {
//   let [data, setData] = useState<TWord>();
//   let id = '5e9f5ee35eb9e72bc21af4a0';
//   useEffect(()=>{getData(id)}, []);

//   const getData = async (id) => {
//     const res = await getWord(id);
//     setData(res);
//     // return res;
//   }
//   const wordEx = (
//     <><h6>{data.textExample}</h6><p>{data.textExampleTranslate}</p><h6>{data.textMeaning}</h6><p>{data.textMeaningTranslate}</p></>
//   );
//   if(data === undefined){
//     return  <div>
//     </div>
//   }
//   return (
//     <Card sx={{ maxWidth: 300, "&:hover": { backgroundColor: "black" },}}>
//       <CardContent>
//         <Typography variant="h5" component="div">
//         {data.word}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         {data.wordTranslate}
//         </Typography>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           {data.transcription}
//           </Typography>
//           <Typography variant="body2">
//             well meaning and kindly.
//             <br />
//             {'"a benevolent smile"'}
//           </Typography>
//           </Collapse>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Learn More</Button>
//             <Button size="small">Learn More</Button>
//           </CardActions>
        
//     </Card>


//   );
// }

export default WordCard;