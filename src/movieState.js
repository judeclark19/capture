//Import Images
import athlete from "./img/athlete.png";
import goodtimes from "./img/goodtimes.png";
import theracer from "./img/theracer.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "The Athlete Review 1",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "The Athlete Review 2",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "The Athlete Review 3",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Good Times Review 1",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Good Times Review 2",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Good Times Review 3",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "The Racer Review 1",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "The Racer Review 2",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "The Racer Review 3",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
