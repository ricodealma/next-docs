import { Container } from "inversify";
import { LinkModule } from "./modules/LinkModules";

const ApplicationContainer = new Container({
    defaultScope: "Singleton",
});

console.log(ApplicationContainer)
export const initializeContainer = () => {
    ApplicationContainer.load(LinkModule);
    console.log('container initialized')
};

initializeContainer()

export const getInjection = <T>(symbol: symbol) => {
    console.log('trying to get injection')
    return ApplicationContainer.get<T>(symbol);
};

export { ApplicationContainer };