import { Button } from 'flowbite-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function MovieModal() {
  // const [poster, setPoster] = useState('');
  const [poster, setPoster] = useState<string | File>('');

  const [movieName, setMovieName] = useState('');
  const [overview, setOverview] = useState('');
  const [genre, setGenre] = useState('');
  const [date, setDate] = useState('');
  const [company, setCompany] = useState('');
  const [trailer, setTrailer] = useState('');
  
  const navigate = useNavigate()
  
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
    

  //   const formData = {
  //     movieName,
  //     poster,
  //     overview,
  //     genre,
  //     date,
  //     company,
  //     trailer,
  //   };

  //   try {
  //     const response = await axios.post('http://localhost:3000/api/user/addMovie', formData);

  //     if (response.status === 201) {
  //       // console.log('Movie added successfully');
  //       navigate('/Movie')
  //     } else {
  //       console.error('Failed to add movie');
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('movieName', movieName);
    formData.append('poster', poster);
    formData.append('overview', overview);
    formData.append('genre', genre);
    formData.append('date', date);
    formData.append('company', company);
    formData.append('trailer', trailer);
  
    try {
      const response = await axios.post('http://localhost:3000/api/user/addMovie', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        },
      });
  
      if (response.status === 201) {
        navigate('/Movie');
      } else {
        console.error('Failed to add movie');
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className=' w-screen h-screen flex justify-center items-center '>
    <div className=" w-fit p-8 rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-[#374151]">
      <form onSubmit={handleFormSubmit}>
        <div className="p-4.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Movie Name
              </label>
              <input
                type="text"
                value={movieName}
                onChange={(event) => setMovieName(event.target.value)}
                placeholder=""
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Production Company
              </label>
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder=""
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="mb-2 block text-black dark:text-white">
              Movie Overview
            </label>
            <textarea
              value={overview}
              onChange={(event) => setOverview(event.target.value)}
              rows={6}
              placeholder="Overview"
              className="w-full h-16 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            ></textarea>
          </div>
          <div className=" mb-4 flex flex-col gap-6 xl:flex-row">
            <div className="relative max-w-sm">
              <label className="mb-3 block text-black dark:text-white">
                Released Date
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="mt-8  z-10 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <DatePicker
                selected={date}
                onChange={handleDateChange}
                className=" z-30 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholderText="Select date"
              />
            </div>
            <div>
              <label className="mb-3 block text-black ">
                Movie Poster
              </label>
              {/* <input
                value={poster}
                onChange={(event) => setPoster(event.target.value)}
                type="file"
                className="w-full text-black cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              /> */}
              <input
  type="file"
  name='poster'
  onChange={(event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPoster(file);
    }
  }}
  
  className="w-full text-black cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
/>


            </div>
          </div>
          <div className="2">
            <label className="mb-2 block text-black dark:text-white">
              Movie Genres
            </label>
            <div className="relative z-10 bg-transparent dark:bg-form-input">
              <select
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
                className="text-black  relative z-10 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              >
                <option defaultValue={genre}>Movie Genre</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
                <option value="Drama">Drama</option>
                <option value="Cartoon">Cartoon</option>
                <option value="Action">Action</option>
              </select>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <label className="mb-1 mt-1 block text-black dark:text-white">
              Trailer Link
            </label>
            <input
              value={trailer}
              onChange={(event) => setTrailer(event.target.value)}
              type="text"
              placeholder="https://youtube.com"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <Button
            type="submit"
            name="addMovie"
            color="gray"
            className="bg-blue-700 text-gray-800 dark:text-white"
          >
            Confirm
          </Button>
        </div>
      </form>
    </div>
    </div>
  );
}