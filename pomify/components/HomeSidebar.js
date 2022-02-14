import { FaClipboardList, FaRegChartBar, FiUser } from "react-icons/fa";
import { IoHomeOutline, IoSettingsOutline, IoGameControllerOutline } from 'react-icons/io5';
import { FiLogOut } from "react-icons/fi";

function HomeSidebar() {
  return (
    <div className="text-gray-500 p-5 border-gray-900">
      <div className="space-y-8">
        <div className="space-y-4">
          <button className="flex items-center space-x-2 hover:text-white">
            <IoHomeOutline size="1.5em"/>
            <p>Home</p>
          </button>  
          <button className="flex items-center space-x-2 hover:text-white">
            <FaRegChartBar size="1.5em"/>
            <p>Progress</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <IoGameControllerOutline size="1.5em"/>
            <p>Break</p>
          </button>
        </div>

        <div className="space-y-4">
          <button className="flex items-center space-x-2 hover:text-white">
            <IoSettingsOutline size="1.5em"/>
            <p>Settings</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <FiLogOut size="1.5em"/>
            <p>Logout</p>
          </button>

          <hr className="border-t-[0.1px] border-gray-900" />

          <p className="cursor-pointer hover:text-white">Playlist name...</p>
          <p className="cursor-pointer hover:text-white">Playlist name...</p>
          <p className="cursor-pointer hover:text-white">Playlist name...</p>
          <p className="cursor-pointer hover:text-white">Playlist name...</p>
          <p className="cursor-pointer hover:text-white">Playlist name...</p>
        </div>
      </div>
    </div>
  )
}

export default HomeSidebar