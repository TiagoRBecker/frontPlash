const Wrapper = ({children}) => {
    return ( 
<div className="hidden  md:mt-2 sticky top-16 bottom-16 md:w-[30%] mx-auto  h-[390px] md:flex items-center justify-center flex-col ">
    {children}
    </div>);
}
 
export default Wrapper; 