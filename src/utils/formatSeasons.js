export default function formatSeasons(allEpisodes) {
  const seasons = {};
  allEpisodes.forEach((episode) => {
    // create season if this is first episodes
    if (!(`Season ${episode.season}` in seasons)) {
      seasons[`Season ${episode.season}`] = [];
    }

    seasons[`Season ${episode.season}`].push(episode);
  });
  return seasons;
}
