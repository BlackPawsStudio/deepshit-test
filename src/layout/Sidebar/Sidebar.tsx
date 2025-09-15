import logo from "../../assets/logo.svg";
import toggle from "../../assets/icons/Sidebar.svg";
import { Navigation } from "./Navigation";
import { Conversations } from "./Conversations";
import { SearchBar } from "./SearchBar";
import { AuthSection } from "./AuthSection";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  return (
    <aside className="w-[280px] h-screen bg-sidebar-bg px-4 pt-6 pb-8 text-foreground flex flex-col justify-between backdrop-blur-[100px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-gradient pb-5">
            <div className="flex gap-1.5">
              <img src={logo} alt="logo" className="h-fit" />
              <div>
                <h1 className="text-lg text-accent leading-none tracking-wide">
                  Deep<span className="text-primary">er</span>shi
                </h1>
                <p className="text-sm text-[10px]">by Deepshi Ai</p>
              </div>
            </div>
            <Button variant="ghost" className="p-0 h-fit">
              <img src={toggle} alt="toggle" />
            </Button>
          </div>
          <SearchBar />
        </div>
        <Navigation />
        <Conversations />
      </div>
      <AuthSection />
    </aside>
  );
};
