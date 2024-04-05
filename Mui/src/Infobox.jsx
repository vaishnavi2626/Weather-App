import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './Infobox.css'
export default function Infobox({info}){
    const Int_URl="https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG91dGRvb3J8ZW58MHx8MHx8fDA%3D";
    const Hot_Url="https://media.istockphoto.com/id/540761642/photo/thermometer-sun-40-degres-hot-summer-day-high-summer-temperatures.webp?b=1&s=170667a&w=0&k=20&c=RfSoqmPqAg61ZTQc6UdcwFA717gXL5Buk8F4Z_4t6Pw=";
    const Rain_URl="https://images.unsplash.com/photo-1565065524861-0be4646f450b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55fGVufDB8fDB8fHww";
    const Cold_URl="https://plus.unsplash.com/premium_photo-1675276116240-51a71b0a8524?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    
    return(
     <div className="Infobox">
      {/* <h2>Weather_Info:{info.weather}</h2> */}
      <div className="Infobox1">
      <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?Rain_URl:info.temp>15?Hot_Url:Cold_URl}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"}>
         <div>Temperature={info.temp}&deg;C</div>
         <div>Humidity={info.humidity}&deg;C</div>
         <div>Min Temp={info.tempMin}&deg;C</div>
         <div>Max Temp={info.tempMax}&deg;C</div>
         <div>Weather can be described as {info.weather} And Weather feels like {info.feelslike}&deg;C</div>
        
          </Typography>
         </CardContent>
       </Card>
       </div>
     </div>
    );
}