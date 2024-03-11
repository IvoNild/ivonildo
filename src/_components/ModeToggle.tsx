"use client";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ModeToglle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="sm" className="h-6 w-6 px-0 ml-2 relative">
        <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      className="cursor-pointer text-sm dark:bg-gray-900  bg-gray-200 p-2 rounded mt-2  me-2"
    >
      <DropdownMenuItem className=" hover:bg-gray-100  dark:hover:bg-gray-600 px-2 py-1 rounded-sm" onSelect={() => setTheme("light")}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem className="hover:bg-gray-100  dark:hover:bg-gray-600  px-2 py-1 rounded-sm" onSelect={() => setTheme("dark")}>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem className="hover:bg-gray-100  dark:hover:bg-gray-600  px-2 py-1 rounded-sm" onSelect={() => setTheme("system")}>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  );
}
