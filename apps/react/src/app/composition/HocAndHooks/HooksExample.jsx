import React from "react";
import { MyService } from "./MyService";

export function HooksExample() {
  const [myValue, setMyValue] = React.useState('');

  const helperFunction = React.useCallback((newValue) => {
    setMyValue(newValue + '(This is from HookExample)');
  }, [setMyValue]);

  // This could probably be injected by a seperate hook for better composition
  const thisService = React.useMemo(() => new MyService());

  return [thisService, helperFunction, myValue];
}
