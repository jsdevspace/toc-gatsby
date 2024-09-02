import * as React from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';

type TableOfContentsItem = {
  url: string;
  title: string;
  items?: TableOfContentsItem[];
};

type TableOfContentsProps = {
  items: TableOfContentsItem[];
};

const TableOfContents = ({ items }: TableOfContentsProps) => {
  return (
    <Card className='my-10 rounded p-2 pb-0 dark:bg-gray-800'>
      <CardTitle className='text-slate-900 font-semibold mb-4 dark:text-slate-100 pt-2'>
        Table of Contents
      </CardTitle>
      <CardContent>
        <ul className='text-slate-700 pb-0'>
          {items.map((item) => {
            return (
              <div key={`${item.title}`}>
                <li className='my-4'>
                  <a
                    href={`${item.url}`}
                    className='py-1 font-medium hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-200'
                  >
                    {item.title}
                  </a>
                </li>
                {item.items &&
                  item.items.length &&
                  item.items.map((item) => {
                    return (
                      <span key={`${item.title}`}>
                        <li className='ml-4 my-2' key={`${item.title}`}>
                          <a
                            href={`${item.url}`}
                            className='group flex gap-2 items-start py-1 font-medium hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-200'
                          >
                            <svg
                              width='3'
                              height='24'
                              viewBox='0 -9 3 24'
                              className='mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-400'
                            >
                              <path
                                d='M0 0L3 3L0 6'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                              ></path>
                            </svg>
                            {item.title}
                          </a>
                        </li>
                        {item.items &&
                          item.items.length &&
                          item.items.map((item) => {
                            return (
                              <li className='ml-8 my-1' key={`${item.title}`}>
                                <a
                                  href={`${item.url}`}
                                  className='group flex gap-2 items-start py-1 font-medium hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-200'
                                >
                                  <svg
                                    width='3'
                                    height='24'
                                    viewBox='0 -9 3 24'
                                    className='mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-400'
                                  >
                                    <path
                                      d='M0 0L3 3L0 6'
                                      fill='none'
                                      stroke='currentColor'
                                      strokeWidth='1.5'
                                      strokeLinecap='round'
                                    ></path>
                                  </svg>
                                  {item.title}
                                </a>
                              </li>
                            );
                          })}
                      </span>
                    );
                  })}
              </div>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};
export default TableOfContents;
