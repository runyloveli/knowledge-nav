import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <div className="z-10 sticky w-full top-0">
        <div className="bg-white absolute inset-0 shadow-sm"></div>
        <div className="max-w-5xl mx-auto flex justify-between items-center relative z-10">
          <div className="flex-auto py-5">
            <Link
              className="text-xl font-semibold flex items-center"
              href={"/"}
            >
              <svg
                className="w-10 h-10 mr-2"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M512 341.33333336c0-94.4 76.8-171.2 171.2-171.2 94.4 0 171.2 76.8 171.2 171.2s-76.8 171.2-171.2 171.2C588.8 512.53333336 512 435.73333336 512 341.33333336z"
                  fill="#FF3C41"
                ></path>
                <path
                  d="M171.2 682.13333336c0-94.4 76.8-171.2 171.2-171.2H512v171.2C512 776.53333336 435.2 853.33333336 340.8 853.33333336s-169.6-76.8-169.6-171.2z"
                  fill="#0EBEFF"
                ></path>
                <path
                  d="M171.2 341.33333336c0 94.4 76.8 171.2 171.2 171.2H512V170.13333336H340.8c-94.4 0-169.6 76.8-169.6 171.2z"
                  fill="#FCD000"
                ></path>
                <text
                  fill="#000"
                  x="510"
                  y="830"
                  // font-family="Verdana"
                  // font-size="460"
                >
                  +
                </text>
              </svg>
              <span>NextJS Components</span>
            </Link>
          </div>
          <div className="flex-none flex items-center py-5 space-x-5 font-medium">
            <Link href={"/docs2/typescript"}>文档2</Link>
            <Link href={"/docs/user-select"}>文档</Link>
            <Link href={"/example"}>示例</Link>
            <Link href={"/blog"}>博客</Link>
            <input
              className="w-[200px] bg-gray-100 rounded p-3"
              placeholder="搜索文档"
            />
          </div>
        </div>
      </div>
      <div className="py-8 max-w-5xl mx-auto">{children}</div>
    </>
  );
}
