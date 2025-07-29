import ShimmerUI from "../pages/shimmer/ShimmerUI"
import InfiniteScroll from "../pages/infiniteScroll/InfiniteScroll"
import Accordion from "../pages/accordian/Accordion"

export const pages = [
  {
    name: 'Shimmer',
    path: '/shimmer',
    element: <ShimmerUI/>,
  },
  {
    name: 'Infinite Scroll',
    path: '/scroll',
    element: <InfiniteScroll/>
  },
  {
    name: 'Accordian',
    path: '/accordian',
    element: <Accordion/>
  },
]