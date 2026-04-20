'use client';

import { BadgeCheckIcon, LogOutIcon, Mail } from 'lucide-react';
import { SettingIcon } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function initials(input: string) {
  return input
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

interface UserDropDownProps {
  onSignOut: () => void;
  user: {
    name: string;
    image?: string | null;
    email: string;
  };
}

export default function UserDropDown({ onSignOut, user }: UserDropDownProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full focus-visible:outline-primary">
            <Avatar>
              <AvatarImage src={user.image ?? undefined} alt="shadcn" />
              <AvatarFallback>{initials(user.name)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white border border-neutral-200 rounded-lg shadow-sm">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeCheckIcon />
              {user.name}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Mail />
              {user.email}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingIcon />
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={onSignOut}>
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
