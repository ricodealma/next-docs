import { Container } from "inversify";
import { LinkModule } from "./modules/LinkModules";

const ApplicationContainer = new Container({
    defaultScope: "Singleton",
});

export const initializeContainer = () => {
    ApplicationContainer.load(LinkModule);
};

initializeContainer()

export const getInjection = <T>(symbol: symbol) => {
    return ApplicationContainer.get<T>(symbol);
};

export { ApplicationContainer };