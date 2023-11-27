"use client";

import { Application, Environment } from "@prisma/client";
import { DoubleArrowUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function AppsForm({
  apps,
  enviroment,
}: {
  apps: Array<Application>;
  enviroment: Environment;
}) {
  const [selected, setSelected] = useState<Array<string>>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    } else {
      setSelected(selected.filter((s) => s !== e.target.value));
    }
  };

  const handleSelectAll = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      apps.forEach((app) => {
        setSelected((curr) => {
          if (curr.includes(app.url)) {
            return curr;
          }
          return [...curr, app.url];
        });
      });
    } else {
      setSelected([]);
    }
  };

  const handleDeployRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    selected.forEach((app) => {
      fetch(app);
    });
  };

  return (
    <form onSubmit={handleDeployRequest} className="grid text-lg gap-4">
      <h2 className="uppercase text-center text-primary font-semibold text-xl">
        {enviroment}
      </h2>

      <Separator />

      <label className="flex items-center justify-start gap-2 select-none">
        <input
          name={`all-${enviroment}`}
          onChange={handleSelectAll}
          type="checkbox"
          className="h-6 w-6"
        />
        Todos
      </label>

      {apps
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((app) => {
          const id = `${app.name.toLocaleLowerCase()}-${enviroment}`;
          return (
            <label
              key={app.url}
              htmlFor={id}
              className="flex items-center justify-start gap-2 select-none"
            >
              <input
                checked={selected.includes(app.url)}
                id={id}
                name={id}
                onChange={handleCheckboxChange}
                type="checkbox"
                value={app.url}
                className="h-6 w-6"
              />
              {app.name}
            </label>
          );
        })}

      <Button>
        <DoubleArrowUpIcon className="mr-2 h-4 w-4" />
        Deploy
      </Button>
    </form>
  );
}
