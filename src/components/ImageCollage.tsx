interface images {
  img1: string;
  img2: string;
  isHero?: boolean;
}
function ImageCollage({ img1, img2, isHero }: images) {
  return (
    <>
      {isHero ? (
        <div className="relative">
          <img className="w-96" src={img1} />
          <img className="absolute w-60  left-72 top-36 " src={img2} />
        </div>
      ) : (
        <div className="relative">
          <img className="w-96" src={img1} />
          <img
            className="absolute msm:w-60 w-40 right-5 xlp:left-72 lg:left-40 sm:left-72  xs:top-36 top-28"
            src={img2}
          />
        </div>
      )}
    </>
  );
}

export default ImageCollage;
