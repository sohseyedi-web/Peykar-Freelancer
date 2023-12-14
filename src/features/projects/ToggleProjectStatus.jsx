import { Switch } from "@headlessui/react";
import React from "react";
import { useToggleProjectStatus } from "./useToggleProjectStatus";

const ToggleProjectStatus = ({ project }) => {
  const enabled = project?.status === "OPEN" ? true : false;
  const { isUpdating, changeProjectStatus } = useToggleProjectStatus();
  const toggleHandler = async () => {
    const status = project?.status === "OPEN" ? "CLOSED" : "OPEN";
    await changeProjectStatus({ id: project?._id, data: { status } });
  };

  return (
    <td>
      <div className="w-[5rem]">
        {isUpdating ? (
          "..."
        ) : (
          <Switch.Group>
            <div className="flex items-center gap-x-2">
              <Switch.Label>
                {project?.status === "OPEN" ? "باز" : "بسته"}
              </Switch.Label>
              <Switch
                checked={enabled}
                onChange={toggleHandler}
                className={`${
                  enabled ? "bg-blue-900" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    enabled ? "-translate-x-1" : "-translate-x-6"
                  } inline-block h-4 w-4 transform rounded-full bg-slate-900 transition-transform`}
                />
              </Switch>
            </div>
          </Switch.Group>
        )}
      </div>
    </td>
  );
};

export default ToggleProjectStatus;
