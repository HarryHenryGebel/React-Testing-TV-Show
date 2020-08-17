export const formatSeasons = (allEpisodes) => {
  const seasons = {};
  allEpisodes.forEach((episode) => {
    if (!(`Season ${episode.season}` in seasons)) {
      seasons[`Season ${episode.season}`] = [];
    }
    seasons[`Season ${episode.season}`].push(episode);
  });
  return seasons;
};
