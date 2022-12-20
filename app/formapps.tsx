"use client";

import { useState } from "react";

import { Data as AppsType } from "../pages/api/apps";
import styles from "./page.module.css";

interface Props {
  apps: AppsType;
  name?: string;
}

export function FormApps({ apps, name = 'TODOS' }: Props) {
  const [selected, setSelected] = useState<Array<string>>([]);

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    } else {
      setSelected(selected.filter((s) => s !== e.target.value));
    }
  };

  const handleDeployRequests = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    selected.forEach((app) => {
      fetch(app);
    });
  };

  return (
    <form onSubmit={handleDeployRequests}>
      <label className={styles["all-modules-label"]}>
        <input
          name={"all"}
          onChange={({ target }) => {
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
          }}
          type="checkbox"
        />
        {name}
      </label>

      {apps.map((app) => {
        const id = app.name.toLocaleLowerCase();
        return (
          <label key={app.url} htmlFor={id}>
            <input
              checked={selected.includes(app.url)}
              id={id}
              name={id}
              onChange={onCheckboxChange}
              type="checkbox"
              value={app.url}
            />
            {app.name}
          </label>
        );
      })}

      <button type="submit">Deploy</button>
    </form>
  );
}
