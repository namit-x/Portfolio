import { cn } from "../lib/utils";

const Timeline = () => {
  return (
    <div className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold overflow-hidden">
            <span className="text-gradient">Timeline</span>
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-[600px] mx-auto">
          <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-1 h-full bg-timeline rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* 2006 */}
            <div className="flex flex-col sm:flex-row items-start group">
              <div className="flex-1 sm:text-right sm:pr-8 ml-12 sm:ml-0">
                <div className="hidden sm:block">
                  <span className="font-bold">January 2006</span>
                  <div>Successfully Born</div>
                  <div>Rohtak, Haryana</div>
                </div>
              </div>
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full mt-2 border-2 border-gradient" />
              <div className="flex-1 sm:pl-8">
                <div className="sm:hidden">
                  <span className="font-bold">January 2006</span>
                  <div>Successfully Born</div>
                  <div>Rohtak, Haryana</div>
                </div>
              </div>
            </div>

            {/* 2009 */}
            <div className="flex flex-col sm:flex-row items-start group">
              <div className="flex-1 sm:text-right sm:pr-8 ml-12 sm:ml-0">
                <span className="font-bold">April 2009</span>
                <div>Kindergarten :)</div>
              </div>
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full mt-2 border-2 border-gradient" />
              <div className="flex-1 sm:pl-8"></div>
            </div>

            {/* 2011 */}
            <div className="flex flex-col sm:flex-row items-start group">
              <div className="flex-1 sm:text-right sm:pr-8 ml-12 sm:ml-0">
                <div className="sm:hidden">
                  <span className="font-bold">April 2011</span>
                  <div>Joined a real School</div>
                  <div>MDN Public School, Rohtak</div>
                </div>
              </div>
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full mt-2 border-2 border-gradient" />
              <div className="flex-1 sm:pl-8">
                <div className="hidden sm:block">
                  <span className="font-bold">April 2011</span>
                  <div>Joined a real School</div>
                  <div>MDN Public School, Rohtak</div>
                </div>
              </div>
            </div>

            {/* 2023 May */}
            <div className="flex flex-col sm:flex-row items-start group">
              <div className="flex-1 sm:text-right sm:pr-8 ml-12 sm:ml-0">
                <span className="font-bold">May 2023</span>
                <div>Passed out with 89.4%</div>
                <div>MDN Public School, Rohtak</div>
              </div>
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full mt-2 border-2 border-gradient" />
              <div className="flex-1 sm:pl-8"></div>
            </div>

            {/* 2023 August */}
            <div className="flex flex-col sm:flex-row items-start group">
              <div className="flex-1 sm:text-right sm:pr-8 ml-12 sm:ml-0">
                <div className="sm:hidden">
                  <span className="font-bold">August 2023</span>
                  <div>Joined College</div>
                  <div>Jain University, Bengaluru</div>
                </div>
              </div>
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full mt-2 border-2 border-gradient" />
              <div className="flex-1 sm:pl-8">
                <div className="hidden sm:block">
                  <span className="font-bold">August 2023</span>
                  <div>Joined College</div>
                  <div>Jain University, Bengaluru</div>
                </div>
              </div>
            </div>

            {/* 2024 */}
            <div className="flex flex-col sm:flex-row items-start group">
              <div className="flex-1 sm:text-right sm:pr-8 ml-12 sm:ml-0">
                <span className="font-bold">June 2024</span>
                <div>Started learning Web Dev</div>
              </div>
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full mt-2 border-2 border-gradient" />
              <div className="flex-1 sm:pl-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;