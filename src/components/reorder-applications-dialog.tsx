"use client";

import { reorderApplications } from "@/app/actions";
import { PortalApp } from "@prisma/client";
import { MoveIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import update from "immutability-helper";
import { useCallback, useEffect, useState } from "react";
import { useDrop } from "react-dnd";

import { DraggableApp } from "@/components/draggable-app";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DraggableTypes } from "@/utils/drag";

export function ReorderApplicationsDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState<PortalApp[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["portal-apps"],
    queryFn: () => fetch("/api/portal-apps").then((r) => r.json()),
  });

  const findCard = useCallback(
    (id: number) => {
      const card = cards.filter((c) => c.id === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (id: number, atIndex: number) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );

  const [, drop] = useDrop(() => ({ accept: DraggableTypes.APP }));

  const handleSave = async () => {
    setLoading(true);

    await reorderApplications(
      cards.map((x, index) => ({ id: x.id, sequence: index + 1 }))
    )
      .then(() => setOpen(false))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (data) setCards(data);
  }, [data]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <MoveIcon className="mr-2 h-4 w-4" />
          Reorder applications
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reorder applications</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          "Fetching apps"
        ) : (
          <div ref={drop} className="grid gap-4">
            {cards.map((card) => (
              <DraggableApp
                key={card.id}
                id={card.id}
                name={card.name}
                moveCard={moveCard}
                findCard={findCard}
              />
            ))}
          </div>
        )}

        <DialogFooter>
          <Button type="button" onClick={handleSave} disabled={loading}>
            {loading ? "Saving" : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
