// import logo from "./logo.svg";
import "./App.css";
import mobileimg from "./mobile1.png";
import t_image_1 from "./t-image1.png";
import t_image_2 from "./t-image-2.png";
import t_image_3 from "./t-image-3.png";
import t_image_4 from "./t-image-4.png";
import t_image_5 from "./t-image-5.png";

function App() {
  return (
    <div className="">
      {/* mobile */}
      <div className="bg-black h-screen lg:hidden">
        <div className="h-3/5 w-full bg-green-500 relative mobile1">
          <div className="absolute h-full w-full bg-red-00 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="120px"
              viewBox="0 0 24 24"
              width="120px"
              fill="#ff10f0"
              className="cursor-pointer"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 16.5l6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <div className="bg-red-00  pt-10">
            <div className="px-5 z-1">
              <svg
                width="8"
                height="19"
                viewBox="0 0 8 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67262 18.9999C6.50185 19.0006 6.33312 18.9559 6.17883 18.869C6.02454 18.7821 5.88861 18.6553 5.78103 18.4978L0.260033 10.3557C0.0919094 10.1129 0 9.80834 0 9.49402C0 9.1797 0.0919094 8.87513 0.260033 8.63231L5.97535 0.490225C6.16937 0.2131 6.44818 0.0388259 6.75043 0.00574221C7.05269 -0.0273414 7.35363 0.083475 7.58707 0.313813C7.8205 0.54415 7.9673 0.875142 7.99516 1.23397C8.02303 1.5928 7.92969 1.95008 7.73566 2.2272L2.62617 9.5008L7.5642 16.7744C7.70398 16.9736 7.79277 17.2161 7.82007 17.4734C7.84736 17.7306 7.81202 17.9917 7.71823 18.2258C7.62443 18.46 7.47611 18.6573 7.29081 18.7945C7.1055 18.9316 6.89098 19.0029 6.67262 18.9999Z"
                  fill="white"
                  fillOpacity="0.64"
                />
              </svg>
            </div>
            <div className="shad text-gray-500 absolute bottom-1 text-lg w-full h-full z-0  ">
              <div className="bg-red-00 inline absolute bottom-10 right-5">
                2hr 20m
              </div>
            </div>
          </div>
        </div>
        <div className="h-2/5">
          <div className=" bg-black text-white text-lg font-semibold absolute -mt-10 w-full ">
            <div className="flex justify-evenly px-1 py-2 bg-red-00 max-w-lg m-auto">
              <div className="bg-gray-900 rounded-lg px-3 py-1">18+</div>
              <div className="bg-gray-900 rounded-lg px-3 py-1">Action</div>
              <div className="bg-gray-900 rounded-lg px-3 py-1 flex items-center">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="#FFCB21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.19075 0.6309L5.87378 4.72369L5.87073 4.73316L5.87064 4.73313C5.7947 4.95395 5.65766 5.15301 5.46882 5.29783C5.27929 5.44319 5.04763 5.5256 4.80448 5.52493M7.19075 0.6309L4.80532 5.02493M7.19075 0.6309C7.19279 0.625476 7.19475 0.620001 7.19662 0.614477C7.2163 0.556236 7.2426 0.530323 7.25873 0.518652C7.27653 0.505767 7.29603 0.5 7.31519 0.5C7.33435 0.5 7.35396 0.505772 7.37192 0.518758C7.38794 0.530341 7.41375 0.55573 7.43341 0.612066M7.19075 0.6309L10.4637 9.52231M4.80448 5.52493C4.80414 5.52493 4.80379 5.52493 4.80345 5.52493L4.80532 5.02493M4.80448 5.52493H4.80532V5.02493M4.80448 5.52493H1.55043C1.52371 5.52493 1.50705 5.53222 1.49065 5.54595C1.47027 5.56301 1.44541 5.59584 1.42987 5.64552C1.39696 5.75076 1.42611 5.84488 1.48804 5.89868C1.49745 5.90685 1.50656 5.91538 1.51533 5.92424L3.81975 8.25034M4.80532 5.02493H1.55043C0.950259 5.02493 0.686644 5.86481 1.16013 6.27614L3.47636 8.61416M3.81975 8.25034C3.8142 8.24536 3.80859 8.24042 3.80292 8.23553L3.47636 8.61416M3.81975 8.25034L3.83157 8.26227L3.47636 8.61416M3.81975 8.25034C3.99589 8.4084 4.11738 8.61639 4.17653 8.84144C4.23514 9.06441 4.23196 9.30108 4.1672 9.52232M3.47636 8.61416C3.58012 8.70365 3.65594 8.8277 3.69296 8.96853C3.72997 9.10936 3.72627 9.25973 3.68239 9.39805M4.1672 9.52232L4.17169 9.50095L3.68239 9.39805M4.1672 9.52232C4.16456 9.53132 4.16183 9.54029 4.15899 9.54924L3.68239 9.39805M4.1672 9.52232L3.32582 13.5231C3.32233 13.5396 3.31799 13.5561 3.31283 13.5722C3.27437 13.6927 3.31844 13.7834 3.37278 13.8287C3.40007 13.8514 3.42247 13.8565 3.4332 13.857L3.43328 13.857C3.43878 13.8573 3.45716 13.8582 3.49151 13.831C3.49803 13.8259 3.50467 13.8209 3.51143 13.8161L6.64898 11.5825M3.68239 9.39805L2.83652 13.4201L6.94752 11.9837M6.64898 11.5825C6.64528 11.5853 6.6416 11.5882 6.63794 11.5911L6.94752 11.9837M6.64898 11.5825L6.65755 11.5764L6.94752 11.9837M6.64898 11.5825C6.83894 11.4365 7.0712 11.3532 7.31543 11.3532C7.55965 11.3532 7.79191 11.4365 7.98186 11.5825M6.94752 11.9837C7.05526 11.8988 7.18374 11.8532 7.31543 11.8532C7.44712 11.8532 7.5756 11.8988 7.68334 11.9837M7.98186 11.5825L7.97331 11.5764L7.68334 11.9837M7.98186 11.5825L11.1194 13.8161C11.1261 13.8208 11.1327 13.8258 11.1391 13.8308C11.1739 13.8583 11.1925 13.8574 11.1981 13.8571L11.1981 13.8571C11.2089 13.8566 11.2312 13.8515 11.2583 13.8289C11.3123 13.784 11.3567 13.6934 11.318 13.5721C11.3128 13.556 11.3085 13.5396 11.305 13.5231L10.4637 9.52231M7.98186 11.5825C7.98557 11.5853 7.98925 11.5882 7.99292 11.5911L7.68334 11.9837M7.68334 11.9837L10.4637 9.52231M10.4637 9.52231C10.4663 9.53131 10.469 9.54029 10.4719 9.54924L10.9485 9.39805L10.4592 9.50095L10.4637 9.52231ZM10.4637 9.52231C10.3989 9.30107 10.3957 9.06441 10.4543 8.84144C10.5135 8.61639 10.635 8.4084 10.8111 8.25034M10.8111 8.25034L10.7993 8.26227L11.1545 8.61416L10.8279 8.23553C10.8223 8.24042 10.8167 8.24535 10.8111 8.25034ZM10.8111 8.25034L13.1155 5.92424C13.1242 5.91546 13.1332 5.90701 13.1426 5.8989C13.2046 5.84496 13.2337 5.75056 13.2009 5.64538C13.1854 5.59578 13.1606 5.56306 13.1402 5.54606C13.1239 5.5324 13.1071 5.52493 13.0798 5.52493H9.8249C9.32062 5.52493 8.91179 5.18066 8.75903 4.73153L8.75637 4.72371L8.75644 4.72369L7.43341 0.612066M7.43341 0.612066C7.43374 0.61301 7.43407 0.613964 7.43439 0.614926L7.90792 0.454397L7.43196 0.607552L7.43341 0.612066Z"
                    fill="#FFCB21"
                    stroke="#FFCB21"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="ml-1">5.0</div>
              </div>
              <div className=" w-16 flex flex-col items-center">
                <div className=" -mb-1">
                  <svg
                    width="17"
                    height="24"
                    viewBox="0 0 17 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.68149 23.4258C7.7889 23.5263 7.91649 23.6061 8.05696 23.6605C8.19744 23.7149 8.34803 23.7429 8.50012 23.7429C8.6522 23.7429 8.8028 23.7149 8.94327 23.6605C9.08374 23.6061 9.21134 23.5263 9.31874 23.4258L16.2562 16.951C16.4734 16.7484 16.5953 16.4736 16.5953 16.187C16.5953 15.9004 16.4734 15.6256 16.2562 15.423C16.0391 15.2203 15.7447 15.1065 15.4376 15.1065C15.1306 15.1065 14.8361 15.2203 14.619 15.423L9.65637 20.0568V1.07913C9.65637 0.79293 9.53455 0.518448 9.31771 0.316071C9.10087 0.113694 8.80677 0 8.50012 0C8.19346 0 7.89936 0.113694 7.68253 0.316071C7.46569 0.518448 7.34387 0.79293 7.34387 1.07913V20.0568L2.38124 15.423C2.16413 15.2203 1.86966 15.1065 1.56262 15.1065C1.25557 15.1065 0.961106 15.2203 0.743993 15.423C0.52688 15.6256 0.404907 15.9004 0.404907 16.187C0.404907 16.4736 0.52688 16.7484 0.743993 16.951L7.68149 23.4258Z"
                      fill="#F8F9FF"
                    />
                  </svg>
                </div>
                <div className="">
                  <svg
                    width="37"
                    height="11"
                    viewBox="0 0 37 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.15625 0.208496C1.46291 0.208496 1.757 0.322191 1.97384 0.524568C2.19068 0.726945 2.3125 1.00143 2.3125 1.28763V6.6833C2.3125 7.25571 2.55614 7.80467 2.98982 8.20942C3.42349 8.61418 4.01169 8.84157 4.625 8.84157H32.375C32.9883 8.84157 33.5765 8.61418 34.0102 8.20942C34.4439 7.80467 34.6875 7.25571 34.6875 6.6833V1.28763C34.6875 1.00143 34.8093 0.726945 35.0262 0.524568C35.243 0.322191 35.5371 0.208496 35.8438 0.208496C36.1504 0.208496 36.4445 0.322191 36.6613 0.524568C36.8782 0.726945 37 1.00143 37 1.28763V6.6833C37 7.82811 36.5127 8.92604 35.6454 9.73555C34.778 10.5451 33.6016 10.9998 32.375 10.9998H4.625C3.39837 10.9998 2.22199 10.5451 1.35463 9.73555C0.487275 8.92604 0 7.82811 0 6.6833V1.28763C0 1.00143 0.121819 0.726945 0.338658 0.524568C0.555497 0.322191 0.849593 0.208496 1.15625 0.208496Z"
                      fill="#F8F9FF"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 20C2.2 20 0 17.8 0 15C0 12.2 2.2 10 5 10C7.8 10 10 12.2 10 15C10 17.8 7.8 20 5 20ZM5 12C3.3 12 2 13.3 2 15C2 16.7 3.3 18 5 18C6.7 18 8 16.7 8 15C8 13.3 6.7 12 5 12Z"
                    fill="#F8F9FF"
                  />
                  <path
                    d="M25 10C22.2 10 20 7.8 20 5C20 2.2 22.2 0 25 0C27.8 0 30 2.2 30 5C30 7.8 27.8 10 25 10ZM25 2C23.3 2 22 3.3 22 5C22 6.7 23.3 8 25 8C26.7 8 28 6.7 28 5C28 3.3 26.7 2 25 2Z"
                    fill="#F8F9FF"
                  />
                  <path
                    d="M25 30C22.2 30 20 27.8 20 25C20 22.2 22.2 20 25 20C27.8 20 30 22.2 30 25C30 27.8 27.8 30 25 30ZM25 22C23.3 22 22 23.3 22 25C22 26.7 23.3 28 25 28C26.7 28 28 26.7 28 25C28 23.3 26.7 22 25 22Z"
                    fill="#F8F9FF"
                  />
                  <path
                    d="M9.00706 15.885L21.8871 22.325L20.9921 24.113L8.11206 17.673L9.00706 15.885Z"
                    fill="#F8F9FF"
                  />
                  <path
                    d="M20.993 5.88501L21.887 7.67501L9.00704 14.113L8.11304 12.323L20.993 5.88501Z"
                    fill="#F8F9FF"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" px-5 h-full text-white flex flex-col justify-evenly max-w-md m-auto">
            <div className="text-3xl font-bold">The Witcher</div>
            <div className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
              mattis purus sed venenatis. Molestie non et lobortis in integer.
              Habitasse at ornare sit quam. Rhoncus, ac fermentum id et
              vulputate.
            </div>
            <div className="bg-red-00 text-center">
              <button className=" border-2 border-white  text-white font-semibold text-lg px-12 py-3 rounded-md">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* web */}
      <div className="  hidden lg:flex">
        <div className="w-2/5 desk-left flex items-center justify-center">
          <div className=" text-white bg-red-00 w-4/5">
            <div className="font-bold text-4xl ">The Witcher</div>
            <div className="font-semibold tracking-wider my-2">Season 1</div>
            <div className="flex">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33134 0.673951L5.77304 4.99055L5.76934 5.00079L5.76923 5.00075C5.67819 5.2367 5.51766 5.43946 5.30887 5.58219C5.10034 5.72473 4.8535 5.80069 4.60093 5.80004M7.33134 0.673951L4.60162 5.30004M7.33134 0.673951C7.33377 0.668207 7.3361 0.662401 7.33832 0.656536C7.41683 0.449463 7.72294 0.447008 7.80456 0.654095M7.33134 0.673951L7.80456 0.654095M4.60093 5.80004C4.60061 5.80004 4.60028 5.80004 4.59996 5.80004L4.60162 5.30004M4.60093 5.80004H4.60162V5.30004M4.60093 5.80004H0.750005C0.499953 5.80004 0.423809 6.09243 0.594263 6.22442C0.603986 6.23195 0.613428 6.23983 0.62257 6.24806L3.35094 8.70283M4.60162 5.30004H0.750005C0.0397994 5.30004 -0.272146 6.18591 0.288144 6.61975L3.02902 9.08579M3.35094 8.70283C3.34526 8.6983 3.33953 8.69382 3.33376 8.68938L3.02902 9.08579M3.35094 8.70283C3.54867 8.86048 3.69329 9.07525 3.76491 9.31814C3.83565 9.55805 3.83169 9.81356 3.75395 10.0508L2.75851 14.2697C2.75422 14.2879 2.7489 14.3059 2.74259 14.3235C2.70423 14.4306 2.73816 14.5245 2.82584 14.5896C2.91444 14.6553 3.02421 14.6648 3.12584 14.5933C3.13238 14.5887 3.13902 14.5843 3.14577 14.58L6.85996 12.2232C7.06938 12.0793 7.31761 12.0022 7.57192 12.0022C7.82623 12.0022 8.07445 12.0793 8.28388 12.2232L11.9981 14.58C12.0047 14.5842 12.0113 14.5886 12.0177 14.5931C12.1202 14.6652 12.2302 14.6552 12.3183 14.5898C12.4055 14.5251 12.4398 14.4313 12.4012 14.3233C12.3949 14.3058 12.3896 14.2879 12.3853 14.2697L11.3899 10.0508C11.3121 9.81356 11.3082 9.55805 11.3789 9.31815C11.4505 9.07525 11.5952 8.86048 11.7929 8.70283L14.5213 6.24805C14.5303 6.2399 14.5397 6.23209 14.5493 6.22462C14.7204 6.09198 14.6435 5.80004 14.3931 5.80004H10.5415C10.0247 5.80004 9.5578 5.48283 9.37319 4.99902L9.36996 4.99057L9.37004 4.99055L7.80456 0.654095M3.35094 8.70283L3.36345 8.71409L3.02902 9.08579M3.02902 9.08579C3.1518 9.18017 3.24152 9.31102 3.28533 9.45956C3.32913 9.6081 3.32475 9.7667 3.27283 9.91259L2.27187 14.1549C2.02807 14.8356 2.81778 15.4216 3.41366 15.0021L7.80456 0.654095"
                  fill="#FFCB21"
                  stroke="#FFCB21"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33134 0.673951L5.77304 4.99055L5.76934 5.00079L5.76923 5.00075C5.67819 5.2367 5.51766 5.43946 5.30887 5.58219C5.10034 5.72473 4.8535 5.80069 4.60093 5.80004M7.33134 0.673951L4.60162 5.30004M7.33134 0.673951C7.33377 0.668207 7.3361 0.662401 7.33832 0.656536C7.41683 0.449463 7.72294 0.447008 7.80456 0.654095M7.33134 0.673951L7.80456 0.654095M4.60093 5.80004C4.60061 5.80004 4.60028 5.80004 4.59996 5.80004L4.60162 5.30004M4.60093 5.80004H4.60162V5.30004M4.60093 5.80004H0.750005C0.499953 5.80004 0.423809 6.09243 0.594263 6.22442C0.603986 6.23195 0.613428 6.23983 0.62257 6.24806L3.35094 8.70283M4.60162 5.30004H0.750005C0.0397994 5.30004 -0.272146 6.18591 0.288144 6.61975L3.02902 9.08579M3.35094 8.70283C3.34526 8.6983 3.33953 8.69382 3.33376 8.68938L3.02902 9.08579M3.35094 8.70283C3.54867 8.86048 3.69329 9.07525 3.76491 9.31814C3.83565 9.55805 3.83169 9.81356 3.75395 10.0508L2.75851 14.2697C2.75422 14.2879 2.7489 14.3059 2.74259 14.3235C2.70423 14.4306 2.73816 14.5245 2.82584 14.5896C2.91444 14.6553 3.02421 14.6648 3.12584 14.5933C3.13238 14.5887 3.13902 14.5843 3.14577 14.58L6.85996 12.2232C7.06938 12.0793 7.31761 12.0022 7.57192 12.0022C7.82623 12.0022 8.07445 12.0793 8.28388 12.2232L11.9981 14.58C12.0047 14.5842 12.0113 14.5886 12.0177 14.5931C12.1202 14.6652 12.2302 14.6552 12.3183 14.5898C12.4055 14.5251 12.4398 14.4313 12.4012 14.3233C12.3949 14.3058 12.3896 14.2879 12.3853 14.2697L11.3899 10.0508C11.3121 9.81356 11.3082 9.55805 11.3789 9.31815C11.4505 9.07525 11.5952 8.86048 11.7929 8.70283L14.5213 6.24805C14.5303 6.2399 14.5397 6.23209 14.5493 6.22462C14.7204 6.09198 14.6435 5.80004 14.3931 5.80004H10.5415C10.0247 5.80004 9.5578 5.48283 9.37319 4.99902L9.36996 4.99057L9.37004 4.99055L7.80456 0.654095M3.35094 8.70283L3.36345 8.71409L3.02902 9.08579M3.02902 9.08579C3.1518 9.18017 3.24152 9.31102 3.28533 9.45956C3.32913 9.6081 3.32475 9.7667 3.27283 9.91259L2.27187 14.1549C2.02807 14.8356 2.81778 15.4216 3.41366 15.0021L7.80456 0.654095"
                  fill="#FFCB21"
                  stroke="#FFCB21"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33134 0.673951L5.77304 4.99055L5.76934 5.00079L5.76923 5.00075C5.67819 5.2367 5.51766 5.43946 5.30887 5.58219C5.10034 5.72473 4.8535 5.80069 4.60093 5.80004M7.33134 0.673951L4.60162 5.30004M7.33134 0.673951C7.33377 0.668207 7.3361 0.662401 7.33832 0.656536C7.41683 0.449463 7.72294 0.447008 7.80456 0.654095M7.33134 0.673951L7.80456 0.654095M4.60093 5.80004C4.60061 5.80004 4.60028 5.80004 4.59996 5.80004L4.60162 5.30004M4.60093 5.80004H4.60162V5.30004M4.60093 5.80004H0.750005C0.499953 5.80004 0.423809 6.09243 0.594263 6.22442C0.603986 6.23195 0.613428 6.23983 0.62257 6.24806L3.35094 8.70283M4.60162 5.30004H0.750005C0.0397994 5.30004 -0.272146 6.18591 0.288144 6.61975L3.02902 9.08579M3.35094 8.70283C3.34526 8.6983 3.33953 8.69382 3.33376 8.68938L3.02902 9.08579M3.35094 8.70283C3.54867 8.86048 3.69329 9.07525 3.76491 9.31814C3.83565 9.55805 3.83169 9.81356 3.75395 10.0508L2.75851 14.2697C2.75422 14.2879 2.7489 14.3059 2.74259 14.3235C2.70423 14.4306 2.73816 14.5245 2.82584 14.5896C2.91444 14.6553 3.02421 14.6648 3.12584 14.5933C3.13238 14.5887 3.13902 14.5843 3.14577 14.58L6.85996 12.2232C7.06938 12.0793 7.31761 12.0022 7.57192 12.0022C7.82623 12.0022 8.07445 12.0793 8.28388 12.2232L11.9981 14.58C12.0047 14.5842 12.0113 14.5886 12.0177 14.5931C12.1202 14.6652 12.2302 14.6552 12.3183 14.5898C12.4055 14.5251 12.4398 14.4313 12.4012 14.3233C12.3949 14.3058 12.3896 14.2879 12.3853 14.2697L11.3899 10.0508C11.3121 9.81356 11.3082 9.55805 11.3789 9.31815C11.4505 9.07525 11.5952 8.86048 11.7929 8.70283L14.5213 6.24805C14.5303 6.2399 14.5397 6.23209 14.5493 6.22462C14.7204 6.09198 14.6435 5.80004 14.3931 5.80004H10.5415C10.0247 5.80004 9.5578 5.48283 9.37319 4.99902L9.36996 4.99057L9.37004 4.99055L7.80456 0.654095M3.35094 8.70283L3.36345 8.71409L3.02902 9.08579M3.02902 9.08579C3.1518 9.18017 3.24152 9.31102 3.28533 9.45956C3.32913 9.6081 3.32475 9.7667 3.27283 9.91259L2.27187 14.1549C2.02807 14.8356 2.81778 15.4216 3.41366 15.0021L7.80456 0.654095"
                  fill="#FFCB21"
                  stroke="#FFCB21"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33134 0.673951L5.77304 4.99055L5.76934 5.00079L5.76923 5.00075C5.67819 5.2367 5.51766 5.43946 5.30887 5.58219C5.10034 5.72473 4.8535 5.80069 4.60093 5.80004M7.33134 0.673951L4.60162 5.30004M7.33134 0.673951C7.33377 0.668207 7.3361 0.662401 7.33832 0.656536C7.41683 0.449463 7.72294 0.447008 7.80456 0.654095M7.33134 0.673951L7.80456 0.654095M4.60093 5.80004C4.60061 5.80004 4.60028 5.80004 4.59996 5.80004L4.60162 5.30004M4.60093 5.80004H4.60162V5.30004M4.60093 5.80004H0.750005C0.499953 5.80004 0.423809 6.09243 0.594263 6.22442C0.603986 6.23195 0.613428 6.23983 0.62257 6.24806L3.35094 8.70283M4.60162 5.30004H0.750005C0.0397994 5.30004 -0.272146 6.18591 0.288144 6.61975L3.02902 9.08579M3.35094 8.70283C3.34526 8.6983 3.33953 8.69382 3.33376 8.68938L3.02902 9.08579M3.35094 8.70283C3.54867 8.86048 3.69329 9.07525 3.76491 9.31814C3.83565 9.55805 3.83169 9.81356 3.75395 10.0508L2.75851 14.2697C2.75422 14.2879 2.7489 14.3059 2.74259 14.3235C2.70423 14.4306 2.73816 14.5245 2.82584 14.5896C2.91444 14.6553 3.02421 14.6648 3.12584 14.5933C3.13238 14.5887 3.13902 14.5843 3.14577 14.58L6.85996 12.2232C7.06938 12.0793 7.31761 12.0022 7.57192 12.0022C7.82623 12.0022 8.07445 12.0793 8.28388 12.2232L11.9981 14.58C12.0047 14.5842 12.0113 14.5886 12.0177 14.5931C12.1202 14.6652 12.2302 14.6552 12.3183 14.5898C12.4055 14.5251 12.4398 14.4313 12.4012 14.3233C12.3949 14.3058 12.3896 14.2879 12.3853 14.2697L11.3899 10.0508C11.3121 9.81356 11.3082 9.55805 11.3789 9.31815C11.4505 9.07525 11.5952 8.86048 11.7929 8.70283L14.5213 6.24805C14.5303 6.2399 14.5397 6.23209 14.5493 6.22462C14.7204 6.09198 14.6435 5.80004 14.3931 5.80004H10.5415C10.0247 5.80004 9.5578 5.48283 9.37319 4.99902L9.36996 4.99057L9.37004 4.99055L7.80456 0.654095M3.35094 8.70283L3.36345 8.71409L3.02902 9.08579M3.02902 9.08579C3.1518 9.18017 3.24152 9.31102 3.28533 9.45956C3.32913 9.6081 3.32475 9.7667 3.27283 9.91259L2.27187 14.1549C2.02807 14.8356 2.81778 15.4216 3.41366 15.0021L7.80456 0.654095"
                  fill="#FFCB21"
                  stroke="#FFCB21"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33134 0.673951L5.77304 4.99055L5.76934 5.00079L5.76923 5.00075C5.67819 5.2367 5.51766 5.43946 5.30887 5.58219C5.10034 5.72473 4.8535 5.80069 4.60093 5.80004M7.33134 0.673951L4.60162 5.30004M7.33134 0.673951C7.33377 0.668207 7.3361 0.662401 7.33832 0.656536C7.41683 0.449463 7.72294 0.447008 7.80456 0.654095M7.33134 0.673951L7.80456 0.654095M4.60093 5.80004C4.60061 5.80004 4.60028 5.80004 4.59996 5.80004L4.60162 5.30004M4.60093 5.80004H4.60162V5.30004M4.60093 5.80004H0.750005C0.499953 5.80004 0.423809 6.09243 0.594263 6.22442C0.603986 6.23195 0.613428 6.23983 0.62257 6.24806L3.35094 8.70283M4.60162 5.30004H0.750005C0.0397994 5.30004 -0.272146 6.18591 0.288144 6.61975L3.02902 9.08579M3.35094 8.70283C3.34526 8.6983 3.33953 8.69382 3.33376 8.68938L3.02902 9.08579M3.35094 8.70283C3.54867 8.86048 3.69329 9.07525 3.76491 9.31814C3.83565 9.55805 3.83169 9.81356 3.75395 10.0508L2.75851 14.2697C2.75422 14.2879 2.7489 14.3059 2.74259 14.3235C2.70423 14.4306 2.73816 14.5245 2.82584 14.5896C2.91444 14.6553 3.02421 14.6648 3.12584 14.5933C3.13238 14.5887 3.13902 14.5843 3.14577 14.58L6.85996 12.2232C7.06938 12.0793 7.31761 12.0022 7.57192 12.0022C7.82623 12.0022 8.07445 12.0793 8.28388 12.2232L11.9981 14.58C12.0047 14.5842 12.0113 14.5886 12.0177 14.5931C12.1202 14.6652 12.2302 14.6552 12.3183 14.5898C12.4055 14.5251 12.4398 14.4313 12.4012 14.3233C12.3949 14.3058 12.3896 14.2879 12.3853 14.2697L11.3899 10.0508C11.3121 9.81356 11.3082 9.55805 11.3789 9.31815C11.4505 9.07525 11.5952 8.86048 11.7929 8.70283L14.5213 6.24805C14.5303 6.2399 14.5397 6.23209 14.5493 6.22462C14.7204 6.09198 14.6435 5.80004 14.3931 5.80004H10.5415C10.0247 5.80004 9.5578 5.48283 9.37319 4.99902L9.36996 4.99057L9.37004 4.99055L7.80456 0.654095M3.35094 8.70283L3.36345 8.71409L3.02902 9.08579M3.02902 9.08579C3.1518 9.18017 3.24152 9.31102 3.28533 9.45956C3.32913 9.6081 3.32475 9.7667 3.27283 9.91259L2.27187 14.1549C2.02807 14.8356 2.81778 15.4216 3.41366 15.0021L7.80456 0.654095"
                  fill="#FFCB21"
                  stroke="#FFCB21"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="my-3">Action | Drama | Thriller</div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
              mattis purus sed venenatis. Molestie non et lobortis in integer.
              Habitasse at ornare sit quam. Rhoncus, ac fermentum id et
              vulputate.
            </div>
            <div className="my-8 bg-red-00 w-full flex justify-between max-w-sm">
              <button className="play-now rounded h-12 w-40 text-center text-sm font-semibold ">
                Play Now
              </button>
              <button className="border-2 h-12 w-40 border-white rounded text-center text-sm font-semibold">
                Download
              </button>
            </div>
            {/* Trading Now */}
            <div className="-ml-2">
              <div className="ml-2">Trending Now</div>
              <div className="bg-red-00 py-5 flex">
                <div className="bg-white h-20 w-16 rounded-lg mx-2">
                  <img
                    className="w-full h-full"
                    alt="t-img-1"
                    src={t_image_1}
                  />
                </div>
                <div className="bg-white h-20 w-16 rounded-lg mx-2">
                  <img
                    className="w-full h-full"
                    alt="t-img-1"
                    src={t_image_2}
                  />
                </div>
                <div className="bg-white h-20 w-16 rounded-lg mx-2">
                  <img
                    className="w-full h-full"
                    alt="t-img-1"
                    src={t_image_3}
                  />
                </div>
                <div className="bg-white h-20 w-16 rounded-lg mx-2">
                  <img
                    className="w-full h-full"
                    alt="t-img-1"
                    src={t_image_4}
                  />
                </div>
                <div className="bg-white h-20 w-16 rounded-lg mx-2">
                  <img
                    className="w-full h-full"
                    alt="t-img-1"
                    src={t_image_5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="bg-red-00 shad-desk w-3/5 h-screen absolute"></div>
          <img className="w-full h-screen" alt="desk-img" src={mobileimg} />
        </div>
      </div>
    </div>
  );
}

export default App;
