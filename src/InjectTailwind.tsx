import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
};
export function InjectTailwind({ children }: Props) {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      {children}
    </StyledEngineProvider>
  );
}
