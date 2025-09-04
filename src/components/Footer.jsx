const Footer = () => {
  const YOUR_NAME = "Dikachi Agoh"; 
  return (
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
            <p>
              © {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.
            </p>
            <p>
              Designed & Developed by{" "}
              <span className="text-zinc-200 font-medium">{YOUR_NAME}</span>
            </p>
          </div>
        </div>
      </footer>
  );
}

export default Footer
