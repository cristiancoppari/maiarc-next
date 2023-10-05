/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InstagramGallery = ({ feed }: any) => {
  const instagram_images = feed.data
    .filter((item: { media_type: string }) => {
      return item.media_type === "IMAGE";
    })
    .slice(0, 4);

  return (
    <div className="flex flex-col gap-12 md:flex-row">
      {instagram_images.map((item: { permalink: string; media_url: string }) => (
        <a href={item.permalink} key={item.media_url} className="aspect-square w-full" target="_blank">
          <img className="aspect-square h-full w-full object-cover" src={item.media_url} alt={"Maiarc Concierce"} />
        </a>
      ))}
    </div>
  );
};

export default InstagramGallery;
