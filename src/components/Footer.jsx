export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-4">
      <aside>
        <p>
          {`© ${new Date().getFullYear()} - Web3 Community. Powered by Avalanche.`}
        </p>
      </aside>
    </footer>
  );
}
