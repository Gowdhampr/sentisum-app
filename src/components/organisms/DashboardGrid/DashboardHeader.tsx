import React from "react";

const DashboardHeader = () => {
  return (
    <div>
      <div className="mr-4 flex justify-between gap-2">
        <div className="flex items-start justify-center">
          <button
            data-state="inactive"
            className="text-left flex items-baseline gap-2 pb-2 pl-3 text-xl"
          >
            <span
              className="line-clamp-1 px-1 font-sherika text-3xl font-semibold text-zinc-700"
              data-tooltip-hidden="true"
              data-tooltip-content="Unified Insights"
              data-tooltip-id="tooltip"
              data-tooltip-class-name="whitespace-pre-line max-w-[28rem]"
            >
              Unified Insights
            </span>
            <span
              className="flex items-center justify-center rounded-md p-1.5 hover:bg-gray-100"
              data-tooltip-id="tooltip"
              data-tooltip-content="Edit Dashboard Name"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-sm text-gray-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </span>
          </button>
          <a data-state="closed" role="button">
            <span className="mt-0.5 flex items-center justify-center rounded-md p-1.5 hover:bg-gray-100">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-gray-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </span>
          </a>
        </div>
        <div className="mr-2.5 flex items-start gap-2.5 whitespace-nowrap">
          <button
            className="flex items-center gap-1 rounded-full border border-grey-900 bg-grey-900 py-2 pl-2.5 pr-2 text-sm text-white hover:border-indigo-600 hover:bg-indigo-600"
            data-testid="create-report-button"
            type="button"
            id="radix-2072"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Create
            <div className="ml-1 flex h-4 w-[1px] items-center bg-gray-500"></div>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex items-center justify-center text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <button
            className="transition duration-500 ease-in disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm hover:bg-indigo-100/30"
            type="button"
            data-testid="subscribe-button"
            id="radix-2074"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="stroke-[1.5px] text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Subscribe
          </button>
          <button
            className="transition duration-500 ease-in disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-1.5 rounded-full border border-indigo-25 bg-indigo-100/30 px-3 py-2 text-sm font-medium text-slate-700 hover:border-indigo-100/50 hover:bg-indigo-100/50"
            type="button"
            data-tooltip-id="share-tooltip"
            data-tooltip-content="Share this dashboard via public URL"
            data-tooltip-place="bottom"
            data-testid="share-button"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            Share
          </button>
          <button
            className="flex h-full pt-2 text-gray-600 hover:text-black"
            data-tooltip-content="Copy URL"
            data-tooltip-id="tooltip"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative mx-1 mb-2.5 flex flex-row items-center">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-2078"
          data-state="closed"
          className="w-fit rounded-full px-3 py-2 text-xs font-normal text-grey-500 hover:bg-indigo-50 hover:text-indigo-600"
          data-tooltip-content="Edit description"
          data-tooltip-id="tooltip"
        >
          + Add description...
        </button>
      </div>
      <div className="flex justify-between">
        <div className="dashboard-filters relative -mb-1 flex items-center gap-4 px-2 text-xs">
          <button
            type="button"
            id="radix-2079"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            className="flex items-center justify-center gap-2 rounded-full border border-white bg-grey-50 px-4 py-2.5 radix-state-open:border-blue-970 hover:border hover:border-blue-970"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="StyledIcon-sc-ofa7kd-0 h-4 w-4"
            >
              <svg
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2041_32730)">
                  <path
                    d="M13.5007 3.46484H4.16732C3.43094 3.46484 2.83398 4.0618 2.83398 4.79818V14.1315C2.83398 14.8679 3.43094 15.4648 4.16732 15.4648H13.5007C14.237 15.4648 14.834 14.8679 14.834 14.1315V4.79818C14.834 4.0618 14.237 3.46484 13.5007 3.46484Z"
                    stroke="#4F4F4F"
                    strokeWidth="1.39294"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.5007 2.13184V4.7985"
                    stroke="#4F4F4F"
                    strokeWidth="1.39294"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6.16724 2.13184V4.7985"
                    stroke="#4F4F4F"
                    strokeWidth="1.39294"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2.83398 7.46484H14.834"
                    stroke="#4F4F4F"
                    strokeWidth="1.39294"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2041_32730">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.833984 0.79834)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </svg>
            <div className="StyledBox-sc-13pk1d4-0 bjWreY">
              <span className="StyledText-sc-1sadyjn-0 jeXqHW sc-dcJsrY alLvd">
                01 - 08 Oct, 2023
              </span>
            </div>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <button
            type="button"
            id="radix-2080"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            className="flex items-center justify-center gap-2 rounded-full border border-white bg-grey-50 px-4 py-2.5 radix-state-open:border radix-state-open:border-blue-970 radix-state-open:bg-white hover:border-blue-970 hover:bg-white"
          >
            <div className="StyledBox-sc-13pk1d4-0 bjWreY">
              <span className="StyledText-sc-1sadyjn-0 jeXqHW sc-dcJsrY alLvd">
                Comparing To: 01 - 02 Sep, 2023
              </span>
            </div>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <button
            className="flex items-center gap-2 rounded-full border border-white  bg-grey-50 px-4 py-2.5 radix-state-open:border-blue-970 hover:border-blue-970"
            type="button"
            role="combobox"
            aria-controls="radix-2119"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
          >
            Daily
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <button
            data-tooltip-content="Lock the date &amp; interval"
            data-tooltip-id="tooltip"
            data-tooltip-position="top"
            className="grid place-items-center text-base"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-grey-300 hover:text-gray-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
