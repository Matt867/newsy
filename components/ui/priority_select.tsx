"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React, { useState } from "react";

type Props = {};

enum Priority {
  NA = "NA",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  URGENT = "URGENT",
}

export default function PrioritySelect({}: Props) {
  const [value, setValue] = useState<string>();

  let select_classname = "bg-white";

  switch (value) {
    case Priority.NA:
      select_classname = "bg-white";
      break;
    case Priority.LOW:
      select_classname = "bg-blue-200";
      break;
    case Priority.MEDIUM:
      select_classname = "bg-orange-200";
      break;
    case Priority.HIGH:
      select_classname = "bg-red-200";
      break;
    case Priority.URGENT:
      select_classname = "bg-violet-200";
      break;
  }

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className={select_classname}>
        <SelectValue placeholder="Select Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={Priority.NA}>Select Priority</SelectItem>
        <SelectItem value={Priority.LOW}>Low</SelectItem>
        <SelectItem value={Priority.MEDIUM}>Medium</SelectItem>
        <SelectItem value={Priority.HIGH}>High</SelectItem>
        <SelectItem value={Priority.URGENT}>Urgent</SelectItem>
      </SelectContent>
    </Select>
  );
}
