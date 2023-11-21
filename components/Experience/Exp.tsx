;
import Image from "next/image";
type Props = {
  name: string;
  company: string;
  companyLogo: string;
  period: string;
};

export default function Exp(props: Props) {

  return (
    <div className={`flex  items-center gap-10 mt-5`}>
      <div className="border-[1px] border-white p-1 rounded-md">
        <Image src={props.companyLogo} alt="" height="20" width="25" />
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-xl">{props.name}</p>
        <p className="font-light mt-[-2px] text-sm">{props.company}</p>
      </div>
      <p className="font-normal  self-center mr-5 ml-auto">{props.period}</p>
    </div>
  );
}
