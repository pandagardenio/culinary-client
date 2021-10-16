import { ApiClient } from "./ApiClient";
import { ApiClientConfig } from "./ApiClientConfig";

export const createApiClient = (config: ApiClientConfig): ApiClient => new ApiClient(config);