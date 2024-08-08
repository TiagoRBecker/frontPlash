import { Link } from "@chakra-ui/react";

const WayPoint = ({url,name,nameCategory}) => {
    return ( 
        <div className="w-full flex gap-3 py-10 text-gray-400 text-lg">
        <div className="">
          <Link href={"/"}>
            Home
          </Link>
        </div>
        /
        <div className="">
          <Link href={url} className=" truncate md:text-base">
           {nameCategory}
          </Link>
        </div>
        /
        <div className=" capitalize  text-black  truncate md:text-base">
          {name}
        </div>
      </div> );
}
 
export default WayPoint;