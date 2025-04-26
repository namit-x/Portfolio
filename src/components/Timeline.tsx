const Timeline = () => {

  return (
    <>
    <style>
      {`
        .timeline-left {
          position: relative;
          display: flex;
          right: 30px;
          flex-direction: column;
          text-align: right;
        }
        .timeline-right {
          position: relative;
          left:30px;
        }
      `}
    </style>
      <div className='flex flex-col items-center'>
        <div className='text-4xl overflow-hidden text-gradient my-4 font-bold'>
          <div className='overflow-hidden mb-2'>Timline</div>
          <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
        </div>
        <main className='flex w-[600px] h-[1200px] justify-center'>
          {/* Left Section */}
          <section className='flex-1'>
            <div className='timeline-left top-[240px]'>
              <div className='font-bold'>April 2009</div>
              <div>Kindergarten :)</div>
            </div>
            <div className='timeline-left top-[630px]'>
              <span className='font-bold'>May-2023</span>
              <div>Passed out with 89.4%</div>
              <div>MDN Public School, Rohtak</div>
            </div>
            <div className='timeline-left top-[990px]'>
              <span className='font-bold'>June-2024</span>
              <div>Started learning Web Dev</div>
              <div></div>
            </div>
          </section>
          {/* TIMELINE */}
          <section className='flex-2 px-4 '>
            <div className="relative bg-timeline w-1 h-[1200px] mx-auto rounded-full overflow-visible">
              <div className="absolute top-[40px] left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-white border-timeline"></div>
              <div className="absolute top-[260px] left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-white border border-timeline"></div>
              <div className="absolute top-[480px] left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-white border border-timeline"></div>
              <div className="absolute top-[700px] left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-white border border-timeline"></div>
              <div className="absolute top-[920px] left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-white border border-timeline"></div>
              <div className="absolute top-[1140px] left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-white border border-timeline"></div>
            </div>
          </section>
          {/* Right Section */}
          <section className='flex-1'>
            <div className='timeline-right'>
              <span className='font-bold'>January 2006</span>
              <div>Successfully Borned</div>
              <div>Rohtak, Haryana</div>
            </div>
            <div className='timeline-right top-[400px]'>
              <span className='font-bold'>April 2011</span>
              <div>Joined a real School</div>
              <div>MDN Public School, Rohtak</div>
            </div>
            <div className='timeline-right top-[740px]'>
              <span className='font-bold'>August 2023</span>
              <div>Joined College</div>
              <div>Jain University, Bengaluru</div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Timeline
