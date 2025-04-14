"use client";
import { MoonIcon, SunMediumIcon } from "lucide-react";
import * as React from "react";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

const SwitchCustomization = () => {
  const { setTheme, theme } = useTheme();

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Switch
      icon={
        isDarkMode ? (
          <MoonIcon className="h-4 w-4" />
        ) : (
          <SunMediumIcon className="h-4 w-4" />
        )
      }
      checked={isDarkMode}
      onCheckedChange={handleToggle}
      className="h-7 w-12"
      thumbClassName="h-6 w-6 data-[state=checked]:translate-x-5"
    />
  );
};

export default SwitchCustomization;