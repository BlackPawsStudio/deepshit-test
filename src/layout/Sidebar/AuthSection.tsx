import { Button } from "../../components/Button";

const isSignedIn = true;

export const AuthSection = () => {
  if (isSignedIn) {
    return (
      <div className="flex gap-4 items-center">
        <div className="w-[45px] h-[45px] bg-primary rounded-full flex items-center justify-center text-background text-sm text-xl">
          AS
        </div>
        <div className="flex flex-col gap-1">
          <p className="tracking-wide leading-5 text-white">Adeleke Sherifah</p>
          <p className="text-sm tracking-wider leading-4 text-muted-foreground">
            Free
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="accent"
        className="bg-white text-background justify-center py-3"
      >
        Get started
      </Button>
      <Button variant="outline" className="justify-center py-3">
        Sign In
      </Button>
    </div>
  );
};
