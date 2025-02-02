import type { ComponentType } from "react";

export type CardInfo = {
  title: string;
  value: string;
  growth: string;
};

export interface WidgetCardProps {
  info: CardInfo;
}

export type LogoType = string | ComponentType<{ size?: number }>;

export type PageKey = "overview" | "tickets" | "clients" | "staff" | "notifications";
