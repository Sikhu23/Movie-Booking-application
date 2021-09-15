import { Component } from "react";
import Header from './../../common/header/Header';
import './Home.css';
import moviesData from "../../common/moviesData/moviesData";
// import { ImageListItem } from "@material-ui/core";
// import { ImageListItemBar } from "@material-ui/core";
import SingleLineImageList from '../../common/ImageList/ImageList';
import TitlebarImageList from '../../common/ReleaseList/ReleaseList';

export default class Home extends Component{
    render(){

        return(

            <div>
                <Header/>
                <span className="heading">Upcoming Movies</span>
                
                <SingleLineImageList itemData={moviesData}></SingleLineImageList>
                <TitlebarImageList  itemData={moviesData}></TitlebarImageList>

            </div>



        )




    }
}