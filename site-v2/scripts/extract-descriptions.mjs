import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, '..', 'site', 'pages');
const outFile = path.join(root, 'src', 'data', 'products.json');

// Map product slug -> image file in public/images/products
const slugToImage = {
  'bbraun-anesthesie': 'bbraun-anesthesie.jpg',
  'cair-catheters-centraux-pediatriques': 'cair-catheters-pediatriques.jpg',
  'cair-prolongateurs-coextrudes-en-pe-pvc': 'cair-prolongateurs-pe-pvc.jpg',
  'cair-regulateur-de-debit': 'cair-regulateur-debit.jpg',
  'comed-ciseaux-pinces': 'comed-ciseaux-pinces.jpg',
  'comed-dilatateur-de-pis': 'comed-dilatateur-pis.jpg',
  'comed-laryngoscope-acier-lumiere-conventionnelle': 'comed-laryngoscope.jpg',
  'comed-pied-a-serum-base-plastique': 'comed-pied-serum.jpg',
  'comed-porte-aiguille-gillies': 'comed-porte-aiguille-gillies.jpg',
  'drager-air-shields-resuscitaire': 'drager-air-shields-resuscitaire.jpg',
  'drager-carina': 'drager-carina.jpg',
  'drager-infinity-vista': 'drager-infinity-vista.jpg',
  'drager-moniteur-de-gaz-danesthesie-vamos-vamos-plus': 'drager-moniteur-vamos.jpg',
  'drager-photo-therapy-4000': 'drager-photo-therapy-4000.jpg',
  'drager-savina-300': 'drager-savina-300.jpg',
  'drager-zeus-infinity-empowered-stations-danesthesie': 'drager-zeus-infinity.jpg',
  'holtex-gueridon': 'holtex-gueridon.jpg',
  'holtex-marchepied': 'holtex-marchepied.jpg',
  'holtex-stethoscope-type-rappaport': 'holtex-stethoscope.jpg',
  'holtex-tabouret': 'holtex-tabouret.jpg',
};

// Clean HTML to text, preserving paragraphs
function htmlToParagraphs(html) {
  return html
    .replace(/<h4[^>]*>(.*?)<\/h4>/gs, (_, t) => `## ${t}\n`)
    .replace(/<h2[^>]*>(.*?)<\/h2>/gs, '')
    .replace(/<p[^>]*>(.*?)<\/p>/gs, (_, t) => `${t}\n\n`)
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<strong[^>]*>/g, '**')
    .replace(/<\/strong>/g, '**')
    .replace(/<em[^>]*>/g, '_')
    .replace(/<\/em>/g, '_')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&amp;/g, '&')
    .replace(/&#8230;/g, '…')
    .replace(/&rsquo;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const products = [];
for (const slug of Object.keys(slugToImage)) {
  const file = path.join(pagesDir, `produit___${slug}.html`);
  let desc = '';
  try {
    const html = readFileSync(file, 'utf8');
    const m = html.match(/id="accordion-description"[\s\S]*?<h2>Description<\/h2>([\s\S]*?)<\/div>\s*<\/div>\s*<!--\s*shop_single_accordion_item/);
    if (m) desc = htmlToParagraphs(m[1]);
    else {
      // fallback: take anything between Description h2 and reviews accordion
      const m2 = html.match(/<h2>Description<\/h2>([\s\S]*?)(?:<h2>Avis|id="accordion-reviews")/);
      if (m2) desc = htmlToParagraphs(m2[1]);
    }
    // Extract categories from product page
    const catsMatch = html.match(/<span class="posted_in">([\s\S]*?)<\/span>/);
    let cats = [];
    if (catsMatch) {
      cats = [...catsMatch[1].matchAll(/categorie-produit\/([a-z-]+)/g)].map(m => m[1]);
    }
    const title = html.match(/<h1[^>]*class="product_title[^"]*"[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, '').trim()
      || html.match(/<title>([^<]+)/)?.[1]?.replace(/\s*&#8211;.*/, '').trim();
    products.push({ slug, title, categories: cats, image: slugToImage[slug], description: desc });
  } catch {
    products.push({ slug, title: slug, categories: [], image: slugToImage[slug], description: '' });
  }
}

writeFileSync(outFile, JSON.stringify(products, null, 2), 'utf8');
console.log(`Extracted ${products.length} products`);
for (const p of products) {
  console.log(`  ${p.slug.padEnd(55)} cats=[${p.categories.join(',')}] desc=${p.description.length}ch`);
}
