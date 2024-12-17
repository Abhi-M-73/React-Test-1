import React, { useEffect, useState } from 'react'

const FeedbackSummmary = ({ feedbacks }) => {

    const totalFeedbacks = feedbacks.length;




    return (
        <div className='min-h-screen w-screen p-10 flex flex-col items-center justify-center bg-gray-800'>
            <h1 className='text-center text-4xl mb-16'> <strong>Total Feedbacks :</strong> {totalFeedbacks}</h1>
            <header className='flex gap-5'>
                <div className='bg-gray-600 p-8 rounded flex flex-col gap-2 items-center justify-center'>
                    <h1 className='text-2xl font-bold text-gray-100'>Customer Service</h1>
                    <h2 className='text-gray-300'><strong>Avg Rating : </strong> 0</h2>
                </div>
            </header>
            <footer className='mt-20 space-y-5 w-[40vw]'>
                {
                    feedbacks.map((item, index) => {
                        return <div key={index} className='bg-gray-700 px-10 py-5 space-y-2 rounded'>
                            <h1> <strong>Service : </strong>{item.service}</h1>
                            <h1> <strong>Rating : </strong>{item.rating}</h1>
                            <h1> <strong>Name : </strong>{item.name}</h1>
                            <h1> <strong>Email : </strong>{item.email}</h1>
                            <h1> <strong>Comment : </strong>{item.comment}</h1>
                        </div>
                    })
                }
            </footer>
        </div>
    )
}

export default FeedbackSummmary
