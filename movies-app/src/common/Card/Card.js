import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Checkbox, FormControl,FormControlLabel, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import genres from '../Genre/genre'; 
import artists from '../Artists/artists';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:240,
        minWidth:240,
        margin:theme.spacing(),
        padding:theme.spacing(),
        
        
      
    },
    root1: {
       
        margin:theme.spacing(),
        padding:theme.spacing(),
        
        
      
    },
    
    component: {
      color:theme.palette.primary.light,
      margin:theme.spacing(),
    },
    regular: {
        margin:theme.spacing(),
    },
  }));
  
export default function SimpleCard() {
  const classes = useStyles();
  
//   const [Name, setName] = useState([]);

    // const handleChange = (event) => {
    //     setName(event.target.value);
    // };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.root1}>
        <Typography className={classes.component}>
            FIND MOVIES BY:
        </Typography>
        
        <FormControl fullWidth className={classes.regular} >
            
            <InputLabel htmlFor="my-input">Movie Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            
        </FormControl>

        <FormControl  fullWidth className={classes.regular}>
        <InputLabel>Genre</InputLabel>
            <Select  >
                
                {genres.map(genre=>{return(<MenuItem key={genre.id} >
                    <FormControlLabel control={<Checkbox  />} label={genre.name} />
                </MenuItem>)})}
            </Select>
        </FormControl>

        <FormControl  fullWidth className={classes.regular}>
        <InputLabel >Artist</InputLabel>
            <Select  >
                
                {artists.map(genre=>{return(<MenuItem  key={genre.id} >
                    
                    <FormControlLabel control={<Checkbox  />} label={genre.first_name + genre.last_name} />
                    </MenuItem>)})}
            </Select>
        </FormControl>

        
        
         <FormControl  fullWidth className={classes.regular}>
            <TextField
                id="date"
                label="Release Date Start"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                            }}
            />
            </FormControl>
                
            <FormControl  fullWidth className={classes.regular}>
                <TextField
                            id="date"
                            label="Release Date End"
                            type="date"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                />
            </FormControl>

            <FormControl fullWidth className={classes.regular}>
            <Button variant="contained" color="primary" >Apply</Button>
            </FormControl>

            
               


        
        
        
       
        


      </CardContent>
      <CardActions style={{alignItems:"center"}}>
      
        
      </CardActions>
    </Card>
  );
}
