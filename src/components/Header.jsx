import ConectWallet from "./buttons/ConectWallet";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1">
    
        <img src="/dram.jpg" alt="LogoRizoma" className="h-8" />
   
    </div>
      <div className="flex-none">
        <ConectWallet />      
      </div>
    </div>
             
  );
}
