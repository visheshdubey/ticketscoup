import UserAvatar from "./avatar";
import { Bell, BellDotIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeaderActions = ({
  hasNotifications,
  isMobile,
}: {
  hasNotifications: boolean;
  isMobile: boolean;
}) => (
  <div className="flex items-center gap-5 md:gap-10">
    <Button
      variant={"primary"}
      size={"default"}
      className="rounded-lg font-satoshi md:flex hidden"
    >
      New <PlusIcon size={16} />
    </Button>
    <div className="hover:cursor-pointer">
      {hasNotifications ? (
        <BellDotIcon size={isMobile ? 17 : 24}>
          <circle
            cx="18"
            cy="8"
            r="3"
            fill="#197BFF"
            stroke="#197BFF"
            className="lucid-bell-dot"
          />
        </BellDotIcon>
      ) : (
        <Bell size={isMobile ? 17 : 24} />
      )}
    </div>
    <div className="flex items-center justify-center hover:cursor-pointer">
      <UserAvatar initials="VM" />
    </div>
  </div>
);

export default HeaderActions;
