
import fetching from "../utils/requests";
import { useRouter } from 'next/router'

function Nav() {

    const router = useRouter();

  return (
    <nav className="relative">
        <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
            {Object.entries(fetching).map(([key, {title, url}]) => (
                <h2 
                    key={key} 
                    onClick={()=> router.push(`/?genre=${key}`)}
                    className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white active:text-red-700">{title}</h2>
            ))}

        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"/>
    </nav>
  )
}

export default Nav
