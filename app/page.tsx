import { Data as AppsType } from "../pages/api/apps";
import { FormApps } from "./formapps";
import styles from "./page.module.css";

const fetchApps = async () =>
  fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/apps`, {
    cache: "no-store",
  }).then((res) => res.json() as Promise<AppsType>);

export default async function Home() {
  const apps = await fetchApps();
  return (
    <div className={styles.container}>
      <FormApps apps={apps} />
    </div>
  );
}
