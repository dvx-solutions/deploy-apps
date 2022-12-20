import { Data as AppsType } from "../pages/api/apps";
import { FormApps } from "./formapps";
import styles from "./page.module.css";

const fetchApps = async (): Promise<AppsType> => [
  {
    name: "Educação",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_y5FuDNzCY0OsTmI42c68Bgnbmxp6/HJiKZbPbeW",
  },
  {
    name: "Contratos",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_HVhZOqRUIg3g7dFezPEyBPEOAxLQ/zHhbPFUzSZ",
  },
  {
    name: "Empresarial",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_a2eWi1SAEfb1BlDnVw1I4BEbqcDv/0J1ZghFxeD",
  },
  {
    name: "Indicadores",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_08FnUnF2HkICrfyNJ24Puh7hyp7m/IHucQJ01dN",
  },
  {
    name: "Ordem de Serviço",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_UymkcGEbKZuTAw84PuyE9uJBThKp/LFUwlJNhs4",
  },
  {
    name: "Orçamento",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_Y5eFEJz8nmOU624SUjO58FcuwRm9/oN8zNbu0uw",
  },
  {
    name: "Apps",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_AJfTTnY20QvPSAUyj6YiYQMhydFJ/fabA2krX9A",
  },
  {
    name: "CRM",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_whLEApJFXdMAKfe4yLqMsPJt4agF/AGsCU7WAx1",
  },
];

const fetchAppsHmg = async (): Promise<AppsType> => [
  {
    name: "Educação",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_y5FuDNzCY0OsTmI42c68Bgnbmxp6/v9WQGNG0WU",
  },
  {
    name: "Contratos",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_HVhZOqRUIg3g7dFezPEyBPEOAxLQ/l6EKor8iDJ",
  },
  {
    name: "Empresarial",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_a2eWi1SAEfb1BlDnVw1I4BEbqcDv/qsnz5x05AF",
  },
  {
    name: "Indicadores",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_08FnUnF2HkICrfyNJ24Puh7hyp7m/VtyR972zSl",
  },
  {
    name: "Ordem de Serviço",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_UymkcGEbKZuTAw84PuyE9uJBThKp/4k2AOZB4Sc",
  },
  {
    name: "Orçamento",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_Y5eFEJz8nmOU624SUjO58FcuwRm9/izFY5XmqYw",
  },
  {
    name: "Apps",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_AJfTTnY20QvPSAUyj6YiYQMhydFJ/yqKzUADTmv",
  },
  {
    name: "CRM",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_whLEApJFXdMAKfe4yLqMsPJt4agF/Uz2qClHdcQ",
  },
];
const fetchAppsProd = async (): Promise<AppsType> => [
  {
    name: "Educação",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_y5FuDNzCY0OsTmI42c68Bgnbmxp6/loyDPlg6km",
  },
  {
    name: "Contratos",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_HVhZOqRUIg3g7dFezPEyBPEOAxLQ/HHAKV0IS6L",
  },
  {
    name: "Empresarial",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_a2eWi1SAEfb1BlDnVw1I4BEbqcDv/CHDGiW47q8",
  },
  {
    name: "Indicadores",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_08FnUnF2HkICrfyNJ24Puh7hyp7m/ZJFWupoT7j",
  },
  {
    name: "Ordem de Serviço",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_UymkcGEbKZuTAw84PuyE9uJBThKp/R2kAqi6b8Y",
  },
  {
    name: "Orçamento",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_Y5eFEJz8nmOU624SUjO58FcuwRm9/jva0VxArK3",
  },
  {
    name: "Apps",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_AJfTTnY20QvPSAUyj6YiYQMhydFJ/pJDesBE1xl",
  },
  {
    name: "CRM",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_whLEApJFXdMAKfe4yLqMsPJt4agF/pKo4XlcYJi",
  },
];

export default async function Home() {
  const apps = await fetchApps();
  const appsHmg = await fetchAppsHmg();
  const appsProd = await fetchAppsProd();
  return (
    <div className={styles.container}>
      <FormApps apps={apps} name="Todos Dev" />
      <FormApps apps={appsHmg} name="Todos Homolog" />
      <FormApps apps={appsProd} name="Todos Prod" />
    </div>
  );
}
