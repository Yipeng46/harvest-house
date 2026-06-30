import type { Locale, LocalizedString } from "@/types/i18n";

export type ArrivalItem = {
  id: string;
  name: LocalizedString;
  origin: LocalizedString;
  note: LocalizedString;
  accent: string;
};

export type CategoryItem = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  icon: string;
};

export type HomeContent = {
  brand: LocalizedString;
  tagline: LocalizedString;
  nav: {
    arrivals: LocalizedString;
    categories: LocalizedString;
    contact: LocalizedString;
  };
  hero: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    subtitle: LocalizedString;
    ctaPrimary: LocalizedString;
    ctaSecondary: LocalizedString;
  };
  arrivals: {
    title: LocalizedString;
    subtitle: LocalizedString;
    badge: LocalizedString;
    items: ArrivalItem[];
  };
  categories: {
    title: LocalizedString;
    subtitle: LocalizedString;
    items: CategoryItem[];
  };
  contact: {
    title: LocalizedString;
    subtitle: LocalizedString;
    addressLabel: LocalizedString;
    address: LocalizedString;
    phoneLabel: LocalizedString;
    phone: string;
    emailLabel: LocalizedString;
    email: string;
    hoursLabel: LocalizedString;
    hours: LocalizedString;
    wechatLabel: LocalizedString;
    wechat: string;
  };
  footer: {
    rights: LocalizedString;
  };
};

export const homeContent: HomeContent = {
  brand: { zh: "Harvest House", en: "Harvest House" },
  tagline: {
    zh: "甄选全球好物 · 每周新鲜抵达",
    en: "Curated global goods · Fresh arrivals every week",
  },
  nav: {
    arrivals: { zh: "本周到货", en: "This Week" },
    categories: { zh: "产品分类", en: "Categories" },
    contact: { zh: "联系方式", en: "Contact" },
  },
  hero: {
    eyebrow: { zh: "Premium Grocery · Since 2018", en: "Premium Grocery · Since 2018" },
    title: {
      zh: "以米白之简，承 harvest 之丰",
      en: "Quiet luxury, harvest abundance",
    },
    subtitle: {
      zh: "Harvest House 以克制美学与严苛选品，呈现从产地到餐桌的完整风味叙事。",
      en: "Harvest House pairs restrained aesthetics with rigorous sourcing — a complete story from origin to table.",
    },
    ctaPrimary: { zh: "浏览本周到货", en: "View This Week" },
    ctaSecondary: { zh: "了解产品分类", en: "Explore Categories" },
  },
  arrivals: {
    title: { zh: "本周到货", en: "This Week's Arrivals" },
    subtitle: {
      zh: "季节限定 · 小批量直采 · 售完即止",
      en: "Seasonal · Small-batch · While supplies last",
    },
    badge: { zh: "NEW", en: "NEW" },
    items: [
      {
        id: "strawberry",
        name: { zh: "有机红颜草莓", en: "Organic Alpine Strawberries" },
        origin: { zh: "云南 · 高原冷凉产区", en: "Yunnan · Highland region" },
        note: { zh: "自然熟成，甜度高，适合即食与甜品", en: "Tree-ripened, sweet — ideal fresh or for desserts" },
        accent: "from-[#E8D5CE] to-[#F5EBE6]",
      },
      {
        id: "jamon",
        name: { zh: "伊比利亚黑毛猪火腿", en: "Ibérico Jamón" },
        origin: { zh: "西班牙 · 36 个月熟成", en: "Spain · 36-month cure" },
        note: { zh: "油脂细腻，坚果与橡果香气层次丰富", en: "Silky fat with layered nut and acorn notes" },
        accent: "from-[#E5DDD3] to-[#F0EBE3]",
      },
      {
        id: "asparagus",
        name: { zh: "季节白芦笋", en: "Seasonal White Asparagus" },
        origin: { zh: "荷兰 · 当季直采", en: "Netherlands · In-season direct" },
        note: { zh: "茎身饱满，适合轻煎或经典 Hollandaise", en: "Plump stems — perfect seared or with Hollandaise" },
        accent: "from-[#E3E8DF] to-[#EEF2EA]",
      },
      {
        id: "sourdough",
        name: { zh: "手工酸种面包", en: "Artisan Sourdough" },
        origin: { zh: "本地合作烘焙坊 · 每日现烤", en: "Local partner bakery · Baked daily" },
        note: { zh: "48 小时低温发酵，外脆内软", en: "48-hour slow ferment — crisp crust, open crumb" },
        accent: "from-[#E8E0D4] to-[#F3EDE4]",
      },
    ],
  },
  categories: {
    title: { zh: "产品分类", en: "Product Categories" },
    subtitle: {
      zh: "从日常鲜食到礼赠之选，覆盖完整餐桌场景",
      en: "From daily essentials to gift-worthy selections for every table",
    },
    items: [
      {
        id: "produce",
        name: { zh: "新鲜果蔬", en: "Fresh Produce" },
        description: {
          zh: "有机与当季蔬果，产地可追溯",
          en: "Organic and seasonal — fully traceable origins",
        },
        icon: "🥬",
      },
      {
        id: "meat",
        name: { zh: "肉禽海鲜", en: "Meat & Seafood" },
        description: {
          zh: "冷鲜配送，优选牧场与可持续渔获",
          en: "Chilled delivery from trusted farms and fisheries",
        },
        icon: "🐟",
      },
      {
        id: "dairy",
        name: { zh: "乳品烘焙", en: "Dairy & Bakery" },
        description: {
          zh: "手工奶酪、黄油与每日现烤面包",
          en: "Artisan cheese, butter, and daily baked goods",
        },
        icon: "🧀",
      },
      {
        id: "pantry",
        name: { zh: "精品 pantry", en: "Gourmet Pantry" },
        description: {
          zh: "橄榄油、香料与主厨级储备食材",
          en: "Olive oils, spices, and chef-grade staples",
        },
        icon: "🫒",
      },
      {
        id: "beverage",
        name: { zh: "饮品酒窖", en: "Beverages & Cellar" },
        description: {
          zh: "精品咖啡、茶与侍酒师甄选酒款",
          en: "Specialty coffee, tea, and sommelier picks",
        },
        icon: "🍷",
      },
      {
        id: "gift",
        name: { zh: "礼赠系列", en: "Gift Collection" },
        description: {
          zh: "节庆礼盒与定制组合，体面而有温度",
          en: "Holiday boxes and custom sets — thoughtful and refined",
        },
        icon: "🎁",
      },
    ],
  },
  contact: {
    title: { zh: "联系方式", en: "Get in Touch" },
    subtitle: {
      zh: "欢迎预约到店体验，或通过以下方式与我们联络",
      en: "Visit us in store or reach out through the channels below",
    },
    addressLabel: { zh: "门店地址", en: "Address" },
    address: {
      zh: "上海市静安区南京西路 1266 号恒隆广场 B1",
      en: "B1, Plaza 66, 1266 Nanjing West Road, Jing'an, Shanghai",
    },
    phoneLabel: { zh: "联系电话", en: "Phone" },
    phone: "+86 21 6288 6688",
    emailLabel: { zh: "电子邮箱", en: "Email" },
    email: "hello@harvesthouse.com",
    hoursLabel: { zh: "营业时间", en: "Hours" },
    hours: {
      zh: "周一至周日 10:00 – 21:00",
      en: "Mon – Sun, 10:00 AM – 9:00 PM",
    },
    wechatLabel: { zh: "微信客服", en: "WeChat" },
    wechat: "HarvestHouse_SH",
  },
  footer: {
    rights: {
      zh: "© 2026 Harvest House. 保留所有权利。",
      en: "© 2026 Harvest House. All rights reserved.",
    },
  },
};

export function t(text: LocalizedString, locale: Locale): string {
  return text[locale];
}
