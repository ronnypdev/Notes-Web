'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
} from '@/components/ui/sidebar';
import Logo from '@/components/Logo/Logo';
import NavigationLinkRoutes from '../NavigationLinkRoutes';

export default function LeftSideBar() {
  return (
    <>
      <Sidebar side="left">
        <SidebarHeader className="border-b border-neutral-200">
          <div className="py-3 px-4 my-3">
            <Logo />
          </div>
          <NavigationLinkRoutes />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup></SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-neutral-950 bg-neutral-100 font-sans text-sm font-medium leading-[1.2] tracking-[-0.2px]">
          A place to keep all your notes organized
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
