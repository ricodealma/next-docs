import { Container } from "inversify";
import { LinkModule } from "./modules/LinkModules";

const ApplicationContainer = new Container({
    defaultScope: "Singleton",
});

const initializeContainer = () => {
    ApplicationContainer.load(LinkModule);
    console.log('oi')
};

initializeContainer()

export const getInjection = <T>(symbol: symbol) => {
    return ApplicationContainer.get<T>(symbol);
};

export { ApplicationContainer }