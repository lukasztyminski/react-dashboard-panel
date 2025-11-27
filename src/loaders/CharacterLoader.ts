import { getTopCharacters } from 'src/utils/CharactersProcessor';
import type { CharacterRouteParams } from 'src/types/types';
import { DefaultApi } from 'src/lib/rick-and-morty-api-client';

export async function fetchCharacters() {
  const api = new DefaultApi();
  const response = await api.fetchAllCharacters();
  return { characters: getTopCharacters(response.results!, 5) };
}

export async function fetchCharacter({ params }: CharacterRouteParams) {
  const api = new DefaultApi();
  return await api.fetchSingleCharacter({ id: parseInt(params.id) });
}
