import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

export default function SizeSelect({}: Props) {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Size" />
      </SelectTrigger>
      <SelectContent defaultValue={"na"}>
        <SelectItem value="na">Size</SelectItem>
        <SelectItem value="xs">Extra Small</SelectItem>
        <SelectItem value="s">Small</SelectItem>
        <SelectItem value="md">Medium</SelectItem>
        <SelectItem value="lg">Large</SelectItem>
        <SelectItem value="xl">Extra Large</SelectItem>
      </SelectContent>
    </Select>
  );
}
