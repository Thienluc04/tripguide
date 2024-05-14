"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps extends React.ComponentProps<"div"> {
  classCalendar?: string;
  disabled?: boolean;
  onDateChange?: (date: Date) => void;
  defaultDate?: Date;
}

export function DatePicker({
  className,
  classCalendar,
  disabled,
  onDateChange,
  defaultDate,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (date && onDateChange) {
      onDateChange(date);
    }
  }, [date]);

  React.useEffect(() => {
    if (defaultDate) {
      setDate(defaultDate);
    }
  }, [defaultDate]);

  return (
    <Popover>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            disabled && "cursor-not-allowed opacity-50",
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      {!disabled && (
        <PopoverContent className="w-auto border-grayF3 p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            className={cn("rounded-lg bg-white text-gray8B", classCalendar)}
          />
        </PopoverContent>
      )}
    </Popover>
  );
}
