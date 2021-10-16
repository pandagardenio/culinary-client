import { Container } from "@pandagardenio/bamsa/Container";
import React, { PropsWithChildren } from "react";

export type SidebarProps = PropsWithChildren<{}>;

export function Sidebar({
    children
}: SidebarProps): JSX.Element {
    return (
        <aside>
            <Container>
                {children}
            </Container>
        </aside>
    );
};