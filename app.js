
async function loadJSON(path){
  try{
    const res = await fetch(path);
    if(!res.ok) throw new Error('Fetch error');
    return await res.json();
  }catch(e){
    console.warn('loadJSON', e);
    return null;
  }
}
function shorten(text, n=220){ if(!text) return ''; return text.length>n ? text.slice(0,n).trim() + '...' : text; }
async function renderArticles(){ const data = await loadJSON('articles.json'); const container = document.getElementById('articles-list'); if(!data){ container.innerHTML='<p>Gagal memuat artikel.</p>'; return; } container.innerHTML=''; data.forEach(a=>{ const card = document.createElement('div'); card.className='article-card'; card.innerHTML = `<h4>${a.title}</h4><p>${shorten(a.content.replace(/<[^>]+>/g,''),250)}</p><a href="#" class="btn outline" onclick="openArticle('${a.id}')">Baca selengkapnya</a>`; container.appendChild(card); }); }
function openArticle(id){ loadJSON('articles.json').then(data=>{ const art = data.find(x=>x.id===id); if(!art) return; document.getElementById('article-content').innerHTML = `<h2>${art.title}</h2><p><em>${art.published}</em></p><div>${art.content}</div>`; document.getElementById('article-view').classList.remove('hidden'); window.scrollTo({top:0,behavior:'smooth'}); }); }
async function renderNews(){ const data = await loadJSON('news.json'); const container = document.getElementById('news-list'); if(!data){ container.innerHTML='<p>Gagal memuat berita.</p>'; return; } container.innerHTML=''; data.slice(0,8).forEach(n=>{ const card = document.createElement('div'); card.className='article-card'; const title = `<h4><a href="${n.url}" target="_blank" rel="noopener">${n.title}</a></h4>`; const summary = `<p>${shorten(n.summary || '', 220)}</p>`; const foot = `<p class="muted">Sumber: ${n.source} • ${n.published || ''}</p>`; card.innerHTML = title + summary + foot; container.appendChild(card); }); }
document.addEventListener('DOMContentLoaded', ()=>{ document.getElementById('back-to-list').addEventListener('click', ()=>{ document.getElementById('article-view').classList.add('hidden'); }); renderArticles(); renderNews(); });
