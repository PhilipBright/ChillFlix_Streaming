import { Card } from "flowbite-react";


export default function Pricing() {
  return (
    <div className="w-screen " style={{ background:'linear-gradient(90deg, rgba(30,29,47,1) 0%, rgba(41,41,126,1) 35%, rgba(3,43,51,1) 100%)'}} >
        <h1 className="text-center text-4xl font-bold font-serif pt-5 text-white">Choose Your Favorite Plan</h1>
    <div className="flex w-screen h-[43rem] justify-evenly items-center">
        
        <div className=" w-96">
        <Card>
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      Standard plan
    </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">
        $
      </span>
      <span className="text-5xl font-extrabold tracking-tight">
        49
      </span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul
      role="list"
      className="my-7 space-y-5"
    >
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          2 team members
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          20GB Cloud storage
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          Integration help
        </span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Sketch Files
        </span>
      </li>
      <li className="flex space-x-3 decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0  text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          API Access
        </span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0  text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Complete documentation
        </span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0  text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          24×7 phone & email support
        </span>
      </li>
    </ul>
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
    >
      Choose plan
    </button>
  </Card>
  </div>
  <div className=" w-96">
        <Card>
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      Standard plan
    </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">
        $
      </span>
      <span className="text-5xl font-extrabold tracking-tight">
        49
      </span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul
      role="list"
      className="my-7 space-y-5"
    >
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          2 team members
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          20GB Cloud storage
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          Integration help
        </span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Sketch Files
        </span>
      </li>
      <li className="flex space-x-3 decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0  text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          API Access
        </span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0  text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Complete documentation
        </span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0  text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          24×7 phone & email support
        </span>
      </li>
    </ul>
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
    >
      Choose plan
    </button>
  </Card>
  </div>
  <div className=" w-96">
        <Card>
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      Standard plan
    </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">
        $
      </span>
      <span className="text-5xl font-extrabold tracking-tight">
        49
      </span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul
      role="list"
      className="my-7 space-y-5"
    >
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          2 team members
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          20GB Cloud storage
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          Integration help
        </span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Sketch Files
        </span>
      </li>
      <li className="flex space-x-3 decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0  text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          API Access
        </span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0  text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Complete documentation
        </span>
      </li>
      <li className="flex space-x-3  decoration-gray-500">
        <svg
          className="h-5 w-5 shrink-0  text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          24×7 phone & email support
        </span>
      </li>
    </ul>
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
    >
      Choose plan
    </button>
  </Card>
  </div>
  </div>
</div>
  )
}
