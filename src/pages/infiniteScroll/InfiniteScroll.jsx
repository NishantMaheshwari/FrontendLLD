import React, { useEffect, useState } from 'react'
import { fetchShimmerData } from '../../api/fetch'
import Card from './Card';
import ShimmerCard from './ShimmerCard';

const InfiniteScroll = () => {
  const [memes, setMemes] = useState([]);
  const [fetchingMore, setFetchingMore] = useState(false);

  const fetchMemes = async () => {
    return await fetchShimmerData();
  }

  const loadMemes = async () => {
    setFetchingMore(true);
    const countMemes = memes.length > 0 ? 20 : 10;
    const { memes: fetchedMemes } = await fetchShimmerData(countMemes);
    setMemes(prev => {
      return [...prev, ...fetchedMemes];
    });
    setFetchingMore(false);
  }

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      loadMemes();
    }
  }

  useEffect(() => {
    loadMemes();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='flex flex-wrap'>
      {memes.map((meme, index) => (
        <Card key={index} meme={meme} />
      ))}
      {fetchingMore && <ShimmerCard count={5} />}
    </div >
  )
}

export default InfiniteScroll;
