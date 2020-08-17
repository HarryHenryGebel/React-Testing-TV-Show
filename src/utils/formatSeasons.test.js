import formatSeasons from "./formatSeasons";

//  LocalWords:  formatSeasons

test("Correctly divides episode list into seasons", () => {
  const expected = {
    "Season 1": [
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
      {
        id: 578663,
        url:
          "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        name: "Chapter Two: The Weirdo on Maple Street",
        season: 1,
        number: 2,
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
        },
        summary:
          "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/578663",
          },
        },
      },
    ],
    "Season 2": [
      {
        id: 909340,
        url:
          "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
        name: "Chapter One: MADMAX",
        season: 2,
        number: 1,
        airdate: "2017-10-27",
        airtime: "",
        airstamp: "2017-10-27T12:00:00+00:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg",
        },
        summary:
          "<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/909340",
          },
        },
      },
      {
        id: 909342,
        url:
          "http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
        name: "Chapter Two: Trick or Treat, Freak",
        season: 2,
        number: 2,
        airdate: "2017-10-27",
        airtime: "",
        airstamp: "2017-10-27T12:00:00+00:00",
        runtime: 60,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg",
        },
        summary:
          "<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>",
        _links: {
          self: {
            href: "http://api.tvmaze.com/episodes/909342",
          },
        },
      },
    ],
  };

  const actual = formatSeasons([
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
    {
      id: 578663,
      url:
        "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
      name: "Chapter Two: The Weirdo on Maple Street",
      season: 1,
      number: 2,
      airdate: "2016-07-15",
      airtime: "",
      airstamp: "2016-07-15T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg",
      },
      summary:
        "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/578663",
        },
      },
    },
    {
      id: 909340,
      url:
        "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
      name: "Chapter One: MADMAX",
      season: 2,
      number: 1,
      airdate: "2017-10-27",
      airtime: "",
      airstamp: "2017-10-27T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg",
      },
      summary:
        "<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/909340",
        },
      },
    },
    {
      id: 909342,
      url:
        "http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
      name: "Chapter Two: Trick or Treat, Freak",
      season: 2,
      number: 2,
      airdate: "2017-10-27",
      airtime: "",
      airstamp: "2017-10-27T12:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg",
      },
      summary:
        "<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/909342",
        },
      },
    },
  ]);

  expect(actual).toEqual(expected);
});
