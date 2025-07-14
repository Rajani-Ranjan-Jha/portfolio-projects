import React from 'react'

const HitandGenerate =  (url) => {

  async function Generate (url){

    const res = await fetch(`http://localhost:${PORT}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
    const data = await res.json()
    if (!response.ok) {
        console.log("URL fetch failed:", data);
        return
      }
    return data
  }
  return (
    <div className='bg-white text-indigo-500'>
      <button className='px-3 py-2 border rounded-md text-lg'>Hit and Generate</button>

    </div>
  )
}

export default HitandGenerate
