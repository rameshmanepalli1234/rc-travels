import { IconType } from "react-icons";

export interface ProcessItem {
  title: string;
  description: string;
  Icon: IconType;
  id: number;
}

export interface ProcessCardProps {
  item: ProcessItem;
}
