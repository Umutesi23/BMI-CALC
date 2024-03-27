"use client";
import Image from "next/image";
import logo from "./images/logo.png";
import { SetStateAction, useState } from "react";
import eating from "./images/eating.png";
import pot from "./images/pot.png";
import exercise from "./images/exercise.png";
import moon from "./images/moon.png";
import age from "./images/age.png";
import gender from "./images/gender.png";
import muscle from "./images/muscle.png";
import preg from "./images/preg.png";
import race from "./images/race.png";

enum SYSTEM {
  METRIC,
  IMPERIAL,
}

export default function Home() {
  const [system, setSystem] = useState(SYSTEM.METRIC);

  //INPUT FOR HEIGHT METRIC

  const [cmH, setcmH] = useState(0);
  function cmHeightHandler(e: any) {
    setcmH(Number(e.target.value));
  }

  //INPUT FOR WEIGHT METRIC

  const [kgW, setkgW] = useState(0);
  function kgWeightHandler(e: any) {
    setkgW(Number(e.target.value));
  }

  let bMI1 = Math.round(kgW / ((cmH / 100) * (cmH / 100)));

  //INPUT FOR HEIGHT IMPERIAL

  const [inH, setinH] = useState(0);
  function inHeightHandler(e: any) {
    setinH(Number(e.target.value));
  }

  //INPUT FOR WEIGHT IMPERIAL

  const [lbW, setlbW] = useState(0);
  function lbWeightHandler(e: any) {
    setlbW(Number(e.target.value));
  }

  let bMI2 = Math.round((lbW / (inH * inH)) * 703);

  return (
    <main className="flex min-h-screeb">
      {/* first blue box */}
      <div className="bluebox rounded-3xl shadow-medium block">
        <Image src={logo} alt="logo image" className="logo" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="text-4xl font-medium">
          Body Mass <pre></pre>Index Calculator
        </h1>
        <br></br>
        <p className=" text-sm font-serif font-extralight">
          Better understand your weight in relation to your height using
          <br></br>our body mass index (BMI) caculator. While BMI is not the
          <br></br>
          sole determinant of a healthy weight, it offers a valuable <br></br>
          starting point to evaluate your overall health and well being.
        </p>
      </div>
      {/* Form */}

      <form className=" bg-white form rounded-3xl shadow-2xl block">
        <fieldset>
          <label className=" font-semibold text-lg">
            Enter your details below
          </label>
          <br></br> <br></br>
          <div className="flex items-center wrapper">
            <label className=" font-medium text-sm">
              <input
                type="radio"
                name="system"
                id="metric"
                checked={system === SYSTEM.METRIC}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSystem(SYSTEM.METRIC);
                  }
                }}
              />
              Metric
            </label>
            <label className=" font-medium text-sm">
              <input
                type="radio"
                name="system"
                id="imperial"
                checked={system === SYSTEM.IMPERIAL}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSystem(SYSTEM.IMPERIAL);
                  }
                }}
              />
              Imperial
            </label>
          </div>
        </fieldset>
        <br></br>
        {(SYSTEM[system] === "METRIC" && (
          <fieldset className="flex mbox">
            <div>
              <label className=" font-medium text-sm">Height</label>
              <br></br>
              <div className=" border-2 flex pl-3 pr-3 ">
                <input
                  typeof="number"
                  className=" measure"
                  placeholder="0"
                  onChange={cmHeightHandler}
                />
                <p className=" font-bold text-blue-700 units">cm</p>
              </div>
            </div>
            <div>
              <label className=" font-medium text-sm">Weight</label>
              <br></br>
              <div className=" border-2 flex pl-3 pr-3">
                <input
                  typeof="number"
                  className=" measure"
                  placeholder="0"
                  onChange={kgWeightHandler}
                />
                <p className=" font-bold text-blue-700 units">kg</p>
              </div>
            </div>
          </fieldset>
        )) || (
          <fieldset className="flex mbox">
            <div>
              <label className=" font-medium text-sm">Height</label>
              <br></br>
              <div className=" border-2 flex pl-3 pr-3 ">
                <input
                  typeof="number"
                  className=" measure"
                  placeholder="0"
                  onChange={inHeightHandler}
                />
                <p className=" text-blue-700 units font-extrabold">``</p>
              </div>
            </div>
            <div>
              <label className=" font-medium text-sm">Weight</label>
              <br></br>
              <div className=" border-2 flex pl-3 pr-3">
                <input
                  typeof="number"
                  className=" measure"
                  placeholder="0"
                  onChange={lbWeightHandler}
                />
                <p className=" font-bold text-blue-700 units">lb</p>
              </div>
            </div>
          </fieldset>
        )}
        <br></br>
        <br></br>
        <fieldset className=" results text-white rounded-r-[100px] rounded-l-3xl">
          <h3 className=" font-medium">Welcome!</h3>
          <br></br>
          <p className=" font-thin font-sans text-xs">
            Enter your height and weight and you`ll see your BMI result here
          </p>
          <br></br>
          <div className=" flex center gap-2 justify-center">
            {bMI1 > 0 && bMI1 !== Infinity && bMI1}
            {bMI1 > 0 && bMI1 !== Infinity && <p>Is Your BMI!</p>}
          </div>

          <div className=" flex center gap-2 justify-center">
            {bMI2 > 0 && bMI2 !== Infinity && bMI2}
            {bMI2 > 0 && bMI2 !== Infinity && <p>Is Your BMI!</p>}
          </div>
        </fieldset>
      </form>

      {/*picture of person eating  and a box of text*/}

      <div className="flex mt-[50vw] ml-[-70vw] gap-36">
        <div className=" h-[30.5vw] pic  w-[35vw]">
          <Image src={eating} alt="person eating" className=" mt-[-2vw]" />
        </div>
        <div>
          <h2 className="text-4xl font-medium mt-32">
            What your BMI result <pre></pre>means
          </h2>
          <br></br>
          <p className=" text-sm font-serif font-extralight">
            A BMI range of 18.5 to 24.9 is considered ``healthy weight``.
            <br></br>
            Maintaining a healthy weight may lower your chances of <br></br>
            experiencing health issues later on such as obesity and type
            <br></br>2 diabetes. Aim for nutritious diet with reduced fat and
            <br></br>sugar content, incorporating ample fruits and vegetables.
            <br></br>Additionally strive for regular physical activity, ideally
            about<br></br> 30 minutes daily for 5 days a week.
          </p>
        </div>
      </div>

      {/*How to get a good BMI */}

      <div className=" pl-36 pr-36 flex justify-center mt-[90vw] ml-[-81vw] gap-12 bg-cyan-50 pt-20 w-[100%] h-[25vw]">
        <div className=" w-[24vw] h-[20vw]">
          <Image
            src={pot}
            alt="Image of a pot of veggies"
            className="w-[3vw] h-[3vw]"
          />
          <br></br>
          <h2 className=" font-semibold">Healthy eating</h2>
          <br />
          <p className=" text-sm font-serif font-extralight">
            Healthy eating promotes weight control,disease prevention, better
            digestion,immunity, mental clarity,
            <br /> and mood
          </p>
        </div>

        <div className=" w-[24vw] h-[20vw]">
          <Image
            src={exercise}
            alt="Image of a person lifting weights"
            className="w-[3vw] h-[3vw]"
          />
          <br></br>
          <h2 className=" font-semibold">Regular exercise</h2>
          <br />
          <p className=" text-sm font-serif font-extralight">
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk fostering wellness and longetivity.
          </p>
        </div>

        <div className=" w-[24vw] h-[20vw]">
          <Image src={moon} alt="Image of a moon" className="w-[3vw] h-[3vw]" />
          <br></br>
          <h2 className=" font-semibold">Adequate sleep</h2>
          <br />
          <p className=" text-sm font-serif font-extralight">
            Sleep enhances mental clarity, emotional stability, and physical
            wellnes, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>

      {/* LIMITATIONS OF BMI */}

      <div className=" mt-[105vw] ml-[-99.8vw] p-20 w-[100%]">
        <div className=" flex justify-center gap-72">
          <div>
            <h2 className="text-4xl font-medium mt-32">Limitations of BMI </h2>
            <br></br>
            <p className=" text-sm font-serif font-extralight">
              Although BMI is often a practical indicator of healthy weight, it
              is not <br /> suited for every person. Specific groups shouls
              carefully consider their <br /> BMI outcomes, and in certain
              cases, the measurement may not be
              <br /> benieficial to use.
            </p>
          </div>

          <div className=" mt-36 shadow-xl p-7 rounded-3xl">
            <h2 className=" font-semibold flex gap-2">
              <Image
                src={gender}
                alt="Image of a person lifting weights"
                className="w-[2vw] h-[2vw] mt-[-0.5vw]"
              />
              Gender
            </h2>
            <br />
            <p className=" text-sm font-serif font-extralight">
              The development and body fat <br />
              composition of boys and girls vary with <br />
              age. Consequently, a child`s age and <br /> gender are considered
              when evaluating <br />
              their BMI
            </p>
          </div>
        </div>
      </div>

      {/* OTHER LIMITATIONS*/}

      <div className=" mt-[136vw] ml-[-99.8vw] w-[100%] flex justify-end gap-14 pr-14">
        <div className=" w-[24vw] h-fit shadow-xl p-7 rounded-3xl">
          <h2 className=" font-semibold flex gap-2">
            <Image
              src={age}
              alt="Image of a person lifting weights"
              className="w-[2vw] h-[2vw] mt-[-0.5vw]"
            />
            Age
          </h2>
          <br />
          <p className=" text-sm font-serif font-extralight">
            In aging individuals, increased body fat <br /> and muscles loss may
            cause BMI to <br /> underestimate body fat content
          </p>
        </div>

        <div className=" w-[24vw] h-fit shadow-xl p-7 rounded-3xl">
          <h2 className=" font-semibold flex gap-2">
            <Image
              src={muscle}
              alt="Image of a person lifting weights"
              className="w-[2vw] h-[2vw] mt-[-0.5vw]"
            />
            Muscle
          </h2>
          <br />
          <p className=" text-sm font-serif font-extralight">
            BMI may misclassify muscular <br />
            individuals as overweight or obese, as it doesn`t differentiste
            muscle from fat
            <br />
          </p>
        </div>
      </div>

      {
        //MORE LIMITATIONS
      }

      <div className=" mt-[149vw] ml-[-99.8vw] w-[100%] flex justify-center gap-14 ">
        <div className=" w-[24vw] h-fit shadow-xl p-7 rounded-3xl">
          <h2 className=" font-semibold flex gap-2">
            <Image
              src={preg}
              alt="Image of a person lifting weights"
              className="w-[2vw] h-[2vw] mt-[-0.5vw]"
            />
            Pregnancy
          </h2>
          <br />
          <p className=" text-sm font-serif font-extralight">
            Expectant mothers experience weight
            <br /> gain gain due to their growing baby <br /> Maintaining a
            healthy pre-pregnancy
            <br /> BMI is advisable to minimize health <br /> risks for mother
            and child
          </p>
        </div>

        <div className=" w-[24vw] h-fit shadow-xl p-7 rounded-3xl">
          <h2 className=" font-semibold flex gap-2">
            <Image
              src={race}
              alt="Image of a person lifting weights"
              className="w-[2vw] h-[2vw] mt-[-0.5vw]"
            />
            Race
          </h2>
          <br />
          <p className=" text-sm font-serif font-extralight">
            Certain health concerns may affect <br /> indivifuals of some black
            or asian <br /> origins at lower BMIs than others. To <br /> learn
            more, it is advised to discuss this <br /> with your GP or practice
            nurse
          </p>
        </div>
      </div>
    </main>
  );
}
