import ShimmerUI from "../pages/shimmer/ShimmerUI"
import InfiniteScroll from "../pages/infiniteScroll/InfiniteScroll"
import Accordion from "../pages/accordian/Accordion"
import NestedComments from "../pages/NestedComments/NestedComments"
import Carousels from "../pages/carousel"
import Paginations from "../pages/pagination"
import LiveChat from "../pages/liveChat/LiveChat"
import AutoComplete from "../pages/searchBar/AutoComplete"
import OtpParent from "../pages/otp"
import ProgressBarWrapper from "../pages/progress"
import TabForm from "../pages/tabForm/TabForm"
import NestedCheckbox from "../pages/nestedCheckboxes/NestedCheckbox"
import DragDrop from "../pages/dragDrop/DragDrop"
import TicTacToe from "../pages/ticTacToe"
import ToastContainer from "../pages/toast"
import StopWatch from "../pages/stopWatch"

export const pages = [
  {
    name: 'Shimmer',
    path: '/shimmer',
    element: <ShimmerUI />,
  },
  {
    name: 'Infinite Scroll',
    path: '/scroll',
    element: <InfiniteScroll />
  },
  {
    name: 'Accordian',
    path: '/accordian',
    element: <Accordion />
  },
  {
    name: 'Nested Comments',
    path: '/comments',
    element: <NestedComments />
  },
  {
    name: 'Carousel',
    path: '/carousel',
    element: <Carousels />
  },
  {
    name: 'Pagination',
    path: '/pagination',
    element: <Paginations />
  },
  {
    name: 'Live Chat',
    path: '/live-chat',
    element: <LiveChat />
  },
  {
    name: 'Autocomplete Search',
    path: '/search-bar',
    element: <AutoComplete />
  },
  {
    name: 'OTP',
    path: '/otp',
    element: <OtpParent />
  },
  {
    name: 'Progress Bar',
    path: '/progress',
    element: <ProgressBarWrapper />
  },
  {
    name: 'Tab Form',
    path: '/form',
    element: <TabForm />
  },
  {
    name: 'Nested Checkboxes',
    path: '/checkbox',
    element: <NestedCheckbox />
  },
  {
    name: 'Drag and Drop',
    path: '/drag-drop',
    element: <DragDrop />
  },
  {
    name: 'Tic Tac Toe',
    path: '/tic-tac-toe',
    element: <TicTacToe />
  },
  {
    name: 'Toast',
    path: '/toast',
    element: <ToastContainer />
  },
  {
    name: 'StopWatch',
    path: '/stop-watch',
    element: <StopWatch />
  },
]