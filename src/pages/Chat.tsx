import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ghost from "../assets/icons/ghost.svg";
import { Textarea } from "@/components/ui/textarea";
import paperclip from "../assets/icons/paperclip.svg";
import mic from "../assets/icons/mic.svg";
import arrowUp from "../assets/icons/arrow-up.svg";

const models = [
  {
    label: (
      <div className="flex items-start gap-2 text-light-gold">
        <img src={logo} className="w-5 h-5" />
        <span className="text-sm">Deepershit</span>
      </div>
    ),
    value: "model1",
  },
];

const messageExamples = [
  "Explain quantum computing",
  "Debug my react code",
  "Write a poem about AI",
  "Plan a workout routine",
];

export const Chat = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between py-5.5 px-6">
        <Select>
          <SelectTrigger className="border-0 px-0 w-fit">
            <SelectValue placeholder={models[0].label} />
          </SelectTrigger>
          <SelectContent className="bg-background">
            {models.map((model) => (
              <SelectItem
                key={model.value}
                value={model.value}
                className="bg-background button-shadow-border"
              >
                {model.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          className="text-base tracking-wide text-light-gold p-0"
        >
          <img src={ghost} className="w-5 h-5" />
          Ghost mode
        </Button>
      </div>
      <div className="w-full flex flex-col gap-4 max-w-[736px] mx-auto relative top-40">
        <div className="flex flex-col gap-3 items-center mb-10">
          <div className="text-foreground flex items-center gap-4 tracking-wide">
            <span>{"{"}</span>
            YOUR PRIVATE ASSISTANCE WITH FREEDOM
            <span>{"}"}</span>
          </div>
          <h2 className="text-light-gold font-bold text-5xl tracking-wide">
            How can I help you today?
          </h2>
        </div>
        <div className="w-full textarea-shadow-border rounded-2xl mx-2 my-1.5 p-4">
          <Textarea
            placeholder="Ask me anything..."
            className="p-0 text-base focus-visible:ring-0 border-0 text-foreground resize-none max-h-[120px] mb-4.5"
          />
          <div className="w-full flex items-center justify-between">
            <Button
              variant="ghost"
              className="button-shadow-border w-[38px] h-[38px] p-0"
            >
              <img src={paperclip} className="w-[18px] h-[18px]" />
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="w-[38px] h-[38px] p-0">
                <img src={mic} className="w-[18px] h-[18px]" />
              </Button>
              <Button className=" w-[38px] h-[38px] p-0 bg-primary">
                <img src={arrowUp} className="w-[18px] h-[18px]" />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto fade-right">
          <div className="flex items-center gap-2">
            {messageExamples.map((el) => (
              <Button
                variant="ghost"
                className="text-sm tracking-wide text-light-gold px-3 py-2 rounded-full button-shadow-border"
              >
                {el}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
