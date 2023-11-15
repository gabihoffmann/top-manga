import { Typography } from "@mui/material";
import { useFetchTopManga } from "../../service/api/manga";

export function MangaTwoPage() {
  const { data } = useFetchTopManga();

  return (
    <div>
      <Typography variant="h2">Manga Home 2</Typography>
      {data?.data.map((manga) => (
        <span>{manga.title}</span>
      ))}
    </div>
  );
}
