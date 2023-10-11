import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

export default function OwnerSelect({}: Props) {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an owner" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="unclaimed">Unclaimed</SelectItem>
        <SelectItem value="john_smith">John Smith</SelectItem>
      </SelectContent>
    </Select>
  );
}
