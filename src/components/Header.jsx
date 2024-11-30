import logo  from '../assets/star.png'

const Header = () => {
    return (
        <div className="flex justify-between bg-white-400  border-down shadow-xl max-h-90 p-4 sticky"> 
         <div className="flex m-2 items-center justify-between px-2" >
            <img src={logo} alt="logo-star" className='h-8 px-2' />
            <h2>Review<span className='font-bold text-blue-500'>&</span><span className='font-bold'>RATE</span></h2>
        </div>
        
        <div className='flex justify-evenly items-center '>
            <input className="rounded border border-gray-400 px-2 " type="text" placeholder='search..'   />
           <button className='px-2'>Signup</button>
            <button className='px-2'>LogIn</button>

        </div>
        </div>
    )
}
export default Header;