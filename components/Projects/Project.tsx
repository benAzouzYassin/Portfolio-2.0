type Props = {
  img: string;
  name: string;
  description: string;
  link: string;
  videoLink: string;
  index: number;
};
export default function Project(props: Props) {
  return (
    <div className={`text-[#aeb8d3] `}>
      <a href={props.link} target="_blank">
        <img
          className=" aspect-[16/9]   rounded-md hover:cursor-pointer hover:scale-105 transition-transform  "
          src={props.img}
          alt={props.description}
          loading="lazy"
        />
      </a>
      <h4 className="lg:text-xl text-base mt-3 font-medium">{props.name}</h4>
      <p className="font-normal mt-1 lg:block hidden">{props.description}</p>
    </div>
  );
}
