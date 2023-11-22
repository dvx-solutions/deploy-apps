"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { prisma } from "@/utils/prisma";
import { PlusIcon } from "@radix-ui/react-icons";
import { z } from "zod";

import { Environment } from "@prisma/client";
import { Path, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createApplication } from "@/app/actions";

const FormSchema = z.object({
  environment: z.nativeEnum(Environment),
  name: z.string().min(1),
  url: z.string().url(),
});

const shape = Object.entries(FormSchema.shape);

const labels: Record<string, string> = {
  environment: "Environment",
  name: "Name",
  url: "URL",
};

type Form = z.infer<typeof FormSchema>;

export function AddApplicationPopover() {
  const form = useForm<Form>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      environment: "DEV",
      name: "",
      url: "",
    },
  });

  const onFormSubmit = form.handleSubmit(async (values) => {
    await createApplication(values);
  });

  return (
    <Popover
      onOpenChange={(open) => {
        if (!open) form.reset();
      }}
    >
      <PopoverTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Create application
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <Form {...form}>
          <form className="grid gap-4" onSubmit={onFormSubmit}>
            <fieldset className="grid gap-2">
              {shape.map(([name, zodItem]) => {
                const typeName = zodItem._def.typeName;
                if (typeName === "ZodNativeEnum") {
                  const opts = Object.entries(zodItem._def.values);

                  return (
                    <FormField
                      key={name}
                      control={form.control}
                      name="environment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Environment</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              {opts.map((opt) => (
                                <SelectItem key={opt[0]} value={opt[1]}>
                                  {opt[1]}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                }

                return (
                  <FormField
                    key={name}
                    control={form.control}
                    name={name as Path<Form>}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{labels[name]}</FormLabel>
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
              {form.formState.isSubmitting ? "Creating" : "Create"}
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
