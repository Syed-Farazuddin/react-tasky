/* eslint-disable no-undef */
import React, { useState } from "react";
import { FaList, FaThumbsUp, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Body({ listItems, setListItems }) {
  const [taskDone, setTaskDone] = useState([]);
  const [task, setTask] = useState("");

  const handleDelete = (item) => {
    let DeletedData = listItems.filter((values) => item !== values);
    setListItems(DeletedData);
  };

  const handleSubmit = () => {
    if (task !== "") {
      let cpyData = [...listItems, task];
      setListItems(cpyData);
      setTask("");
      console.log(listItems);
      toast("Successfully added your task!", {
        position: "bottom-left",
        type: "success",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast("Can't add an empty task!", {
        type: "error",
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const date = new Date();
  return (
    <div className="flex justify-center items-center mt-10 mobile:p-5 tab:p-0 tab:gap-10 font-serif">
      <div className="flex bg-sky-200 p-6 gap-4 items-start justify-start w-[450px] flex-col rounded-md ">
        <div className=" flex gap-5 justify-between w-full items-center">
          <h1 className="font-bold capitalize tab:ml-5 tab:text-xl mobile:ml-2 mobile:text-lg text-sky-900">
            {date.toLocaleDateString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h1>
          <span className="bg-sky-900 rounded-full text-white p-2 mr-5">
            <FaList />
          </span>
        </div>
        <div className="flex flex-col w-full items-center justify-center font-bold mt-5">
          <div className="flex justify-between bg-white rounded-lg m-1 gap-1 w-full items-center border-b-2 border-sky-300 p-2">
            <input
              className="w-full rounded-md outline-none py-1 px-2"
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="p-2 rounded-lg  bg-slate-700 text-white font-serif"
            >
              ADD
            </button>
          </div>

          {listItems.length > 0 ? (
            listItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between bg-white rounded-lg m-1 gap-1  w-full  items-center border-b-2 border-sky-300 p-4"
              >
                <div
                  className={`flex gap-1 items-center ${
                    taskDone.indexOf(item) !== -1 ? "line-through " : ""
                  }`}
                >
                  <p>{index + 1})</p>
                  <p> {item}</p>
                </div>
                <div className="flex gap-2">
                  <p
                    className="bg-green-600 rounded-full text-white p-2 hover:bg-green-800 cursor-pointer"
                    onClick={() => {
                      console.log(taskDone.indexOf(item));
                      if (taskDone.indexOf(item) === -1) {
                        let dummyTasks = [...taskDone, item];
                        setTaskDone(dummyTasks);
                        console.log(taskDone);
                      } else {
                        console.log("Item already exists");
                      }
                    }}
                  >
                    <FaThumbsUp />
                  </p>
                  <p
                    className="bg-red-400 rounded-full text-white p-2 hover:bg-red-600 cursor-pointer"
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    <FaTrash />
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center bg-white rounded-lg m-1 gap-1  items-center border-b-2 border-sky-300 mobile:p-1 tab:p-2 w-full">
              <h1 className="text-sky-800 text-center">
                Your list is Empty! Add Items and start working.
              </h1>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Body;
