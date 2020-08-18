import React from "react";
import App from "../App";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import mockFetchShow from "../api/fetchShow";

const mockData = {
  data: {
    id: 2993,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Fantasy", "Science-Fiction"],
    status: "Running",
    runtime: 60,
    premiered: "2016-07-15",
    officialSite: "https://www.netflix.com/title/80057281",
    schedule: {
      time: "",
      days: ["Thursday"],
    },
    rating: {
      average: 8.7,
    },
    weight: 98,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
    },
    externals: {
      tvrage: 48493,
      thetvdb: 305288,
      imdb: "tt4574334",
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    updated: 1592804211,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/2993",
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/1576476",
      },
    },
    _embedded: {
      episodes: [
        {
          id: 553946,
          url:
            "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          name: "Chapter One: The Vanishing of Will Byers",
          season: 1,
          number: 1,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
          },
          summary:
            "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/553946",
            },
          },
        },
      ],
    },
  },
};

jest.mock("../api/fetchShow");

test("Dropdown renders without errors", async () => {
  mockFetchShow.mockResolvedValueOnce(mockData);
  const { getByText, getAllByText } = render(<App />);
  await waitFor(() => {
    getByText("Select a season");
  });
  userEvent.click(getByText("Select a season"));
  expect(getAllByText("Season 1")).toHaveLength(1);
  expect(mockFetchShow).toHaveBeenCalledTimes(1);
});
