"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchTerm) {
      router.push(`/results/${searchTerm}`);
    }
    setSearchTerm("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search"
        className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black"
      />
    </form>
  );
};

export default Search;
