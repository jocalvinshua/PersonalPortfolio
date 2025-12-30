export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-300 dark:border-white/30">
      <div className="py-10 px-[10%] text-center">
        
        {/* Name / Logo */}
        <h3 className="text-2xl font-Ovo mb-2">Joshua Calvin</h3>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Joshua Calvin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
