// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  name: string;
  url: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response: Data = [
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
  ].sort((a, b) => a.name.localeCompare(b.name));

  res.status(200).json(response);
}
