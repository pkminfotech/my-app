import React, {Component} from "react";
import Button from '@mui/material/Button';

class App extends Component {
    render(){
        return (
            <>
             <h1>Hello prakash</h1>
            <Button>Click Me</Button>
            <Button href="https://www.pkminfotech.com" color="secondary">Go to pkm infotech</Button>
            <Button disabled > Hide</Button>
            <Button variant="contained" >Back </Button>

            </>
           
        )

    }
}



export default App;