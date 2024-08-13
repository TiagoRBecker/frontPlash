const Wrapper = ({children}) => {
    return ( 
<div className="w-[70%] my-4 mx-auto  md:mt-2 sticky top-16 bottom-16 md:w-[30%]   h-[390px] md:flex items-center justify-center flex-col ">
    {children}
    </div>);
}
 
export default Wrapper; 