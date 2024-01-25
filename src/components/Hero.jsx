import { useEffect, useState } from "react";

import hero_img from "../../assets/hero-img.png";

import lesson_data from "../data/lessons.js";
import LessonContentModal from "./LessonContentModal.jsx";

export const Hero = () => {
  const [quotes, setQuotes] = useState("");
  useEffect(() => {
    const getQuotes = async () => {
      const response = await fetch(
        "https://api.quotable.io/quotes/random?tags=technology"
      );
      const data = await response.json();
      setQuotes(data[0].content);
      console.log(quotes);
    };
    getQuotes();
  }, []);

  // console.log(quotes.content)
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              style={{ marginTop: "-550px" }}
              src={hero_img}
              className="max-w-sm rounded-lg"
            />
            {quotes.length !== 0 ? (
              <div className="border bg-blue-500 text-white border-4 w-96 p-2">
                <div className="text-xl text-center">Tech Quote 💭</div>
                <br /> <p className="italic">`{quotes}`</p>
              </div>
            ) : (
              <div className="skeleton w-96"></div>
            )}
          </div>
          <div>
            <h1
              className="text-5xl text-center font-bold"
              style={{ marginTop: "50px", marginBottom: "10px" }}
            >
              Weekdemy Frontend
            </h1>
            <p className="text-xl text-center mb-16">
              Imagine a place where young tech enthusiasts come together to
              explore and learn. <br /> That's what we're creating! 👩‍💻
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="stats bg-base-300 shadow">
                <div className="stat">
                  <div className="stat-titlevtext-center">Total Classes</div>
                  <div className="stat-value text-center text-primary">12</div>
                </div>

                <div className="stat">
                  <div className="stat-title text-center">Total Exams</div>
                  <div className="stat-value text-center text-secondary">3</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-4xl text-secondary">🚀</div>
                  <div className="text-xl stat-value">
                    Project <br />
                    Participation
                  </div>
                  <div className="stat-desc text-secondary">
                    for selected students
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="divider divider-info divider-start mt-20 text-2xl">
                Course Outline 📄
              </div>
            </div>
            {lesson_data.map((lesson) => {
              return (
                <div
                  key={lesson.id}
                  className="collapse m-2 border-2 border-indigo-400"
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title bg-base-300 hover:font-bold text-base-content peer-checked:bg-base peer-checked:text-base-content">
                    {lesson.title}
                  </div>
                  <div className="collapse-content bg-base-300 text-base-content peer-checked:bg-base peer-checked:text-base-content">
                    <p>{lesson.description}</p>
                    <LessonContentModal id={lesson.id} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
