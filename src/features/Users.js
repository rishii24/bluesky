import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";

import { ReactComponent as Search } from "../assets/Search icon.svg";
import { ReactComponent as Filter } from "../assets/Filter.svg";

// https://reqres.in/api/users?page=2

const Users = () => {
  const [userlist, setuserlist] = useState();
  const [page, setpage] = useState(1);
  const [search, setSearch] = useState("");
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let userData = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );
      setuserlist(userData?.data?.data);
    };
    fetchData();
  }, [page]);

  const searchHandler = (e) => {
    e.preventDefault();
    settoggle(true);
    if (userlist) {
      let searchlist = userlist.filter((x) =>
        x.first_name.toLowerCase().includes(search)
      );
      setuserlist(searchlist);
    }
  };

  // console.log(userlist);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex bg-background">
      <Navbar />
      <div className="flex flex-col w-4/5 px-10 pt-8">
        <Header title="Users" />
        <div className="flex flex-col w-full px-5 py-4 bg-white mt-3 rounded-xl">
          <div>
            <div className="flex w-full justify-between items-center py-1">
              <div className="font-semibold">User Records</div>
              <div className="flex w-1/3 items-center justify-between">
                <form
                  onSubmit={searchHandler}
                  className="flex items-center text-xs px-3 py-1 rounded-lg bg-background"
                >
                  <input
                    type="text"
                    value={search}
                    placeholder="Search in table.."
                    className="outline-none border-none bg-background"
                    onChange={changeHandler}
                  />
                  {!toggle ? (
                    <Search onClick={searchHandler} />
                  ) : (
                    <button
                      className="-mr-1"
                      onClick={() => window.location.reload()}
                    >
                      reset
                    </button>
                  )}
                </form>
                <button className="flex items-center border border-1 text-xs py-1 px-2 rounded-lg">
                  <Filter className="mr-2" /> Filter
                </button>
                <button className="border-none outline-none bg-primary py-1 px-2 rounded-lg text-white text-xs font-semibold">
                  + Add
                </button>
              </div>
            </div>
          </div>
          {userlist &&
            userlist.map((data, index) => {
              return (
                <UserInfo
                  key={data?.id}
                  userimg={data?.avatar}
                  firstName={data?.first_name}
                  lastName={data?.last_name}
                  email={data?.email}
                  index={index}
                />
              );
            })}
          <div className="flex mt-4 justify-end font-medium">
            <button
              onClick={() => {
                if (page >= 2) setpage(page - 1);
              }}
              className="px-1 py-1 w-8 rounded-xl border border-1 outline-none mx-1"
            >
              {"<"}
            </button>
            <button
              onClick={() => setpage(1)}
              className="px-1 py-1 w-8 rounded-xl border border-1 outline-none mx-1"
              style={{ backgroundColor: page === 1 ? "#EAEAEA" : "white" }}
            >
              1
            </button>
            <button
              onClick={() => setpage(2)}
              className="px-1 py-1 w-8 rounded-xl border border-1 outline-none mx-1"
              style={{ backgroundColor: page === 2 ? "#EAEAEA" : "white" }}
            >
              2
            </button>
            <button
              onClick={() => {
                if (page < 2) setpage(page + 1);
              }}
              className="px-1 py-1 w-8 rounded-xl border border-1 outline-none mx-1"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
