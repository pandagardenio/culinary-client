import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { PropsWithChildren } from 'react';

import './DashboardContent.css';

export type DashboardContentProps = PropsWithChildren<{}>;

export function DashboardContent({ children }: DashboardContentProps) {
    return (
        <Box
            component="main"
            className="dashboard-content"
        >
            <Container className="dashboard-content__container">
                {children}
            </Container>
        </Box>
    )
}
