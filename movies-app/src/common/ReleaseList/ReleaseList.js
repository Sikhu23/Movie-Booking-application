import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
// import ListSubheader from '@material-ui/core/ListSubheader';
import "./../ReleaseList/ReleaseList.css";
import SimpleCard from "../Card/Card";

// import moviesData from '../moviesData/moviesData';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',

//     backgroundColor: theme.palette.background.paper,
//   }
// }));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * import SimpleCard from './../Card/Card';
[etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarImageList(props) {
  //   const classes = useStyles();

  return (
    <div className="flex-container">
      <div className="left">
        {props.itemData.map((item) => (
          <ImageList>
            <ImageListItem
              key={item.poster_url}
              style={{ height: "350",width:'200px', margin: "16px" ,cursor:'pointer'}}
            >
              <img src={item.poster_url} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                
                subtitle={<span>Release Date: {item.release_date}</span>}
              />
            </ImageListItem>
          </ImageList>
        ))}
      </div>
      <div className="right">
        <SimpleCard></SimpleCard>
      </div>
    
    
    </div>
  );
}
