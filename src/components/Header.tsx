import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const programs=[
 ["Care-in-a-Box™","/care-in-a-box"],
 ["Independent Physicians","/independent-physician"],
 ["VMS Healthspan","/vms-healthspan"],
 ["All Solutions","/our-solutions"],
];
const insights=[
 ["Newsletter","/newsletter"],
 ["Blog","/blog"],
 ["Social Media","/social-media"],
 ["Podcast","/podcast"],
];
const resources=[
 ["Institutional Flyer","/flyer"],
 ["Technology","/technology"],
 ["Clinic","/clinic"],
];

export default function Header(){
 const [open,setOpen]=useState(false);
 const [menu,setMenu]=useState<string|null>(null);
 const close=()=>{setOpen(false);setMenu(null);window.scrollTo({top:0,behavior:"smooth"});};
 const dropdown=(label:string,items:string[][])=><div className="relative" onMouseEnter={()=>setMenu(label)} onMouseLeave={()=>setMenu(null)}>
  <button className="flex items-center gap-1 font-bold text-slate-700 transition hover:text-blue-700">{label}<ChevronDown className="h-4 w-4"/></button>
  {menu===label&&<div className="absolute left-0 top-full w-64 pt-4"><div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">{items.map(i=><Link key={i[1]} to={i[1]} onClick={close} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700">{i[0]}</Link>)}</div></div>}
 </div>;
 return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24">
   <Link to="/" onClick={close} className="flex items-center"><img src="/logo.png" alt="Absolute Health Group" className="h-16 w-20 object-contain md:h-20 md:w-24"/></Link>
   <nav className="hidden items-center gap-8 md:flex">
    <Link to="/" onClick={close} className="font-bold text-slate-700 hover:text-blue-700">Platform</Link>
    {dropdown("Care Programs",programs)}
    {dropdown("Insights",insights)}
    {dropdown("Resources",resources)}
    <Link to="/about" onClick={close} className="font-bold text-slate-700 hover:text-blue-700">About</Link>
    <Link to="/contact?topic=Opportunity%20Assessment" onClick={close} className="rounded-xl bg-blue-700 px-5 py-3 font-black text-white shadow-lg transition hover:bg-blue-800">Get Started</Link>
   </nav>
   <button onClick={()=>setOpen(!open)} className="rounded-xl border border-slate-200 p-2 md:hidden" aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden"><div className="mx-auto grid max-w-7xl gap-2">
   <Link to="/" onClick={close} className="rounded-lg px-3 py-3 font-black">Platform</Link>
   <div className="px-3 pt-3 text-xs font-black uppercase tracking-[.16em] text-blue-700">Care Programs</div>{programs.map(i=><Link key={i[1]} to={i[1]} onClick={close} className="rounded-lg px-3 py-2 font-bold text-slate-700">{i[0]}</Link>)}
   <div className="px-3 pt-3 text-xs font-black uppercase tracking-[.16em] text-blue-700">Insights</div>{insights.map(i=><Link key={i[1]} to={i[1]} onClick={close} className="rounded-lg px-3 py-2 font-bold text-slate-700">{i[0]}</Link>)}
   <div className="px-3 pt-3 text-xs font-black uppercase tracking-[.16em] text-blue-700">Resources</div>{resources.map(i=><Link key={i[1]} to={i[1]} onClick={close} className="rounded-lg px-3 py-2 font-bold text-slate-700">{i[0]}</Link>)}
   <Link to="/about" onClick={close} className="rounded-lg px-3 py-3 font-black">About</Link><Link to="/contact?topic=Opportunity%20Assessment" onClick={close} className="mt-2 rounded-xl bg-blue-700 px-4 py-3 text-center font-black text-white">Get Started</Link>
  </div></div>}
 </header>
}
