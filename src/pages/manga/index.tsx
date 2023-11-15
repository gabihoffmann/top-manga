import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { useFetchTopManga } from "../../service/api/manga";
import { useFavoriteMangaStore } from "../../store/favorites";
import { useCallback, useState } from "react";

export function MangaPage() {
  // Local State
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Global State
  const { favorites, favoriteManga } = useFavoriteMangaStore();

  // Service State
  const { data, isLoading } = useFetchTopManga();

  const handleShowFavorites = useCallback(() => {
    setShowOnlyFavorites((prev) => !prev);
  }, []);

  return (
    <div>
      <Typography variant="h2">Manga Home</Typography>

      {isLoading && <Skeleton variant="rectangular" />}

      <Button onClick={handleShowFavorites}>only favorites</Button>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data
          ?.filter(
            (top) => !showOnlyFavorites || favorites.includes(top.mal_id)
          )
          .map((manga) => (
            <Grid item key={`manga-${manga.mal_id}`} xs={4}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={manga.images.jpg.image_url}
                  title={manga.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {manga.title}
                  </Typography>
                  {favorites.includes(manga.mal_id) && (
                    <Chip color="warning" size="small" disabled />
                  )}
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => favoriteManga(manga.mal_id)}
                  >
                    Favorite
                  </Button>
                  <Button size="small">More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
