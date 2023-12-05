import React, { useRef, useState, useEffect } from "react";
import { db } from "../firebase-handler";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Select = () => {
    const [units, setUnits] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
        const unitsCollection = collection(db, 'units');
        const snapshot = await getDocs(unitsCollection);

        const unitCode = snapshot.docs.map((doc) => doc.data().title);
        setUnits(unitCode);

        snapshot.forEach((doc) => {
            const title = doc.data().title;
            console.log(title);
          });
        };
        
        fetchData();
        console.log(units)
        
    }, []);

    

  return (
    <div className="font-mono text-lg">
      <nav className="bg-black text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <a href="http://localhost:3000/home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="ml-auto">
            <a href="http://localhost:3000/" className="hover:text-gray-400">
              Log Out
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex h-screen">
        
      <div className="overflow-auto ring-2 ring-gray-300 w-1/5 rounded-2xl text-xl mr-4 m-20 text-center">
        {units.map((title) => (
            <div key={title} className="p-8 hover:bg-black hover:text-white border-b-2">
            <button>{title}</button>
            </div>
        ))}
        </div>

        <div className="overflow-auto ring-2 ring-gray-300 w-4/5 rounded-2xl text-xl ml-4 m-20">
          <div className="flex justify-between border-b-2">
            <span className="m-8">Tutorial 9:00 - 11:00</span>
            <button
              className="ring-2 ring-gray-300 hover:bg-gray-100 rounded-2xl float-right py-2 px-10 m-6"
            >
              Select
            </button>
          </div>
          <div className="flex justify-between border-b-2">
            <span className="m-8">Tutorial 12:00 - 14:00</span>
            <button
              className="ring-2 ring-gray-300 hover:bg-gray-100 rounded-2xl float-right py-2 px-10 m-6"
            >
              Select
            </button>
          </div>
          <div className="flex justify-between border-b-2">
            <span className="m-8">Tutorial 15:00 - 17:00</span>
            <button
              className="ring-2 ring-gray-300 hover:bg-gray-100 rounded-2xl float-right py-2 px-10 m-6"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
