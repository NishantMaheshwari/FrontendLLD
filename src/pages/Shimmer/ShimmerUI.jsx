import React, { useEffect, useState } from 'react'
import { fetchShimmerData } from '../../api/fetch'
import Card from './Card';
import ShimmerCard from './ShimmerCard';

const ShimmerUI = () => {
  const [memes, setMemes] = useState();

  const fetchMemes = async () => {
    return await fetchShimmerData();
  }

  useEffect(() => {
    async function loadMemes() {
      const dataMemes = await fetchMemes();
      setMemes(dataMemes.memes);
    }
    loadMemes();
  }, []);

  return (
    <div className='flex flex-wrap'>
      {memes ?
        memes.map((meme, index) => (
          <Card key={index} meme={meme} />
        ))
        :
        <ShimmerCard count={20}/>}
    </div>
  )
}

export default ShimmerUI;
