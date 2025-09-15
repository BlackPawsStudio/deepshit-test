import { Button } from "../../components/Button";
import { Add, SearchNormal } from "iconsax-reactjs";
import { Input } from "../../components/Input";

export const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="accent"
        className="w-[42px] h-[42px] shrink-0 justify-center"
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
