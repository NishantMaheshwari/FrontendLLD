import React, { useEffect, useState, useRef } from 'react'
import { fetchPaginationData } from '../../api/fetch'
import ProductCard from './ProductCard';
import PageNavigation from './PageNavigation';

const PAGE_SIZE = 10;

const OffsetPagination = () => {

  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const numProducts = useRef(0);

  const fetchProducts = async () => {
    setProducts([]);
    const data = await fetchPaginationData(PAGE_SIZE, (activePage - 1) * PAGE_SIZE);
    setProducts(data.products);
    numProducts.current = data.total;
  }

  useEffect(() => {
    fetchProducts();
  }, [activePage]);


  return (
    <div className='flex-col gap-10 mb-10 items-center'>
      <div>
        {
          products.map((product) => {
            return <ProductCard product={product} />
          })
        }
      </div>
      <PageNavigation activePage={activePage} setActivePage={setActivePage} totalPages={Math.ceil(numProducts.current / PAGE_SIZE)} />
    </div>
  )
}

export default OffsetPagination