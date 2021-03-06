import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { 
  BadgeCheckIcon, 
  CollectionIcon, 
  HomeIcon, 
  LightningBoltIcon, 
  UserIcon,
  SearchIcon } from '@heroicons/react/outline';
  import { useRouter } from 'next/router'

function Header() {

  const router = useRouter();

  
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center height-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image 
        onClick={()=> router.push("/")}
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="Hulu logo"
        width={200}
        height={100} />
    </header>
  )
}

export default Header
