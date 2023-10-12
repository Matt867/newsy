"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

enum Status {
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  BLOCKED = "blocked",
  CLOSED = "closed",
}

export default function ProgressSelect({}: Props) {
  const [value, setValue] = useState<string>();

  let select_classname = "bg-white";

  switch (value) {
    case Status.OPEN:
      select_classname = "bg-white";
      break;
    case Status.BLOCKED:
      select_classname = "bg-yellow-200";
      break;
    case Status.IN_PROGRESS:
      select_classname = "bg-green-200";
      break;
    case Status.CLOSED:
      select_classname = "bg-neutral-200";
      break;
  }

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className={select_classname}>
        <SelectValue placeholder="Open" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={Status.OPEN}>Open</SelectItem>
        <SelectItem value={Status.IN_PROGRESS}>In Progress</SelectItem>
        <SelectItem value={Status.BLOCKED}>Blocked</SelectItem>
        <SelectItem value={Status.CLOSED}>Closed</SelectItem>
      </SelectContent>
    </Select>
  );
}
