import {useDispatch,useSelector} from 'react-redux';
import { Badge, IconButton } from "@mui/material";
import{
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {shades} from "../../theme"
import './Nav.css';

const Navbar=()=>{
    const navigate=useNavigate();
    const handleclick=()=>{
          // Use the navigate function to navigate to a different route
        navigate('/');
    };
    return <nav>
        <div className='container'>
        <div className='Nav_logo'onClick={handleclick}   style={{cursor: 'pointer',
        }}>CB</div>
        <div className='Nav_buttons'>
        <IconButton >
            <SearchOutlined/>
        </IconButton>
        <IconButton >
            <PersonOutline/>
        </IconButton>
        <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
        <IconButton style={{color:"black"}}>
            <MenuOutlined/>
        </IconButton>
        </div>
        </div>
    </nav>
};
export default Navbar;
