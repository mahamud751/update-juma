import {COLLECTIONS,getCollection} from '@/lib/catalog';
import {Catalog} from '@/components/catalog';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return COLLECTIONS.filter(c=>!['salon','zindabazar'].includes(c.slug)).map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){return{title:getCollection((await params).slug)?.name||'Collection'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const c=getCollection((await params).slug);if(!c||['salon','zindabazar'].includes(c.slug))notFound();return <section className="section"><div className="page-intro"><p className="eyebrow">COLLECTION {c.numeral} · JHUMA JEWELLERS</p><h1>{c.name}<em>, forever.</em></h1><p>{c.tagline}</p></div><Catalog category={c.slug}/></section>}
