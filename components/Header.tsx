import { ConnectButton } from "web3uikit";
import Link from "next/link"

export default function Header() {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center ">
      <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
      <div className="flex flex-row items-center">
        <Link href="/" className="mr-4 p-6">
          Home
        </Link>
        <Link href="/sell-nft" className="mr-4 p-6">
          Sell NFt
        </Link>
      </div>
      {/* setting moralisAuth to false so that we don't connect to moralis database automatically */}
      <ConnectButton moralisAuth={false} />
    </nav>
     
  ) ;
}
