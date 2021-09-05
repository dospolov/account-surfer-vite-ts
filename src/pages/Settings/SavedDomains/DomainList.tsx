import React, { useState } from 'react'
import { PlusIcon, CheckIcon, XIcon } from '@heroicons/react/solid'
import { BrowserIcon } from '../../../constants'
import useStoreChange from '../../../utils/useStoreChange'

const DomainList = ({ viewer }: any) => {
  const [grid, storeGrid] = useStoreChange('grid')
  const { id, browser, channelName, account, incognito, domains } = viewer
  const userTitle = account?.title || incognito?.title
  const [newDomain, setNewDomain] = useState('')

  const updateDomains = (viewerId: any, domains: any) =>
    storeGrid(grid.map((v: any) => (v.id === viewerId ? { ...v, domains } : v)))

  return (
    <div key={id} className="bg-gray-900 p-3 mb-3">
      <h3 className="mb-2">
        <img
          className="h-5 w-5 inline-block mr-1 align-text-bottom"
          src={BrowserIcon[browser?.name]}
          alt=""
        />
        {browser.title}
        {channelName !== 'stable' && ` ${channelName}`}
        {userTitle && `: ${userTitle}`}
      </h3>
      <div className="">
        {domains.map((domain: any) => (
          <div
            key={domain}
            className="inline-flex bg-gray-600 p-1 m-0.5 relative pr-6"
            onClick={() =>
              updateDomains(
                viewer.id,
                domains.filter((d: any) => d !== domain)
              )
            }
          >
            <div className="inline-flex px-1.5 text-sm font-medium text-gray-300">
              {domain}
            </div>
            <div className="inset-y-0 right-0 absolute bg-gray-700 hover:bg-gray-500">
              <XIcon className="w-6 h-4 mt-1.5 " />
            </div>
          </div>
        ))}
        {newDomain === null ? (
          <div
            className="inline-flex p-1 pl-4 m-0.5 relative bg-green-800 hover:bg-green-600"
            onClick={() => setNewDomain('')}
          >
            <div className="inset-y-0 left-0 absolute ">
              <PlusIcon className="w-6 h-4 mt-1.5 " />
            </div>
            <div className="inline-flex px-1.5 text-sm text-gray-200">domain</div>
          </div>
        ) : (
          <>
            <input
              autoFocus
              type="text"
              value={newDomain}
              onChange={e => setNewDomain(e.target.value)}
              className="inline-flex m-0.5 p-2 w-56 h-7 bg-gray-800 text-gray-200 text-sm border-none align-bottom"
              placeholder="e.g. google.com"
            />
            <div
              className="inline-flex p-1 h-7 align-baseline m-0.5 relative bg-red-900 hover:bg-red-800"
              onClick={() => {
                // TODO fix return null
                setNewDomain('')
              }}
            >
              <div className="inline-flex px-1.5 text-sm text-gray-200">Cancel</div>
            </div>
            <div
              className="inline-flex p-1 h-7 align-baseline pl-4 m-0.5 relative bg-blue-700 hover:bg-blue-600"
              onClick={() => {
                if (newDomain) {
                  updateDomains(viewer.id, [...domains, newDomain])
                  setNewDomain('')
                }
              }}
            >
              <div className="inset-y-0 left-0 absolute ">
                <CheckIcon className="w-6 h-4 mt-1.5 " />
              </div>
              <div className="inline-flex px-1.5 text-sm text-gray-200">Save</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DomainList
