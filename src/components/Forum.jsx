import React from 'react'

const Forum = () => {
  return (
    <div className="bg-white">
      <div>
        <p className="text-gray-400">
          Start a discussion or question related to alumini, career, business or
          freeelancing
        </p>
        <div></div>
        <div className="flex items center justify-between">
          <div>
            <span>Recent Thread</span>
            <span className="text-gray-400">Popular This Week </span>
            <span className="text-gray-400">Past Post</span>
          </div>
          <span>Recommended Topics</span>
        </div>
        <div>
          <div>
            <div><img src="" alt="" /></div>
            <div>
              <p className='font-bold'>What Do You Think About OpenChat GPT?</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Forum
