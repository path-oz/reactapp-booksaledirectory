import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material';


const options = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'

];

const ITEM_HEIGHT = 48;
// const useStyles = makeStyles((theme) =>({

// }))

export default function DropDown() {
  // const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    if(index === 0) {
        window.location.assign("/state/al")
    } else if (index === 1 ) {
        window.location.assign("/state/ak")
    } else if (index === 2 ) {
        window.location.assign("/state/az")
    } else if (index === 3 ) {
        window.location.assign("/state/ar")
    } else if (index === 4 ) {
        window.location.assign("/state/ca")
    } else if (index === 5 ) {
        window.location.assign("/state/co")
    } else if (index === 6 ) {
        window.location.assign("/state/ct")
    } else if (index === 7 ) {
        window.location.assign("/state/de")
    } else if (index === 8 ) {
        window.location.assign("/state/fl")
    } else if (index === 9 ) {
        window.location.assign("/state/ga")
    } else if (index === 10 ) {
        window.location.assign("/state/hi")
    } else if (index === 11 ) {
        window.location.assign("/state/id")
    } else if (index === 12 ) {
        window.location.assign("/state/il")
    } else if (index === 13 ) {
        window.location.assign("/state/in")
    } else if (index === 14 ) {
        window.location.assign("/state/ia")
    } else if (index === 15 ) {
        window.location.assign("/state/ks")
    } else if (index === 16 ) {
        window.location.assign("/state/ky")
    } else if (index === 17 ) {
        window.location.assign("/state/la")
    } else if (index === 18 ) {
        window.location.assign("/state/me")
    } else if (index === 19 ) {
        window.location.assign("/state/md")
    } else if (index === 20 ) {
        window.location.assign("/state/ma")
    } else if (index === 21 ) {
        window.location.assign("/state/mi")
    } else if (index === 22 ) {
        window.location.assign("/state/mn")
    } else if (index === 23 ) {
        window.location.assign("/state/ms")
    } else if (index === 24 ) {
        window.location.assign("/state/mo")
    } else if (index === 25 ) {
        window.location.assign("/state/mt")
    } else if (index === 26 ) {
        window.location.assign("/state/ne")
    } else if (index === 27 ) {
        window.location.assign("/state/nv")
    } else if (index === 28 ) {
        window.location.assign("/state/nh")
    } else if (index === 29 ) {
        window.location.assign("/state/nj")
    } else if (index === 30 ) {
        window.location.assign("/state/nm")
    } else if (index === 31 ) {
        window.location.assign("/state/ny")
    } else if (index === 32 ) {
        window.location.assign("/state/nc")
    } else if (index === 33 ) {
        window.location.assign("/state/nd")
    } else if (index === 34 ) {
        window.location.assign("/state/oh")
    } else if (index === 35 ) {
        window.location.assign("/state/ok")
    } else if (index === 36 ) {
        window.location.assign("/state/or")
    } else if (index === 37 ) {
        window.location.assign("/state/pa")
    } else if (index === 38 ) {
        window.location.assign("/state/ri")
    } else if (index === 39 ) {
        window.location.assign("/state/sc")
    } else if (index === 40 ) {
        window.location.assign("/state/sd")
    } else if (index === 41 ) {
        window.location.assign("/state/tn")
    } else if (index === 42 ) {
        window.location.assign("/state/tn")
    } else if (index === 43 ) {
        window.location.assign("/state/tx")
    } else if (index === 44 ) {
        window.location.assign("/state/ut")
    } else if (index === 45 ) {
        window.location.assign("/state/vt")
    } else if (index === 46 ) {
        window.location.assign("/state/va")
    } else if (index === 47 ) {
        window.location.assign("/state/vi")
    } else if (index === 48 ) {
        window.location.assign("/state/wa")
    } else if (index === 49 ) {
        window.location.assign("/state/wv")
    } else if (index === 50 ) {
        window.location.assign("/state/wy")    
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
      
      >
        <Button
          variant='contained'
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary= "Choose A State"
          />
        
        </Button>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.8,
            width: '20ch',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
