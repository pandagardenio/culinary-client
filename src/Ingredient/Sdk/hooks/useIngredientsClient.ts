import { useApiClient } from "@pandagardenio/api-client";
import { useEffect, useState } from "react";
import { IngredientsClient } from "../clients";

export const useIngredientsClient = (): IngredientsClient => {
    const apiClient = useApiClient();
    const [recipesClient] = useState<IngredientsClient>(new IngredientsClient(apiClient));

    useEffect(() => {
        recipesClient.apiClient = apiClient;
    }, [apiClient, recipesClient]);

    return recipesClient;
}