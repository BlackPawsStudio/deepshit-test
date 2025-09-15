import { useState } from "react";
import {
  alarmClock,
  audioLines,
  fileText,
  folder,
  messagesSquare,
  user,
} from "../../assets/icons/sidebar";
import { Button } from "../../components/Button";
import { cn } from "../../lib/utils";

interface SidebarNavigationItem {
  icon: string;
  label: string;
  href: string;
}

const sidebarNavigation: SidebarNavigationItem[] = [
  {
    icon: messagesSquare,
    label: "Chat",
    href: "/",
  },
  {
    icon: user,
    label: "Characters",
    href: "/",
  },
  {
    icon: audioLines,
    label: "Voice",
    href: "/",
  },
  {
    icon: fileText,
    label: "Files",
    href: "/",
  },
  {
    icon: alarmClock,
    label: "Tasks",
    href: "/",
  },
  {
    icon: folder,
    label: "Projects",
    href: "/",
  },
];

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState<string>("Chat");

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <div className="flex flex-col gap-3">
      {sidebarNavigation.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          onClick={() => handleItemClick(item.label)}
          className={cn(
            "w-full px-3 py-2.5 justify-start gap-3 transition-all duration-200",
            activeItem === item.label && "button-shadow-border"
          )}
        >
          <img src={item.icon} alt={item.label} className="w-5 h-5" />
          <span className="text-sm">{item.label}</span>
        </Button>
      ))}
    </div>
  );
};
