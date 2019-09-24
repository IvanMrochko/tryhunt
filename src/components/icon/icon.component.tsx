import * as React from "react";
import { IconProps } from "./icon.props";
import {
  Add,
  Pencil,
  Edit,
  Bell,
  Upload,
  Settings,
  Save,
  Update,
  Download,
  Delete,
  MenuApplications,
  MenuDashboard,
  MenuSettings,
  Mute,
  Unmute,
  ArrowRight,
  Location,
  ArrowDown,
  ArrowLeft,
  Logout,
  Cross,
  Checkmark,
  Pulse,
  Email,
  Research,
  Comment,
  Pending,
  PaginationLeft,
  ChangeRole,
  Calendar,
  PaginationRight,
  FileTypeDoc,
  LinkedIn,
  Twitter
} from "./svgs";

const icons = {
  add: Add,
  pencil: Pencil,
  edit: Edit,
  bell: Bell,
  download: Download,
  save: Save,
  settings: Settings,
  upload: Upload,
  update: Update,
  delete: Delete,
  menuApps: MenuApplications,
  menuDashboard: MenuDashboard,
  menuSettings: MenuSettings,
  changeRole: ChangeRole,
  arrowRight: ArrowRight,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  logout: Logout,
  cross: Cross,
  checkmark: Checkmark,
  pulse: Pulse,
  email: Email,
  mute: Mute,
  unmute: Unmute,
  location: Location,
  research: Research,
  pending: Pending,
  comment: Comment,
  paginationLeft: PaginationLeft,
  paginationRight: PaginationRight,
  fileTypeDoc: FileTypeDoc,
  twitter: Twitter,
  linkedIn: LinkedIn,
  calendar: Calendar,
};

const Icon = React.memo<IconProps & { name: keyof typeof icons }>(props => {
  const SpecificIcon = icons[props.name];
  if (SpecificIcon) {
    return <SpecificIcon {...props} />;
  } else {
    console.warn(`There is no icon for ${props.name}`);
    return null;
  }
});

export { Icon };
