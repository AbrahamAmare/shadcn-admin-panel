import {
  Bell,
  GlobeLock,
  Inbox,
  LayoutDashboard,
  MemoryStick,
  Percent,
  ReceiptText,
  ScanLine,
  Settings,
  User
} from "lucide-react";
import { MenuType } from "@/types/menu";

export const menuList: MenuType[] = [
  {
    group: "General",
    items: [
      {
        link: "/",
        text: "Dashboard",
        icon: <LayoutDashboard size={20} />,
      },
      {
        link: "/customers",
        text: "Customers",
        icon: <User size={20} />,
        options: [
          {
            link: "/new",
            text: "New Customers",
          },
          {
            link: "/customers/customer-orders",
            text: "Customer Orders",
          },
        ],
      },
      {
        link: "/orders",
        text: "Orders",
        icon: <ScanLine size={20} />,
        options: [
          {
            link: "/list",
            text: "Orders List",
          },
          {
            link: "/order-history",
            text: "Order Analytics",
          },
        ],
      },
      {
        link: "/sales",
        text: "Sales",
        icon: <Percent size={20} />,
        options: [
          {
            text: "Sales List",
            link: "/sales-list",
          },
          {
            text: "Sales Analytics",
            link: "/sale-analytics",
          },
        ],
      },
      {
        link: "/billing",
        text: "Billing",
        icon: <ReceiptText size={20} />,
      },
      {
        link: "/inbox",
        text: "Inbox",
        icon: <Inbox size={20} />,
      },
      {
        link: "/notifications",
        text: "Notifications",
        icon: <Bell size={20} />,
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        link: "/general-settings",
        text: "General Settings",
        icon: <Settings size={20} />,
      },
      {
        link: "/privacy",
        text: "Privacy",
        icon: <GlobeLock size={20} />,
      },
      {
        link: "/logs",
        text: "Logs",
        icon: <MemoryStick size={20} />,
        options: [
          {
            text: "Activity Logs",
            link: "/activity-logs",
          },
          {
            text: "Error Logs",
            link: "/error-logs",
          },
        ],
      },
    ],
  },
];
