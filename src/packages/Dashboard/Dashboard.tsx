import { PropsWithChildren, useState } from 'react';

import Box from '@mui/material/Box';

import { DashboardContent } from './DashboardContent';
import { DashboardHeader } from './DashboardHeader';
import { DashboardSidebar } from './DashboardSidebar';

import './Dashboard.css';

export type DashboardProps = PropsWithChildren<{}>;

export function Dashboard({ children }: DashboardProps) {
    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <Box className='dashboard'>
            <DashboardHeader open={open} toggleOpen={toggleOpen} section="Hola"/>
            <DashboardSidebar
                open={open}
                toggleOpen={toggleOpen}
            />
            <DashboardContent>
                {children}
            </DashboardContent>
        </Box>
    );
}
