import {PIECES,getPiece} from '@/lib/catalog';
import {Detail} from '@/components/store';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return PIECES.filter(p=>p.kind==='photo').map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){return {title:getPiece((await params).slug)?.name||'Jewellery'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const p=getPiece((await params).slug);if(!p||p.kind!=='photo')notFound();return <Detail piece={p}/>}
