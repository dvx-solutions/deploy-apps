"use client";

import { deletePortalApplication } from "@/app/actions";
import { Trash } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DeletePortalApplicationPopover({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await deletePortalApplication(id)
      .then(() => setIsOpen(false))
      .finally(() => setIsLoading(false));
  };

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button variant="destructive">
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80 flex flex-col gap-4">
        <h1 className="text-lg font-semibold">
          Do you really want to delete this application?
        </h1>

        <div className="flex justify-end gap-2">
          <Button
            disabled={isLoading}
            onClick={handleDelete}
            variant="destructive"
          >
            {isLoading ? "Deleting" : "Delete"}
          </Button>
          <Button
            disabled={isLoading}
            onClick={() => setIsOpen(false)}
            variant="secondary"
          >
            Cancel
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
