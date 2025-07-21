import { useEffect, useState } from "react";

export default function EditorSection() {
  const actionBtns = [
    { name: "Save Template", action: "#save" },
    { name: "Back", action: "#back" },
  ];

  const [text, setText] = useState(`[Hiring Manager]
[Company Name]
[Company Address]
[City, ZIP Code]

Good day, Hiring Manager,

I am writing to express my interest in the [Position Applying For] at your company. I will be graduating in August 2025 with a Bachelor's degree in Information Technology, and I am excited to bring my hands-on experience in full-stack web development into a professional environment where I can continue to grow and contribute meaningfully.

During my internship at Lightweight Global Tech Solutions Corp., I worked closely with a software development team to build a custom AI chatbot. I focused on the frontend using technologies such as Next.js, ShadCN, TailwindCSS, and Zustand. As I quickly adapted to new tools, my mentor entrusted me with backend tasks using Python, OpenAI, and LangChain. This experience strengthened both my technical skills and my confidence in learning emerging technologies.

I would be honored to bring my enthusiasm, adaptability, and growing skill set to your team. Thank you for considering my application.

Sincerely,
Love Missy B. Sumatra`);

  const [detectedPlaceholders, setDetectedPlaceholders] = useState([
    { name: "Name", value: "[Your Name]" },
    { name: "Position", value: "[Position Title]" },
    { name: "Company", value: "[Company Name]" },
  ]);

  const updateText = (newText: string) => {
    setText(newText);
  };

  const extractPlaceholders = (text: string) => {
    const matches = text.match(/\[([^\]]+)\]/g);
    return matches ? matches.map((match) => match.slice(1, -1)) : [];
  };

  useEffect(() => {
    // extract placeholders from the initial text
    const placeholders = extractPlaceholders(text) || [];
    const formattedPlaceholders = placeholders.map((name: string) => ({
      name,
      value: `[${name}]`,
    }));
    setDetectedPlaceholders(formattedPlaceholders);
  }, [text]);

  return (
    <div className="bg-white/1 border-y-1 border-white/10 mx-auto w-full">
      <div className="px-5 py-4 flex bg-white/2 items-center align-baseline justify-between border-b-1 border-white/10">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl text-white font-bold">
            Software Developer Template
          </h1>
          <div className="h-2 w-2 bg-amber-500/50 rounded-full mt-2"></div>
        </div>

        <div className="flex gap-4">
          {actionBtns.map((btn) => (
            <button
              key={btn.name}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-2xl text-white py-1 px-4 rounded-lg border-1 border-white/10 text-md font-light transition-colors duration-300"
              onClick={() => (window.location.href = btn.action)}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 border-b-1 border-white/10">
        {/* left side: template preview */}
        <div className="">
          <div className="bg-white/1 p-5  border-b-1 border-white/10">
            <h3 className="text-white font-medium">Letter Content</h3>
            <p className="text-white/20 font-light text-[12px]">
              Edit your cover letter template. Use [brackets] for placeholders
            </p>
          </div>
          <div className="p-2">
            <textarea
              value={text}
              onChange={(e) => {
                updateText(e.target.value);
              }}
              className="p-10 w-full h-100 bg-transparent text-white outline-0 focus:ring-0 focus:border-0 max-h-95 overflow-y-auto"
            />
          </div>
        </div>

        {/*  */}
        <div className="">
          <div className="lg:border-l-1 border-white/10 bg-white/1 p-5 border-b-1 sm:border-t-1 lg:border-t-0">
            <h3 className="text-white font-medium">Customize Letter</h3>
            <p className="text-white/20 font-light text-[12px]">
              Fill in placeholder values and export
            </p>
          </div>

          <div className="lg:border-l-1 border-white/10 p-5 flex flex-col gap-4 max-h-100 overflow-y-auto">
            <div className="border-1 border-l-4 border-white/10 pl-2 rounded-lg flex flex-col gap-2 py-4">
              <h3 className="text-white/50 text-[12px] font-medium">
                Detected Placeholders
              </h3>
              <div className="flex flex-wrap gap-2">
                {detectedPlaceholders.map((placeholder) => (
                  <div className="w-fit px-2 bg-red-500 rounded-full text-[12px] font-medium text-white">
                    {placeholder.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {detectedPlaceholders.map((placeholder) => (
                <>
                  <label className="text-[12px] font-light text-white">
                    {placeholder.name}
                  </label>
                  <input
                    placeholder={`e.g. Your ${placeholder.name}`}
                    className="border-1 border-white/10 rounded p-2 text-[12px] font-light text-white focus:outline-2 focus:outline-blue-100/10"
                  />
                </>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="w-fit bg-white/10 hover:bg-white/20 backdrop-blur-2xl text-white py-1 px-4 rounded-lg border-1 border-white/10 text-md font-light transition-colors duration-300">
                Preview
              </button>
              <button className="w-full  bg-white/10 hover:bg-white/20 backdrop-blur-2xl text-white py-1 px-4 rounded-lg border-1 border-white/10 text-md font-light transition-colors duration-300">
                Generate PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
