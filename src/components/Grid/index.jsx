const GridLayout = ({children}) => {
    return ( 
        <div className='w-full h-full  grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 '>
            {children}
            </div>
     );
}
 
export default GridLayout;