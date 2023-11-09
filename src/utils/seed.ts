import { prisma } from "@/utils/prisma";

const dev = [
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
    name: "PCP",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_UymkcGEbKZuTAw84PuyE9uJBThKp/LFUwlJNhs4",
  },
  {
    name: "Orçamento",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_Y5eFEJz8nmOU624SUjO58FcuwRm9/oN8zNbu0uw",
  },
  {
    name: "Portal",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_AJfTTnY20QvPSAUyj6YiYQMhydFJ/fabA2krX9A",
  },
  {
    name: "CRM",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_whLEApJFXdMAKfe4yLqMsPJt4agF/AGsCU7WAx1",
  },
];

const hmg = [
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
    name: "PCP",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_UymkcGEbKZuTAw84PuyE9uJBThKp/4k2AOZB4Sc",
  },
  {
    name: "Orçamento",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_Y5eFEJz8nmOU624SUjO58FcuwRm9/izFY5XmqYw",
  },
  {
    name: "Portal",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_AJfTTnY20QvPSAUyj6YiYQMhydFJ/yqKzUADTmv",
  },
  {
    name: "CRM",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_whLEApJFXdMAKfe4yLqMsPJt4agF/Uz2qClHdcQ",
  },
];

const prod = [
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
    name: "PCP",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_UymkcGEbKZuTAw84PuyE9uJBThKp/R2kAqi6b8Y",
  },
  {
    name: "Orçamento",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_Y5eFEJz8nmOU624SUjO58FcuwRm9/jva0VxArK3",
  },
  {
    name: "Portal",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_AJfTTnY20QvPSAUyj6YiYQMhydFJ/pJDesBE1xl",
  },
  {
    name: "CRM",
    url: "https://api.vercel.com/v1/integrations/deploy/prj_whLEApJFXdMAKfe4yLqMsPJt4agF/pKo4XlcYJi",
  },
];

export async function main() {
  await prisma.application.deleteMany();

  await prisma.application.createMany({
    data: dev.map((item) => ({
      environment: "DEV",
      name: item.name,
      url: item.url,
    })),
  });

  await prisma.application.createMany({
    data: hmg.map((item) => ({
      environment: "HMG",
      name: item.name,
      url: item.url,
    })),
  });

  await prisma.application.createMany({
    data: prod.map((item) => ({
      environment: "PROD",
      name: item.name,
      url: item.url,
    })),
  });
}
