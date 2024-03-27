import { CoreAdminContext, CoreAdminUI, Resource } from "ra-core";
import { dataProvider } from "./dataProvider";
import { i18nProvider } from "./authProvider";
import { Layout } from "./ui/Layout";
import { Dashboard } from "./Dashboard";
import { products } from "./products";
import { categories } from "./categories";

export const CommonAdmin = () => {
    return (
      <CoreAdminContext dataProvider={dataProvider} i18nProvider={i18nProvider}>
        <CoreAdminUI dashboard={Dashboard} layout={Layout} title="React Admin">
          <Resource {...products} />
          <Resource {...categories} />
        </CoreAdminUI>
      </CoreAdminContext>
    );
};
