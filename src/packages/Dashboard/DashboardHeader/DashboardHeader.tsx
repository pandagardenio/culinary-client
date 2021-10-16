import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './DashboardHeader.css';
import { PropsWithChildren } from 'react';

export type DashboardHeaderProps = PropsWithChildren<{
    open: boolean;
    toggleOpen: () => void;
    section: string;
}>;

export function DashboardHeader({
    open,
    toggleOpen,
    section
}: DashboardHeaderProps) {
    let dashboardHeaderClassName = 'dashboard-header';
    if (open) {
        dashboardHeaderClassName += ' dashboard-header--open';
    }

    return (
        <AppBar className={dashboardHeaderClassName}>
            <Toolbar className="dashboard-header__toolbar">
                <IconButton
                    edge="start"
                    aria-label="open drawer"
                    onClick={toggleOpen}
                    className="dashboard-header__menu-button"
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    noWrap
                    className="dashboard-header__title"
                >
                    {section}
                </Typography>
                <IconButton
                    className="dashboard-header__notification-button"
                >
                    <Badge color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
