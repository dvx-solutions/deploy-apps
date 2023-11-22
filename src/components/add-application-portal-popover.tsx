"use client";

import {
  createPortalApplication,
  updatePortalApplication,
} from "@/app/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { PortalApp } from "@prisma/client";
import { PlusIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Path, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PortalAppModel } from "@/utils/zod";

const FormSchema = PortalAppModel;

const shape = Object.entries(FormSchema.shape);

type Form = z.infer<typeof FormSchema>;

const labels: Record<keyof Form, string> = {
  image: "Image",
  name: "Name",
  url: "URL",
  tag: "Tag",
  description: "Description",
};

export function AddApplicationPortalPopover({ app }: { app?: PortalApp }) {
  const [isOpen, setIsOpen] = useState(false);

  const isEdition = !!app;
  const form = useForm<Form>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      image: "",
      name: "",
      url: "",
      tag: "",
      description: "",
    },
  });

  const onFormSubmit = form.handleSubmit(async (values) => {
    if (!!app) {
      await updatePortalApplication(app.id, values).then(() =>
        setIsOpen(false)
      );
    } else {
      await createPortalApplication(values).then(() => setIsOpen(false));
    }
  });

  useEffect(() => {
    if (!!app) form.reset({ ...app, url: app.url ?? "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app]);

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) form.reset();
        setIsOpen(open);
      }}
      open={isOpen}
    >
      <DialogTrigger asChild>
        <Button variant={isEdition ? "secondary" : "default"}>
          {isEdition ? (
            <>
              <Pencil1Icon className="mr-2 h-4 w-4" />
              Edit
            </>
          ) : (
            <>
              <PlusIcon className="mr-2 h-4 w-4" />
              Create portal application
            </>
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="md:w-[40rem]">
        <DialogHeader>
          <DialogTitle>
            {isEdition
              ? "Edit portal application"
              : "Create portal application"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="grid gap-4" onSubmit={onFormSubmit}>
            <fieldset className="grid gap-2">
              {shape.map(([name]) => {
                const nameKey = name as keyof Form;
                return (
                  <FormField
                    key={name}
                    control={form.control}
                    name={name as Path<Form>}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{labels[nameKey]}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                );
              })}
            </fieldset>

            <Button
              variant={"secondary"}
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Saving" : "Save"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
