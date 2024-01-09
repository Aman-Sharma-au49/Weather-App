import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Cardinfo({ info }){
    const IMG_URL ="https://images.pexels.com/photos/45222/forest-fog-nature-winter-45222.jpeg?cs=srgb&dl=pexels-pixabay-45222.jpg&fm=jpg";
    const HOT_URL ="https://i.pinimg.com/736x/fe/85/88/fe8588d45f8b7e059847b50f08271ba8.jpg";
  

    return(
        <>
        <h2>Weather Information</h2>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.temp < 18 ? IMG_URL : HOT_URL}
          alt="green"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CITY - {info.name} 
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Feel likes :{info.feelLikes}<br/>
            Temperature :{info.temp}&deg;C<br/>
            Minimum Temperature :{info.tempmin}&deg;C<br/>
            Maximum Temperature :{info.tempmax}&deg;C<br/>
            Humidity : {info.humidity}%<br/>
            Pressure : {info.pressure}mb<br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </>
    )
}