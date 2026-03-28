/* ============================================================
   Shared Menu Store
   Priority: Backend API → localStorage cache → default seed
   ============================================================ */
import { apiGetMenu } from './api';

export const STORAGE_KEY = 'adi_ari_menu_v3';

export const DEFAULT_MENU = [
  { id: 101, name: 'Edamame',          jp: '枝豆',             price: 8,  cat: 'Starters', halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?q=80&w=400&auto=format&fit=crop', desc: 'Sea-salted organic edamame served warm.' },
  { id: 102, name: 'Gyoza (Halal)',     jp: '餃子',             price: 14, cat: 'Starters', halal: true, available: true, badge: 'Popular',     img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=400&auto=format&fit=crop', desc: 'Pan-fried halal chicken and cabbage dumplings with yuzu ponzu.' },
  { id: 103, name: 'Miso Soup',         jp: '味噌汁',           price: 7,  cat: 'Starters', halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=400&auto=format&fit=crop', desc: 'Traditional white miso with tofu, wakame, and spring onion.' },
  { id: 104, name: 'Chicken Karaage',   jp: '唐揚げ',           price: 16, cat: 'Starters', halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1562802378-063ec186a863?q=80&w=400&auto=format&fit=crop', desc: 'Crispy halal chicken marinated in soy, garlic, and ginger, fried twice.' },
  { id: 105, name: 'Hummus & Pita',     jp: 'حمص وخبز',        price: 9,  cat: 'Starters', halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400&auto=format&fit=crop', desc: 'Creamy homemade hummus with warm pita bread and olive oil.' },
  { id: 201, name: 'Omakase Nigiri',    jp: 'おまかせ握り',     price: 85, cat: 'Sushi',    halal: true, available: true, badge: "Chef's Choice", img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400&auto=format&fit=crop', desc: "Daily selection of premium-grade fish by our Master Sushi Chef." },
  { id: 202, name: 'Salmon Aburi',      jp: 'サーモン炙り',     price: 28, cat: 'Sushi',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=400&auto=format&fit=crop', desc: 'Torched Norwegian salmon with yuzu-miso glaze on vinegar rice.' },
  { id: 203, name: 'Tuna Tataki',       jp: 'マグロたたき',     price: 36, cat: 'Sushi',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1562802378-063ec186a863?q=80&w=400&auto=format&fit=crop', desc: 'Seared tuna slices with ponzu sauce and micro herbs.' },
  { id: 204, name: 'Rainbow Roll',      jp: 'レインボーロール', price: 32, cat: 'Sushi',    halal: true, available: true, badge: 'New',        img: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=400&auto=format&fit=crop', desc: 'California roll topped with assorted fresh fish slices.' },
  { id: 301, name: 'Tonkotsu Black',    jp: '豚骨ブラック',     price: 24, cat: 'Ramen',    halal: true, available: true, badge: 'Popular',    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400&auto=format&fit=crop', desc: '48-hour halal bone broth, black garlic oil, chashu, hand-pulled noodles.' },
  { id: 302, name: 'Shio Chicken',      jp: '塩鶏ラーメン',     price: 22, cat: 'Ramen',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=400&auto=format&fit=crop', desc: 'Clear salt-based broth with free-range halal chicken and yuzu zest.' },
  { id: 303, name: 'Spicy Miso',        jp: '辛味噌ラーメン',   price: 23, cat: 'Ramen',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=400&auto=format&fit=crop', desc: 'Rich miso broth with togarashi, corn, bean sprouts, and sesame oil.' },
  { id: 304, name: 'Chicken Shoyu',     jp: '鶏醤油ラーメン',   price: 21, cat: 'Ramen',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=400&auto=format&fit=crop', desc: 'Golden chicken broth with soy tare, halal chicken chashu, and soft egg.' },
  { id: 401, name: 'Botan Tempura',     jp: '天ぷら盛り合わせ', price: 32, cat: 'Mains',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1581184953963-d15972933db1?q=80&w=400&auto=format&fit=crop', desc: 'Ice-chilled batter tempura of vegetables and halal shrimp.' },
  { id: 402, name: 'Chicken Teriyaki',  jp: '鶏の照り焼き',     price: 28, cat: 'Mains',    halal: true, available: true, badge: 'Popular',    img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?q=80&w=400&auto=format&fit=crop', desc: 'Juicy halal chicken glazed with house teriyaki sauce, served with rice.' },
  { id: 403, name: 'Black Cod Miso',    jp: '銀ダラ西京焼き',   price: 54, cat: 'Mains',    halal: true, available: true, badge: 'Premium',    img: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?q=80&w=400&auto=format&fit=crop', desc: 'Saikyo miso-marinated black cod, broiled until caramelized perfection.' },
  { id: 404, name: 'Chicken Biryani',   jp: 'チキンビリヤニ',   price: 18, cat: 'Mains',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=400&auto=format&fit=crop', desc: 'Fragrant basmati rice with halal chicken, spices, and saffron.' },
  { id: 405, name: 'Beef Yakitori',     jp: '牛やきとり',       price: 38, cat: 'Mains',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop', desc: 'Halal beef skewers brushed with tare glaze, grilled over binchotan charcoal.' },
  { id: 406, name: 'Lamb Kebab',        jp: 'ラムケバブ',        price: 26, cat: 'Mains',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=400&auto=format&fit=crop', desc: 'Juicy halal lamb with Middle Eastern and Japanese fusion spices.' },
  { id: 407, name: 'Butter Chicken',    jp: 'バターチキン',      price: 22, cat: 'Mains',    halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=400&auto=format&fit=crop', desc: 'Tender halal chicken in rich creamy tomato-butter sauce.' },
  { id: 501, name: 'Matcha Kakigori',   jp: '抹茶かき氷',        price: 12, cat: 'Desserts', halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=400&auto=format&fit=crop', desc: 'Shaved ice with ceremonial matcha syrup and sweet red bean.' },
  { id: 502, name: 'Yuzu Cheesecake',   jp: 'ゆずチーズケーキ', price: 14, cat: 'Desserts', halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=400&auto=format&fit=crop', desc: 'Silky Japanese-style cheesecake infused with yuzu citrus.' },
  { id: 503, name: 'Gulab Jamun',       jp: 'グラブジャムン',   price: 10, cat: 'Desserts', halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1666493652979-e8a8c22d9ef0?q=80&w=400&auto=format&fit=crop', desc: 'Soft milk dumplings soaked in rose-flavoured sugar syrup, served warm.' },
  { id: 504, name: 'Mango Lassi',       jp: 'マンゴーラッシー', price: 8,  cat: 'Desserts', halal: true, available: true, badge: '',           img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400&auto=format&fit=crop', desc: 'Chilled blended mango, yogurt, with a hint of cardamom.' },
  { id: 505, name: 'Dorayaki',          jp: 'どら焼き',          price: 9,  cat: 'Desserts', halal: true, available: true, badge: 'New',        img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop', desc: 'Fluffy honey pancake sandwiches filled with sweet red bean paste.' },
];

/** Load menu: tries API first, then localStorage, then default seed */
export async function loadMenuAsync() {
  try {
    const apiData = await apiGetMenu({ available: 'true' });
    if (apiData && apiData.length > 0) {
      persistMenu(apiData);
      return apiData;
    }
  } catch { /* ignore */ }
  return loadMenu();
}

export function loadMenu() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_MENU;
  } catch { return DEFAULT_MENU; }
}

export function persistMenu(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
