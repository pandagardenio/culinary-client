import { Path } from "./Path";

export const useRecipeListRoute = (name: string): string => {
    return `${Path.LIST}/${name}`;
}