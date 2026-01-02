import React from 'react';
import { ArrowRight, Sparkles, Satellite, Radio, Shield, Check, Globe, Lock } from 'lucide-react';

const SatelliteIntegratorLanding = () => {
  // Replace these with your actual GoDaddy lander URLs
  const BUY_NOW_URL = "https://www.godaddy.com/domainsearch/find?domainToCheck=satelliteintegrator.com";
  const MAKE_OFFER_URL = "https://www.godaddy.com/domainsearch/find?domainToCheck=satelliteintegrator.com";
  const LEASE_TO_OWN_URL = "https://www.godaddy.com/domainsearch/find?domainToCheck=satelliteintegrator.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-700 text-white py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles size={20} className="animate-pulse" />
            <span className="font-semibold">This domain is available for purchase</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm opacity-90">SatelliteIntegrator.com</span>
            <span className="text-sm font-bold">$3,800</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-12 w-full bg-slate-950/90 backdrop-blur-lg z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Satellite size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">SatelliteIntegrator</span>
          </div>
          <a href="https://spence.io" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Back to Spence.io
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-600/20 border border-blue-600/30 rounded-full text-sm text-blue-300">
              <span className="flex items-center gap-2">
                <Satellite size={14} className="animate-pulse" />
                Mission-critical satellite systems
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              Integrate and operate<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">satellite constellations</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              SatelliteIntegrator provides ground station management, telemetry processing, and 
              orbital operations software for defense contractors, space companies, and satellite operators.
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl"></div>
            <div className="relative bg-slate-900/50 border border-white/10 rounded-2xl p-12 backdrop-blur">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe size={32} className="text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold mb-2">Ground Stations</div>
                  <div className="text-sm text-gray-400">Orchestrate global ground station networks</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Radio size={32} className="text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold mb-2">Telemetry</div>
                  <div className="text-sm text-gray-400">Real-time data processing and analysis</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={32} className="text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold mb-2">Defense-Grade</div>
                  <div className="text-sm text-gray-400">ITAR compliant, FedRAMP certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-slate-950/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Built for the new space economy</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-950/50 to-slate-950 border border-blue-600/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Satellite className="text-blue-400" size={24} />
                <h3 className="text-2xl font-bold">LEO Constellations</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Manage low Earth orbit satellite networks for communications, Earth observation, 
                and broadband internet services.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Automated pass scheduling
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Multi-satellite coordination
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Orbital mechanics modeling
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-cyan-950/50 to-slate-950 border border-cyan-600/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-cyan-400" size={24} />
                <h3 className="text-2xl font-bold">Defense & ISR</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Intelligence, surveillance, and reconnaissance satellite operations for defense 
                contractors and national security applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Classified data handling
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Secure command & control
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  ITAR compliance built-in
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-950/50 to-slate-950 border border-purple-600/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-purple-400" size={24} />
                <h3 className="text-2xl font-bold">Earth Observation</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Process and distribute imagery from weather satellites, climate monitoring systems, 
                and commercial remote sensing platforms.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  High-throughput data pipelines
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Automated image processing
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Global distribution networks
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-950/50 to-slate-950 border border-green-600/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Radio className="text-green-400" size={24} />
                <h3 className="text-2xl font-bold">Ground Station Networks</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Operate and maintain distributed ground station infrastructure for commercial 
                and government satellite operators.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Multi-site coordination
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  RF signal optimization
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Automated failover
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Enterprise & defense certifications</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-900/50 border border-white/10 rounded-lg text-center">
              <Lock className="mx-auto mb-3 text-blue-400" size={32} />
              <div className="font-semibold mb-1">FedRAMP</div>
              <div className="text-sm text-gray-400">Authorized</div>
            </div>
            <div className="p-6 bg-slate-900/50 border border-white/10 rounded-lg text-center">
              <Shield className="mx-auto mb-3 text-cyan-400" size={32} />
              <div className="font-semibold mb-1">ITAR</div>
              <div className="text-sm text-gray-400">Compliant</div>
            </div>
            <div className="p-6 bg-slate-900/50 border border-white/10 rounded-lg text-center">
              <Lock className="mx-auto mb-3 text-purple-400" size={32} />
              <div className="font-semibold mb-1">ISO 27001</div>
              <div className="text-sm text-gray-400">Certified</div>
            </div>
            <div className="p-6 bg-slate-900/50 border border-white/10 rounded-lg text-center">
              <Shield className="mx-auto mb-3 text-green-400" size={32} />
              <div className="font-semibold mb-1">SOC 2</div>
              <div className="text-sm text-gray-400">Type II</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Domain */}
      <section className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why SatelliteIntegrator.com?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-3">Space</div>
              <div className="text-lg font-semibold mb-2">Booming Industry</div>
              <div className="text-sm text-gray-400">
                $400B+ market, rapid growth in LEO constellations
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-3">.com</div>
              <div className="text-lg font-semibold mb-2">Professional TLD</div>
              <div className="text-sm text-gray-400">
                Government and defense contractors expect .com
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-3">Clear</div>
              <div className="text-lg font-semibold mb-2">Positioning</div>
              <div className="text-sm text-gray-400">
                "Integrator" signals systems integration capability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Options */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Claim SatelliteIntegrator.com</h2>
            <p className="text-xl text-gray-400">Choose your purchase option</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Buy Now */}
            <div className="p-8 bg-slate-900 border-2 border-blue-600 rounded-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-xs font-semibold rounded-full">
                Best Value
              </div>
              <div className="text-center mb-6">
                <div className="text-sm text-blue-400 mb-2">Buy Now</div>
                <div className="text-4xl font-bold mb-2">$3,800</div>
                <div className="text-sm text-gray-400">One-time payment</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Instant ownership
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Fast 48-72hr transfer
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Secure escrow
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Brand consultation
                </li>
              </ul>
              <a
                href={BUY_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-center transition-all"
              >
                Buy Now
              </a>
            </div>

            {/* Lease to Own */}
            <div className="p-8 bg-slate-900 border border-white/10 rounded-xl">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 mb-2">Lease to Own</div>
                <div className="text-4xl font-bold mb-2">$190</div>
                <div className="text-sm text-gray-400">per month × 24 months</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  No credit check
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Use while paying
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Flexible terms
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Transfer at completion
                </li>
              </ul>
              <a
                href={LEASE_TO_OWN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 border border-white/20 hover:bg-white/5 rounded-lg font-semibold text-center transition-all"
              >
                Start Lease
              </a>
            </div>

            {/* Make Offer */}
            <div className="p-8 bg-slate-900 border border-white/10 rounded-xl">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 mb-2">Make Offer</div>
                <div className="text-4xl font-bold mb-2">$2,300+</div>
                <div className="text-sm text-gray-400">Minimum offer</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Negotiate price
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Custom terms
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  24hr response
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" />
                  Serious offers only
                </li>
              </ul>
              <a
                href={MAKE_OFFER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 border border-white/20 hover:bg-white/5 rounded-lg font-semibold text-center transition-all"
              >
                Make Offer
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">All transactions secured via Escrow.com</p>
            <p>Questions? Email <a href="mailto:domains@spence.io" className="text-blue-400 hover:text-blue-300">domains@spence.io</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p className="mb-2">
            This is a demonstration showcasing the potential of SatelliteIntegrator.com
          </p>
          <p>
            Domain available for purchase • <a href="https://spence.io" className="text-blue-400 hover:text-blue-300">Spence.io</a> • © 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SatelliteIntegratorLanding;
