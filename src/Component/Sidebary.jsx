import { ProSidebarProvider } from "react-pro-sidebar";
import "./style.css"
import Profile from "./Patient/Profile.jsx"
import Patient from "./Patient/Patient.jsx"
import Welcome from "./Patient/Welcome.jsx"
import Medicine from "./Patient/Medicine.jsx"
import Notification from "./Patient/Notification.jsx"
import { BrowserRouter,Link ,Route,Routes} from "react-router-dom";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar  } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AccessibleIcon from '@mui/icons-material/Accessible';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebary = () => {
  const { collapseSidebar } = useProSidebar();
 return (
   <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1"  component={<Link to="/" className="link" />} icon={<MenuRoundedIcon   onClick={() => {
                  collapseSidebar();
                }} />}>
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem  component={<Link to="/patient/Profile" className="link" />} icon={<AssignmentIndIcon />}> Profile </MenuItem>
          <MenuItem  component={<Link to="/patient/Medicine" className="link" />} icon={<VaccinesIcon />}> Medicine </MenuItem>
          <MenuItem component={<Link to="/patient/Patientinfo" className="link" />} icon={<AccessibleIcon />}> Patients </MenuItem>
          <MenuItem icon={<InfoIcon />}> Details </MenuItem>
          <MenuItem icon={<NotificationsRoundedIcon />}> Notifications </MenuItem>
          <MenuItem icon={<MenuRoundedIcon />}> Settings </MenuItem>
          <MenuItem icon={<LogoutIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
     <section>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Patientinfo" element={<Patient />} />
           <Route path="Medicine" element={<Medicine />} />
        </Routes>
      </section>
    </div>

  );
};
export default Sidebary;