import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { PropsWithChildren } from 'react';

import { Link, useMatch } from "react-router-dom";

export type DashboardSidebarItemProps = PropsWithChildren<{
    section: string;
    to: string;
}>

function DashboardSidebarItem({
    children,
    section,
    to
}: DashboardSidebarItemProps) {
    const selected = !!useMatch(to);
    return (
        <ListItemButton selected={selected} component={Link} to={to}>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText primary={section} />
        </ListItemButton>
    )
}

export default DashboardSidebarItem;
