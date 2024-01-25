import styles from "./approve.module.css";

function Approve() {
  const res = {
    status: "success",
    results: 5,
    data: {
      users: [
        {
          _id: "659e56282226ac98f1655b20",
          firstName: "leul",
          lastName: "gebre",
          email: "mahimahletmahlet@gmail.com",
          role: "owner",
          verified: true,
          approved: true,
          photo: null,
          __v: 0,
        },
        {
          _id: "659e57182226ac98f1655b2b",
          firstName: "Abebe",
          lastName: "Kebede",
          email: "edalkeps@gmail.com",
          role: "admin",
          verified: false,
          approved: false,
          photo: null,
          __v: 0,
        },
        {
          _id: "659e58142226ac98f1655b33",
          firstName: "edalk",
          lastName: "ps",
          email: "endalkeps@gmail.com",
          role: "admin",
          verified: true,
          approved: true,
          photo: null,
          __v: 0,
        },
        {
          _id: "659ef6df444c20d4d28ac440",
          firstName: "yafet",
          lastName: "zer",
          email: "zerihunyafet@fdf.com",
          role: "admin",
          verified: false,
          approved: false,
          photo: null,
          __v: 0,
        },
        {
          _id: "65a0796c5b7f74ad41ef7e54",
          firstName: "yafet",
          lastName: "zerihun",
          email: "zerihunyafet80@gmail.com",
          role: "admin",
          verified: true,
          approved: false,
          photo: null,
          __v: 0,
        },
      ],
    },
  };

  console.log(res.data, "from admin approve");

  return <div></div>;
}

export default Approve;
