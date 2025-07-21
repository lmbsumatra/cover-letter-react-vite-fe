import { useAppDispatch, useAppSelector } from "../hooks/useAppSelector";
import {
  toggleMenuExpand,
  updateContent,
  updatePlaceholderValue,
} from "./file/editorSlice";

export default function EditorSection() {
  const actionBtns = [
    { name: "Save Template", action: "#save" },
    { name: "Back", action: "#back" },
  ];

  const { templates, activeTemplateId, menuExpand } = useAppSelector(
    (state) => state.editor
  );
  const dispatch = useAppDispatch();
  const activeTemplate = templates.find(
    (template) => template.id === activeTemplateId
  );

  return (
    <div className="flex border-y-1 lg:border-x-1 border-white/10 mx-auto w-full">
      {/* file menu */}
      <div
        className={` ${
          menuExpand ? `lg:max-w-200 opacity-100` : `max-w-0 opacity-0`
        } text-white bg-white/2 transition-all ease-in-out duration-300`}
      >
        <h3>Files</h3>
        {templates.map((file, i) => (
          <div key={i} className="p-2 w-fit hover:bg-white/10 pointer-cursor">
            {file.name}
          </div>
        ))}
      </div>

      <div className="bg-white/1 lg:border-x-1 border-white/10 mx-auto w-full">
        <div className="px-5 py-4 flex bg-white/2 items-center justify-between border-b-1 border-white/10">
          <div className="flex items-center gap-4 justify-center">
            <div
              className="flex relative w-8 h-6"
              onClick={() => dispatch(toggleMenuExpand())}
            >
              <div
                className={`w-8 h-1 bg-white rounded-full absolute  transition-all ease-in-out duration-1000" ${
                  menuExpand ? `-rotate-40 top-3` : `top-5`
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-white rounded-full absolute  transition-all ease-in-out duration-1000" ${
                  menuExpand ? `hidden` : `top-1`
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-white rounded-full absolute  transition-all ease-in-out duration-1000" ${
                  menuExpand ? `rotate-42 top-3` : `top-3`
                }`}
              ></div>
            </div>
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
          {activeTemplate ? (
            <>
              <div className="">
                <div className="bg-white/1 p-5  border-b-1 border-white/10">
                  <h3 className="text-white font-medium">Letter Content</h3>
                  <p className="text-white/20 font-light text-[12px]">
                    Edit your cover letter template. Use [brackets] for
                    placeholders
                  </p>
                </div>
                <div className="p-2">
                  <textarea
                    value={activeTemplate?.content}
                    onChange={(e) => {
                      dispatch(
                        updateContent({
                          id: activeTemplate?.id,
                          content: e.target.value,
                        })
                      );
                    }}
                    className="p-10 w-full h-100 bg-transparent text-white outline-0 focus:ring-0 focus:border-0 max-h-95 overflow-y-auto"
                  />
                </div>
              </div>
            </>
          ) : (
            "Please select or upload a template."
          )}

          {/* right side:  */}
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
                  {activeTemplate?.placeholders.map((placeholder, i) => (
                    <div
                      key={i}
                      className="w-fit px-2 bg-red-500 rounded-full text-[12px] font-medium text-white"
                    >
                      {placeholder.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* inputs for custom content */}
              <div>
                {activeTemplate?.placeholders.map((placeholder, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <label className="text-[12px] font-light text-white">
                      {placeholder.name}
                    </label>
                    <input
                      placeholder={`e.g. Your ${placeholder.name}`}
                      onChange={(e) =>
                        dispatch(
                          updatePlaceholderValue({
                            id: activeTemplate.id,
                            name: placeholder.name,
                            value: e.target.value,
                          })
                        )
                      }
                      className="border-1 border-white/10 rounded p-2 text-[12px] font-light text-white focus:outline-2 focus:outline-blue-100/10"
                    />
                  </div>
                ))}
              </div>

              {/* custom content action btns */}
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
    </div>
  );
}
