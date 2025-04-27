import {
  BookOpen,
  Database,
  Home,
  Layers,
  LayoutGrid,
  List,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  /**
   * This sidebar is copied from Sentisum app
   */
  return (
    <div className="flex h-screen w-16 flex-col border-r bg-white text-grey-600">
      <div className="flex h-[55px] items-center justify-center border-b">
        <Link
          aria-current="page"
          className="font-sherika text-lg font-semibold not-italic leading-3 text-gray-900"
          href="/"
        >
          <h6>senti</h6>
          <h6 className="tracking-wide">sum.</h6>
        </Link>
      </div>
      <div className="flex grow flex-col justify-between gap-4 px-2 pb-6 pt-3">
        <div className="flex flex-col items-center gap-4">
          <Link
            data-tooltip-id="navigation-sidebar-tooltip"
            data-tooltip-content="Home"
            aria-current="page"
            className="bg-indigo-600 text-white hover:!bg-indigo-600 flex rounded-full p-2 hover:bg-gray-650"
            href="/"
          >
            <Home width={16} height={16} />
          </Link>
          <Link
            data-tooltip-id="navigation-sidebar-tooltip"
            data-tooltip-description="Deep dive into tags &amp; tickets"
            data-tooltip-content="Discover"
            className="flex rounded-full p-2 hover:bg-white"
            href="/"
          >
            <BookOpen width={16} height={16} />
          </Link>
          <Link
            data-tour-element="dashboard-navigation-sidebar"
            data-tooltip-id="navigation-sidebar-tooltip"
            data-tooltip-description="Customisable dashboards &amp; reports"
            data-tooltip-content="Your Dashboards"
            className="flex rounded-full p-2 hover:bg-gray-650"
            href="/"
          >
            <LayoutGrid width={16} height={16} />
          </Link>
          <span>
            <Link
              data-tour-element="action-navigation-sidebar"
              data-anomaly-element="actions-sidebar"
              data-tooltip-id="navigation-sidebar-tooltip"
              data-tooltip-description="Track all your actions here"
              data-tooltip-content="Action Tracking"
              className="flex rounded-full p-2 hover:bg-gray-650"
              href="/"
            >
              <List width={16} height={16} />
            </Link>
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Link
            data-tour-element="integration-navigation-sidebar"
            data-tooltip-id="navigation-sidebar-tooltip"
            data-tooltip-description="Add more data sources"
            data-tooltip-content="Integrations"
            className="flex rounded-full p-2 hover:bg-gray-650"
            href="/"
          >
            <Database width={16} height={16} />
          </Link>
          <Link
            data-tour-element="dashboard-navigation-sidebar"
            data-tooltip-id="navigation-sidebar-tooltip"
            data-tooltip-description="Customise and manage tag groups"
            data-tooltip-content="Theme Management"
            className="flex rounded-full p-2 hover:bg-gray-650"
            href="/"
          >
            <Layers width={16} height={16} />
          </Link>
          <button
            id="radix-0"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            className="h-10 w-10 rounded-full border-2 border-white grid shrink-0 place-content-center text-sm font-bold uppercase drop-shadow-md react-use-css-0 transition-transform radix-state-open:scale-90 hover:scale-90"
          >
            p
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
