import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

export default function Footer() {
  return (
    <section id="footer" className="bg-[#6c7651] text-gray-300 px-6 py-8 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>
            Email: <a href="mailto:contact@feeldx.com" className="text-[#f0f1ee] hover:underline">contact@feeldx.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890" className="text-[#f0f1ee] hover:underline">+1 234 567 890</a>
          </p>

          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/feeldx" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/feeldx" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/feeldx" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UC9kmR0LVnaZahPLxodFdesQ" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#case-studies" className="hover:text-white">Case Studies</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col justify-between lg:items-end">
          <div>
            <p className="text-[#f0f1ee]">&copy; {new Date().getFullYear()} FEELDX</p>
            <p className="text-[#f0f1ee]">Creating clarity through design & experience.</p>
          </div>
          <p className="text-[#f0f1ee] mt-4 lg:mt-0">
            Website developed by <span className="text-[#f0f1ee] font-medium">Kenneth Oronce</span>
          </p>
        </div>
      </div>
    </section>
  );
}
