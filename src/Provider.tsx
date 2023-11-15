import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./service/config/queryClient";

import { InjectTailwind } from "./InjectTailwind";

type ProviderProps = {
  children: React.ReactNode;
};
export function Provider({ children }: ProviderProps) {
  return (
    <InjectTailwind>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </InjectTailwind>
  );
}
