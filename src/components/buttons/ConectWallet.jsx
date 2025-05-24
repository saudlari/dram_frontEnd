import { useAccount, useDisconnect } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

export default function ConectWallet() {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      className="btn btn-primary btn-sm"
      onClick={openConnectModal}
    >
      Connect Wallet
    </button>
  );
}
