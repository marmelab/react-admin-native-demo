import { CoreAdminContext, CoreAdminUI, Resource } from "ra-core";
import { dataProvider } from "./dataProvider";
import { i18nProvider } from "./i18nProvider";
import { Layout } from "./ui/Layout";
import { Dashboard } from "./Dashboard";
import { products } from "./products";
import { categories } from "./categories";

export const Admin = () => {
  return (
    <CoreAdminContext dataProvider={dataProvider} i18nProvider={i18nProvider}>
      <CoreAdminUI dashboard={Dashboard} layout={Layout} title="React Admin">
        <Resource {...products} />
        <Resource {...categories} />
      </CoreAdminUI>
    </CoreAdminContext>
  );
};
