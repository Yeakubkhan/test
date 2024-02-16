import { useContext } from "react";
import { TestContext } from "../../Provider/NewsdataProvider";

const NewsList = () => {
  const { newsData } = useContext(TestContext);

  const filterd = newsData?.filter(
    (data) =>
      data.content !== null &&
      data.description !== null &&
      data.source.id !== null
  );

  return (
    <main className="my-10 lg:my-14">
      {newsData?.length > 0 ? (
        <div className=" container mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            <div className="col-span-12 grid grid-cols-12 gap-4">
              {/* ------------------------------ */}
              <div className="col-span-12 lg:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                    {newsData?.[9]?.title}
                  </h3>
                </a>
                <p className="text-base text-[#5C5955]">
                  {newsData?.[9]?.description}
                </p>
                <p className="mt-5 text-base text-[#5C5955]">
                  {newsData?.[9]?.publishedAt}
                </p>
              </div>
              {/* ------------------------------------
                      Main image
                      ------------------------------------ */}
              <div className="col-span-12 lg:col-span-8">
                <img
                  className="w-full"
                  src={newsData?.[3]?.urlToImage}
                  alt="thumb"
                />
                <h3 className=" mt-5 text-2xl font-bold text-[#000000]">
                  {newsData?.[3]?.title}{" "}
                </h3>
                <p className="mt-5 text-base text-[#5C5955]">
                  {newsData?.[3]?.description}{" "}
                </p>
              </div>
              {/* -------------------------------------- */}
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
              <div className="col-span-12 md:col-span-6">
                <a href="">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                    {newsData?.[4]?.title}
                  </h3>
                </a>
                <p className="text-base text-[#292219]">
                  {newsData?.[3]?.description}
                </p>
                <p className="mt-5 text-base text-[#5C5955]">
                  {" "}
                  {newsData?.[9]?.publishedAt}
                </p>
              </div>
              <div className="col-span-12 md:col-span-6">
                <img
                  className="w-full"
                  src={newsData?.[6]?.urlToImage}
                  alt="thumb"
                />
              </div>
            </div>
            {/* ----------------------------------- */}

            {newsData?.map((item, i) => (
              <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="col-span-12 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                      {item?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {item?.description}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">
                    {item?.publishedAt}
                  </p>
                  <img className="w-full" src={item.urlToImage} alt="thumb" />
                </div>
              </div>
            ))}
          </div>

          {/* -------------------------------------
              No change 
              -------------------------------------- */}

          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              <div className="col-span-12 mb-6 md:col-span-8">
                <img
                  className="w-full"
                  src={newsData?.[8]?.urlToImage}
                  alt="thumb"
                />
                <div className="col-span-12 mt-6 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {newsData?.[9]?.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    {newsData?.[9]?.description}
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">
                    {" "}
                    {newsData?.[9]?.publishedAt}
                  </p>
                </div>
              </div>
              {filterd?.map((item2, i) => (
                <div key={i} className="col-span-12 md:col-span-8">
                  <div className="col-span-12 md:col-span-4">
                    <a href="#">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                        {item2?.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                      {item2?.description}
                    </p>
                    <p className="mt-5 text-base text-[#94908C]">
                      {newsData?.[9]?.publishedAt}
                    </p>
                    <img
                      className="w-full"
                      src={newsData?.[9]?.urlToImage}
                      alt="thumb"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-6xl font-bold text-center py-36">
            No Data Found..!
          </p>
        </div>
      )}
    </main>
  );
};

export default NewsList;
