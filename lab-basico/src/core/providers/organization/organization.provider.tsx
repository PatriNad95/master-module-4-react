import React, { PropsWithChildren } from "react";
import { OrganizationContextModel } from "./organization.vm";

export const OrganizationContext =
  React.createContext<OrganizationContextModel>(null);

export const OrganizationProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [org, setOrg] = React.useState<string>("lemoncode");
  return (
    <OrganizationContext.Provider value={{ org, setOrg }}>
      {children}
    </OrganizationContext.Provider>
  );
};
