import { Add, SearchNormal } from "iconsax-reactjs";
import { Input } from "../../components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        className="w-[42px] h-[42px] text-background !p-0 flex "
      >
        <Add size={24} />
      </Button>
      <Input
        className="flex-1 text-xs h-[42px]"
        prefix={<SearchNormal size={21} />}
        placeholder="Search Conversation..."
      />
    </div>
  );
};
