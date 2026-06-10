
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
export default function SearchBox() {
    return (
        <div className="search-box"> 
            <h3>Search for the weather</h3>
            <form>
                <TextField 
                    id="outlined-basic" 
                    label="City Name" 
                    variant="outlined" required
                />
                <br></br>
                <br></br>
                 <Button variant="contained" type = "submit"> Search </Button>
                

            </form>
        </div>
    );
}
