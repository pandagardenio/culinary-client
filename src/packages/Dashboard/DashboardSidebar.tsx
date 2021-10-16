import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

import DashboardSidebarItem from './DashboardSidebarItem';

import './DashboardSidebar.css';

export type DashboardSidebarProps = {
    open: boolean;
    toggleOpen: () => void;
}

export function DashboardSidebar({
    open,
    toggleOpen
}: DashboardSidebarProps): JSX.Element {
    let dashboardSidebarClassName = 'dashboard-sidebar';
    if (open) {
        dashboardSidebarClassName += ' dashboard-sidebar--open';
    }

    return (
        <Drawer className={dashboardSidebarClassName} variant="permanent" open={open}>
            <Toolbar
                className="dashboard-sidebar__toolbar"
            >
                <IconButton onClick={toggleOpen}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <DashboardSidebarItem
                    section="Recipes"
                    to="/recipes"
                >
                    <DashboardIcon />
                </DashboardSidebarItem>
            </List>
        </Drawer>
    )
}
