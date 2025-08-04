import ShimmerUI from "../pages/shimmer/ShimmerUI"
import InfiniteScroll from "../pages/infiniteScroll/InfiniteScroll"
import Accordion from "../pages/accordian/Accordion"
import NestedComments from "../pages/NestedComments/NestedComments"
import Carousel from "../pages/carousel/Carousel"

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
  {
    name: 'Nested Comments',
    path: '/comments',
    element: <NestedComments/>
  },
  {
    name: 'Carousel',
    path: '/carousel',
    element: <Carousel/>
  },
]