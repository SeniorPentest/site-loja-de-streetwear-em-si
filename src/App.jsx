import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Zap, ArrowRight } from 'lucide-react';

// ─── Product data ────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: 'Cyber Hoodie',
    price: 'R$ 349,00',
    tag: 'NEW DROP',
    tagColor: 'text-[#00d4ff]',
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80',
  },
  {
    id: 2,
    name: 'Cargo Tactical Pants',
    price: 'R$ 489,00',
    tag: 'BEST SELLER',
    tagColor: 'text-[#39ff14]',
    image:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80',
  },
  {
    id: 3,
    name: 'Tech Vest',
    price: 'R$ 279,00',
    tag: 'LIMITED',
    tagColor: 'text-purple-400',
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
  },
  {
    id: 4,
    name: 'Reflective Jacket',
    price: 'R$ 599,00',
    tag: 'EXCLUSIVE',
    tagColor: 'text-[#00d4ff]',
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
  },
];

const navLinks = ['Home', 'Shop', 'Drop', 'About'];

// ─── ProductCard ─────────────────────────────────────────────────────────────
function ProductCard({ product }) {
  return (
    <div className="glass-card rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(0,212,255,0.45)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.7)]">
      {/* Image */}
      <div className="relative overflow-hidden h-64 sm:h-72">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
        <span
          className={`absolute top-3 left-3 text-[10px] font-semibold tracking-widest px-2 py-1 rounded-sm bg-black/60 backdrop-blur-sm border border-current ${product.tagColor}`}
        >
          {product.tag}
        </span>
        <button
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-[#00d4ff] text-black text-xs font-bold px-3 py-1.5 rounded-sm tracking-wider"
        >
          + CART
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold text-sm tracking-wide mb-0.5">
            {product.name}
          </h3>
          <p className="text-[#00d4ff] text-xs font-medium">{product.price}</p>
        </div>
        <button
          aria-label={`View ${product.name}`}
          className="w-8 h-8 rounded-full border border-[rgba(0,212,255,0.3)] flex items-center justify-center text-[#00d4ff] hover:bg-[rgba(0,212,255,0.1)] transition-colors duration-200"
        >
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 overflow-x-hidden">

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(5,5,5,0.8)] backdrop-blur-md border-b border-[rgba(0,212,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Zap size={20} className="text-[#00d4ff]" fill="currentColor" />
              <span className="text-white font-black text-lg tracking-widest" style={{ fontFamily: 'Orbitron, monospace' }}>
                CYBER<span className="text-[#00d4ff]">STREET</span>
              </span>
            </div>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#00d4ff] tracking-widest uppercase transition-colors duration-200 relative group"
                  >
                    {link}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00d4ff] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button aria-label="Search" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-200">
                <Search size={18} />
              </button>
              <button aria-label="Cart" className="relative text-gray-400 hover:text-[#00d4ff] transition-colors duration-200">
                <ShoppingCart size={18} />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#00d4ff] text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                aria-label="Toggle menu"
                className="md:hidden text-gray-400 hover:text-[#00d4ff] transition-colors duration-200"
                onClick={() => setMenuOpen((v) => !v)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden bg-[rgba(5,5,5,0.97)] border-t border-[rgba(0,212,255,0.1)] px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#00d4ff] tracking-widest uppercase transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,212,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[rgba(0,212,255,0.04)] blur-3xl" />
        </div>

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.5) 2px, rgba(0,212,255,0.5) 4px)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow label */}
          <p className="inline-block text-[#00d4ff] text-xs font-semibold tracking-[0.4em] uppercase mb-6 px-3 py-1 border border-[rgba(0,212,255,0.3)] rounded-sm bg-[rgba(0,212,255,0.05)]">
            2026 Collection — DROP 01
          </p>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter mb-6 text-glow-blue"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            WEAR THE
            <br />
            <span className="text-[#00d4ff]">FUTURE</span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Techwear. Cyberpunk. Zero Compromise.
            <br />
            Veste o que o amanhã ainda não inventou.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-neon w-full sm:w-auto bg-[#00d4ff] text-black font-bold text-sm tracking-widest uppercase px-8 py-3.5 rounded-sm transition-all duration-200 hover:bg-white">
              Shop Now
            </button>
            <button className="w-full sm:w-auto text-[#00d4ff] font-medium text-sm tracking-widest uppercase px-8 py-3.5 rounded-sm border border-[rgba(0,212,255,0.3)] hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200">
              Explore Drop →
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-center">
            {[
              { value: '1,200+', label: 'Drops Vendidos' },
              { value: '48H', label: 'Entrega Express' },
              { value: '100%', label: 'Qualidade Técnica' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="text-2xl font-black text-white text-glow-blue"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-widest text-gray-500 uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00d4ff] to-transparent" />
        </div>
      </section>

      {/* ── Product Grid ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="shop">
        <div className="text-center mb-14">
          <p className="text-[#00d4ff] text-xs tracking-[0.4em] uppercase mb-3">
            — Latest Drop —
          </p>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase text-white text-glow-blue"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Featured Pieces
          </h2>
          <div className="mt-4 w-16 h-px bg-[#00d4ff] mx-auto opacity-60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase border border-[rgba(0,212,255,0.3)] px-8 py-3 rounded-sm hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200">
            View All Collection →
          </button>
        </div>
      </section>

      {/* ── Banner strip ───────────────────────────────────────────────────── */}
      <div className="border-y border-[rgba(0,212,255,0.1)] py-4 bg-[rgba(0,212,255,0.02)]">
        <p
          className="text-[#00d4ff]/40 text-xs tracking-[0.5em] uppercase text-center"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          CYBERSTREET &nbsp;·&nbsp; TECHWEAR &nbsp;·&nbsp; CYBERPUNK &nbsp;·&nbsp; DROP 2026 &nbsp;·&nbsp; FRETE GRÁTIS ACIMA DE R$400 &nbsp;·&nbsp; CYBERSTREET
        </p>
      </div>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-[#00d4ff]" fill="currentColor" />
            <span className="text-white font-black text-sm tracking-widest" style={{ fontFamily: 'Orbitron, monospace' }}>
              CYBER<span className="text-[#00d4ff]">STREET</span>
            </span>
          </div>
          <p className="text-gray-600 text-xs tracking-wider">
            © 2026 CyberStreet. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {['Privacidade', 'Termos', 'Contato'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-[#00d4ff] text-xs tracking-wider transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
