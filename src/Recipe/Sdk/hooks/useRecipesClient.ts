import { useApiClient } from "@pandagardenio/api-client";
import { useEffect, useState } from "react";

import { RecipesClient } from "../clients";

export const useRecipesClient = (): RecipesClient => {
    const apiClient = useApiClient();
    const [recipesClient] = useState<RecipesClient>(new RecipesClient(apiClient));

    useEffect(() => {
        recipesClient.apiClient = apiClient;
    }, [apiClient, recipesClient]);

    return recipesClient;
}