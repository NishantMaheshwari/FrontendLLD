import React, { useEffect, useState } from 'react'
import { fetchPaginationData } from '../../api/fetch'
import ProductCard from './ProductCard';
import PageNavigation from './PageNavigation';

const PAGE_SIZE = 10;

const FrontendPagination = () => {

  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const fetchProducts = async () => {
    const data = await fetchPaginationData(100);
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const numProducts = products.length;

  const startIndex = (activePage - 1) * PAGE_SIZE;
  const endIndex = Math.min(activePage * PAGE_SIZE, numProducts);

  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <div className='flex-col gap-10 mb-10 items-center'>
      <div>
        {
          visibleProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </div>
      <PageNavigation activePage={activePage} setActivePage={setActivePage} totalPages={Math.ceil(numProducts / PAGE_SIZE)} />
    </div>
  )
}

export default FrontendPagination