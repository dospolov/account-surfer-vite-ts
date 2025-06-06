import React from 'react'
import useStoreChange from '@/utils/useStoreChange'

const ViewerVisibilityToggler = ({ isVisible, viewerId }: any) => {
  const { grid } = useStoreChange('ViewerVisibilityToggler')

  return (
    <div className="flex-shrink-0 ">
      <div
        className={`w-8 h-8 inline-flex items-center justify-center ${
          isVisible
            ? 'text-gray-300 hover:text-gray-200'
            : 'text-gray-600 hover:text-gray-500'
        }`}
        onClick={() =>
          window.storeSet({
            grid: grid.map((v: any) =>
              v.id === viewerId ? { ...v, isVisible: !isVisible } : v
            )
          })
        }
      >
        <svg className="h-6 w-6" viewBox="0 0 1024 1024" fill="currentColor">
          <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
        </svg>
      </div>
    </div>
  )
}

export default ViewerVisibilityToggler
