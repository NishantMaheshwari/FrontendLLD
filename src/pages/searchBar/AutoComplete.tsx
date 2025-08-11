import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { fetchAutocompleteSuggestions } from '../../api/fetch'

interface Recipe {
  id: number,
  name: string,
  difficulty: string
}

const AutoComplete = (): ReactElement => {

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Recipe[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const cache = useRef<Map<string, Recipe[]>>(new Map());

  useEffect(() => {
    const s = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(s);
  }, [searchQuery]);

  const fetchData = async () => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    if (cache.current.has(searchQuery)) {
      setSuggestions(cache.current.get(searchQuery)!);
      return;
    }

    const data = await fetchAutocompleteSuggestions(searchQuery);
    const results = data.recipes || [];
    cache.current.set(searchQuery, results);
    setSuggestions(results);
  }
  console.log(suggestions);
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-[40vw] h-[3vw] border-1 border-gray-950'>
        <div className='flex py-1.5 px-2 mb-1'>
          <input className='w-[90%] h-full focus:border-transparent focus:outline-none'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            type='text'
            placeholder='Type here...'>
          </input>
          <button className='w-[10%] h-full'>

          </button>
        </div>
        <div className='w-full rounded-b-2xl border-1 border-l-black border-r-black border-b-black'>
          {
            searchQuery && showSuggestions && suggestions.map((suggestion, index) => (
              <div key={suggestion.id} className={`flex w-full h-[2vw] px-2 py-1 ${(index < suggestions.length - 1) ? 'border-b-gray-500 border-b-1' : ''} cursor-pointer hover:bg-blue-400`}>
                {suggestion.name}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AutoComplete