import {Sidebar, Avatar} from "flowbite-react";
import {MdDashboard} from "react-icons/md";
import {VscReferences} from "react-icons/vsc";
import {FaTasks} from "react-icons/fa";
import {MdAnnouncement} from "react-icons/md";
import {MdOutlineUpdate} from "react-icons/md";
import {CiMoneyCheck1} from "react-icons/ci";
import {CiLogin, CiSettings} from "react-icons/ci";
import {GiCartwheel} from "react-icons/gi";
import { useState } from "react";
import {useLocation} from "react-router-dom";

export function Bar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const toggleSidebar = () => setIsOpen(!isOpen);

  const getItemClassNames = (path) =>
    `mb-7 ${location.pathname === path ? "border-l-4 border-purple-500" : ""}`;

  return (
    <div className="h-screen flex">
      <div className="hidden lg:block w-72">
        <Sidebar className="h-full">
          <div className="flex pb-14">
            <Avatar rounded />
            <div className="p-2 text-xs font-semibold">
              <p>Rapheal fulfilled</p>
              <p>@mezue_234</p>
            </div>
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                className={getItemClassNames("/dashboard")}
                href="./dashboard"
                icon={MdDashboard}
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                className={getItemClassNames("/referral")}
                href="./referral"
                icon={VscReferences}
              >
                Referral
              </Sidebar.Item>
              <Sidebar.Item
                className={getItemClassNames("/task")}
                href="./task"
                icon={FaTasks}
              >
                Tasks
              </Sidebar.Item>
              <Sidebar.Item
                className={getItemClassNames("/announcement")}
                href="./announcement"
                icon={MdAnnouncement}
              >
                Announcement
              </Sidebar.Item>
              <Sidebar.Item
                className={getItemClassNames("/update")}
                href="./update"
                icon={MdOutlineUpdate}
              >
                Contest Update
              </Sidebar.Item>
              <Sidebar.Item
                className={getItemClassNames("/withdraw")}
                href="./withdraw"
                icon={CiMoneyCheck1}
              >
                Withdraw
              </Sidebar.Item>
              <Sidebar.Collapse label="More">
                <Sidebar.Item className="mb-7" href="#">
                  Mine to Earn
                </Sidebar.Item>
                <Sidebar.Item className={getItemClassNames("/")} href="#">
                  Social Media Boosting
                </Sidebar.Item>
                <Sidebar.Item className="mb-7" href="#">
                  Influencer challenge
                </Sidebar.Item>
                <Sidebar.Item className="mb-7" href="#">
                  Raffle Draw
                </Sidebar.Item>
                <Sidebar.Item
                  className={getItemClassNames("/roulette")}
                  href="roulette"
                  icon={GiCartwheel}
                >
                  Spin and Win
                </Sidebar.Item>
                <Sidebar.Item className="mb-7" href="#">
                  Talent Hunt
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item className="mb-7" href="#" icon={CiLogin}>
                Sign Out
              </Sidebar.Item>
              <Sidebar.Item className="mb-7" href="#" icon={CiSettings}>
                Settings
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className={`lg:hidden fixed z-50 top-0 right-0 p-4`}>
        <button onClick={toggleSidebar} className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="lg:hidden fixed z-40 top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={toggleSidebar}
        >
          <div
            className="h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar className="h-full">
              <div className="flex pb-14">
                <Avatar rounded />
                <div className="p-2 text-xs font-semibold">
                  <p>Rapheal fulfilled</p>
                  <p>@mezue_234</p>
                </div>
              </div>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item
                    className="mb-7"
                    href="./dashboard"
                    icon={MdDashboard}
                  >
                    Dashboard
                  </Sidebar.Item>
                  <Sidebar.Item
                    className="mb-7"
                    href="./referral"
                    icon={VscReferences}
                  >
                    Referral
                  </Sidebar.Item>
                  <Sidebar.Item className="mb-7" href="./task" icon={FaTasks}>
                    Tasks
                  </Sidebar.Item>
                  <Sidebar.Item
                    className="mb-7"
                    href="./announcement"
                    icon={MdAnnouncement}
                  >
                    Announcement
                  </Sidebar.Item>
                  <Sidebar.Item
                    className="mb-7"
                    href="./update"
                    icon={MdOutlineUpdate}
                  >
                    Contest Update
                  </Sidebar.Item>
                  <Sidebar.Item
                    className="mb-7"
                    href="./withdraw"
                    icon={CiMoneyCheck1}
                  >
                    Withdraw
                  </Sidebar.Item>
                  <Sidebar.Collapse label="More">
                    <Sidebar.Item className="mb-7" href="#">
                      Mine to Earn
                    </Sidebar.Item>
                    <Sidebar.Item className="mb-7" href="#">
                      Social Media Boosting
                    </Sidebar.Item>
                    <Sidebar.Item className="mb-7" href="#">
                      Influencer challenge
                    </Sidebar.Item>
                    <Sidebar.Item className="mb-7" href="#">
                      Raffle Draw
                    </Sidebar.Item>
                    <Sidebar.Item
                      className="mb-7"
                      href="roulette"
                      icon={GiCartwheel}
                    >
                      Spin and Win
                    </Sidebar.Item>
                    <Sidebar.Item className="mb-7" href="#">
                      Talent Hunt
                    </Sidebar.Item>
                  </Sidebar.Collapse>
                  <Sidebar.Item className="mb-7" href="#" icon={CiLogin}>
                    Sign Out
                  </Sidebar.Item>
                  <Sidebar.Item className="mb-7" href="#" icon={CiSettings}>
                    Settings
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bar;
