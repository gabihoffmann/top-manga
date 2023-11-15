import { useQuery } from "react-query";
import { AxiosConfig } from "../../config/axiosConfig";
import { Root } from "./types";

/**
 * ReactQuery - cache client
 * Queries - qualquer operação que envolva apenas a leitura de dados do servidos,
 * em um método REST estamos falando do  GET
 * @returns
 */
export function useFetchTopManga() {
  const url = "/top/manga";
  return useQuery("topManga", async () => {
    return await AxiosConfig.get<Root>(url).then((data) => data.data.data);
  });
}

// https://community.revelo.com.br/react-query-um-guia-pratico/
//TODO: add query request with params
//TODO: add query with mutation
