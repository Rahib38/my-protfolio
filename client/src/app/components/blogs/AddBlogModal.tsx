"use client";

import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { JSX } from "react/jsx-runtime";
import AddBlog from "./AddBlog";

export default function AddBlogModal(): JSX.Element {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      if (isShowing) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal") as HTMLElement;

        if (modal) {
          const focusableContent = modal.querySelectorAll(focusableElements);
          const firstFocusableElement = focusableContent[0] as HTMLElement;
          const lastFocusableElement = focusableContent[
            focusableContent.length - 1
          ] as HTMLElement;

          function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
              setIsShowing(false);
            }

            if (e.key === "Tab") {
              if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                  lastFocusableElement.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === lastFocusableElement) {
                  firstFocusableElement.focus();
                  e.preventDefault();
                }
              }
            }
          }

          document.addEventListener("keydown", handleKeyDown);
          firstFocusableElement?.focus();

          return () => {
            document.removeEventListener("keydown", handleKeyDown);
          };
        }
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  return (
    <>
      <button
        onClick={() => setIsShowing(true)}
        className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
      >
        <span>Add Blog</span>
      </button>

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-3a content-3a"
              aria-modal="true"
              tabIndex={-1}
              role="dialog"
            >
              <div
                ref={wrapperRef}
                className="flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded  p-6 text-slate-500 shadow-xl bg-white "
                id="modal"
                role="document"
              >
                <header id="header-3a" className="flex items-center gap-4">
                  <h3 className="flex-1 text-xl font-medium text-slate-700">
                    Add a new blog...........
                  </h3>
                  <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded-full justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                <div
                  id="content-3a"
                  className=" overflow-auto"
                >
                  <AddBlog></AddBlog>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
