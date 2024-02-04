import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <main className="px-10">
        <header className="flex justify-between py-6 sticky top-0 ">
          <logo className="font-bold">SecureFood</logo>
          <nav className="flex gap-4 items-center px-1 rounded-full bg-platinum font-medium">
            <div className=" px-4 text-white bg-night  rounded-full py-[7px] ">
              Home
            </div>
            <div className=" px-4 rounded-full py-[7px] ">Vission</div>
            <div className=" px-4  rounded-full py-[7px] ">About Us</div>
            <div className=" px-4  rounded-full py-[7px] ">Our Partners</div>
            <div className=" px-4  rounded-full py-[7px] ">Hall of Fame</div>
          </nav>
          <button className=" text-white bg-lapis_lazuli"> Log In </button>
        </header>

        <section className="flex flex-col  items-center my-40">
          <h1 className="text-8xl font-bold font-serif">Be a Hero </h1>
          <h1 className="text-7xl italic font-bold font-serif mt-[-34px] mb-[-58px]  -z-10 mr-0"
          style={{   "-webkit-text-stroke": "3px #f2e441",
            "-webkit-text-fill-color": "transparent"}}
            >
            In
          </h1>
          <h1 className="text-8xl font-semibold font-serif">Someone's Life!</h1>

          <div className="text-2xl font-medium text-gray-700 ">
            Transforming Surplus into Sustenance for a Hunger-Free World
          </div>
        </section>

        

        <section className="py-10">

          <h1 className="font-medium text-4xl my-8">How It Works</h1>
          <div className="flex w-full gap-4">
            <div className="grid grid-cols-4 grid-rows-6 gap-3 flex-grow h-[1000px]">
              <div className="col-span-4 row-span-2 bg-platinum rounded-2xl">1</div>
              <div className="col-span-2 row-span-4 col-start-3 row-start-3 bg-platinum rounded-md">
                2
              </div>
              <div className="col-start-1 row-start-3 bg-platinum rounded-md">3</div>
              <div className="col-start-2 row-start-3 bg-platinum rounded-md">4</div>
              <div className="row-start-4 bg-platinum rounded-md">5</div>
              <div className="row-start-4 bg-platinum rounded-md">6</div>
              <div className="col-span-2 row-span-2 row-start-5 bg-platinum rounded-md">7</div>
            </div>

            <div className="grid grid-cols-4 grid-rows-6 gap-4 flex-grow h-[1000px]">
              <div className="col-span-2 row-span-4 bg-platinum rounded-2xl">1</div>
              <div className="col-span-2 row-span-2 col-start-3 bg-platinum rounded-2xl">2</div>
              <div className="col-span-2 row-span-2 col-start-3 row-start-3 bg-platinum rounded-2xl">
                3
              </div>
              <div className="col-span-4 row-span-2 row-start-5 bg-platinum rounded-2xl">4</div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="flex w-full px-28 ">
            <div className=" w-full text-5xl font-bold mr-8">
              
              Our <br />
              Mission:
            </div>
            <div className="">
              <div>
                our mission revolves around the singular, powerful goal of
                surplus food redistribution, aiming to create a positive impact
                on both communities and the environment. We are steadfast in our
                commitment to combating food waste and alleviating hunger
                through a comprehensive and streamlined approach.
              </div>
              <br />
              <div>
                <b>Optimizing Food Supply Chains:</b>
                <br />
                We strive to optimize and streamline the food supply chain by
                partnering with businesses, events, and individuals to redirect
                surplus food. Through efficient logistics and collaboration, we
                ensure that excess food is swiftly and safely delivered to those
                in need.
              </div>
              <br />
              <div>
                <b>Technological Efficiency:</b> <br />
                Leveraging the power of technology, we continually enhance our
                platform for seamless coordination between donors, volunteers,
                and beneficiaries. The use of technology allows us to track,
                monitor, and respond to surplus food redistribution needs with
                precision and efficiency.
              </div>
              <br />
              <div>
                <b>Targeted Local Engagement:</b>
                <br />
                Recognizing that solutions are most effective when tailored to
                local contexts, we engage directly with communities. Our focus
                on local engagement ensures that surplus food is redistributed
                within the same community it originated, fostering a sense of
                connection and shared responsibility.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
