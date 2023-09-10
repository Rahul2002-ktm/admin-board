import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";


const sidebar = () => {
   

  return (
    <div className= "sidebar">
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Mind Matrix </span>
        </Link>
      </div>
      <hr/>
      <div className="centre">
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
                <AccountCircleIcon className="icon"/>
                <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
                <InventoryIcon className="icon"/>
                <span>Products</span>
            </li>
            </Link>
            <li>
                <LocalShippingIcon className="icon"/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <AssessmentIcon className="icon"/>
                <span>Statistics</span>
            </li>
            <li>
                <NotificationsActiveIcon className="icon"/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <HealthAndSafetyIcon className="icon"/>
                <span>System Health</span>
            </li>
            <li>
                <PsychologyIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USERS</p>
            <li>
                <AccountCircleOutlinedIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className="icon"/>
                <span>Log out</span>
            </li>
        </ul>
      </div>
      
    </div>
  )
}

export default sidebar
