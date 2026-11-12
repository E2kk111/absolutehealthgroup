import { env } from 'cloudflare:workers';
import { initialState, categories, statuses } from '../../seed';
export async function GET() {
 try {const row = await env.DB!.prepare('SELECT data,revision FROM pilot_state WHERE id=?').bind('pilot').first<any>();
 return Response.json(row ? {...JSON.parse(row.data),revision:row.revision} : {...initialState,revision:0});
 } catch {return Response.json({error:'Unable to load pilot records.'},{status:503});}
}
export async function PUT(req:Request) {
 if(req.headers.get('origin')!==new URL(req.url).origin) return Response.json({error:'Invalid origin'},{status:403});
 try {
 const x:any=await req.json();
 if(!Number.isInteger(x.revision)||!Array.isArray(x.records)||x.records.length>1000||!x.settings||!Array.isArray(x.history)||!Array.isArray(x.briefs)) throw Error('Invalid pilot data');
 if(x.settings.enrolled!==''&&(!Number.isInteger(Number(x.settings.enrolled))||Number(x.settings.enrolled)<0)) throw Error('Enrollment must be a nonnegative integer or unknown');
 if(x.settings.target!==''&&(!Number.isInteger(Number(x.settings.target))||Number(x.settings.target)<25||Number(x.settings.target)>50)) throw Error('Target must be 25–50 or unknown');
 if(new Set(x.records.map((r:any)=>r.id)).size!==x.records.length) throw Error('Duplicate record identifiers');
 for(const r of x.records){if(!r.id||typeof r.title!=='string'||!r.title.trim()||!categories.includes(r.category)||!statuses.includes(r.status)||!['Planned','Tentative','Unknown','Verified'].includes(r.certainty)) throw Error('Invalid record');if(r.certainty==='Verified'&&(!r.evidence?.trim()||!r.verifier?.trim())) throw Error('Verified records require evidence and a verifier');}
 const raw=JSON.stringify({...x,revision:undefined});if(raw.length>1500000) throw Error('Pilot data too large');
 await env.DB!.prepare('INSERT OR IGNORE INTO pilot_state (id,data,revision) VALUES (?,?,0)').bind('pilot',JSON.stringify(initialState)).run();
 const result=await env.DB!.prepare('UPDATE pilot_state SET data=?,revision=revision+1 WHERE id=? AND revision=?').bind(raw,'pilot',x.revision).run();
 if(!result.meta.changes) return Response.json({error:'Another session updated this pilot. Reload before saving.'},{status:409});
 return Response.json({revision:x.revision+1});
 } catch(e) {return Response.json({error:e instanceof Error?e.message:'Save failed'},{status:400});}
}
