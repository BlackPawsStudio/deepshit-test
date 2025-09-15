// import logo from "../assets/logo.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// const models = [
//   {
//     label: (
//       <div className="flex items-end gap-2 text-foreground">
//         <img src={logo} className="w-5 h-5" />
//         <span className="text-sm">Deepershit</span>
//       </div>
//     ),
//     value: "model1",
//   },
// ];

export const Chat = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between py-5 px-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
