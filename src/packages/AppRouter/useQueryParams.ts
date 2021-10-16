import { useLocation } from ".";

export const useQueryParams = (): URLSearchParams => new URLSearchParams(useLocation().search);