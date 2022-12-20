import React, { FC } from "react";

interface MovieCardProps {
  poster_path: string;
  overview: string;
  title: string;
}

const MovieCard: FC<MovieCardProps> = ({ poster_path, overview, title }) => {
  return (
    <div className="max-w-sm bg-white mx-auto rounded border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600">
      <img
        src={poster_path}
        alt={title}
        className="rounded-t-lg h-80 w-full object-cover"
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview.slice(0, 300)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
