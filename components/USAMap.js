 /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import { Component } from 'react';
import { Style } from '@mui/icons-material';

class USAMaps extends Component {
    /* mandatory */
    mapHandler = (event) => {
      console.log(event.target.dataset.name)
    };
    
    statesCustomConfig = () => {
      return {
        "NJ": {
        
          clickHandler: (event) => window.location.assign("/newjersey") 
        },
        "NY": {
          
          clickHandler: (event) => window.location.assign("/newyork")
        }
      };
    };

    render() {
      return (
        <div>
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
        </div>
      );
    }
  }


 
export default USAMaps;