import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Option = {
  value: string;
  label: string;
};

type SelectComponentProps = {
  options?: Option[];
  onChange?: (value: string) => void;
  className?: string;
};

export default function SelectComponent({
  options = [] as Option[],
  onChange = () => {},
  className = "w-[300px] text-foreground",
}: SelectComponentProps) {
  const initialOption: string = options.length > 0 ? options[0].value : "";
  const [selectedOption, setSelectedOption] = useState(initialOption);

  const handleChange = (value: string) => {
    setSelectedOption(value);
    if (onChange) onChange(value);
  };

  return (
    <Select
      value={selectedOption}
      onValueChange={handleChange}
      disabled={options.length === 0}
    >
      <SelectTrigger
        className={cn(
          "gap-2 focus:outline-none focus:border-transparent focus:ring-0",
          className
        )}
      >
        <SelectValue placeholder={selectedOption} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(({ value, label }: Option) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
