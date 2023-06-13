interface images {
  img1: string;
  img2: string;
}
function ImageCollage({ img1, img2 }: images) {
  return (
    <div className="relative">
      <img className="w-96" src={img1} />
      <img className="absolute w-60 left-72 top-36" src={img2} />
    </div>
  );
}

export default ImageCollage;
