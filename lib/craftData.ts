export const CRAFT_SLUGS = ["bakery", "coffee", "all-day", "evening"] as const;
export type CraftSlug = (typeof CRAFT_SLUGS)[number];

export interface CraftItem {
  num: string;
  title: string;
  sub: string;
  slug: CraftSlug;
  img: string;
  description: string;
  highlights: { label: string; detail: string }[];
  products: {
    name: string;
    desc: string;
    price: string;
    img: string;
    tags?: string[];
  }[];
}

export const craftItems: CraftItem[] = [
  {
    num: "01",
    title: "Bakery",
    sub: "Artisan Sourdough & Viennoiserie",
    slug: "bakery",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuYs3cSS_yw7qqB098DmoJ8cTOOmKPCds5MINT08RehZBmR_SJ9hCLdndpo32zJjtTFOKMDKQNk868ctj1jmz7bad5sXHoElnH7Dg0UGzzLiBbHUsBPowCiQ47GOgMXHeTNbeFubqty_ZLPlzWE8Hx1Wyql8UYaC84JFkQXvQYVLSNuxsvvaheYEl3t7y0M6kb8r59Q2jVUAtfNEtCzJA8nb8HiApHwtjLjA9G2Qd4DED6gwQAnyh0okFCoGLYkkgsF8x7J45Ix5LT",
    description:
      "Our bakery is the heart of Bakerist. Every loaf is shaped by hand and fermented for up to 72 hours using heritage grains and a live levain culture. From crusty sourdough to buttery croissants and seasonal viennoiserie, we honour the craft of traditional baking with a modern touch.",
    highlights: [
      { label: "72h fermentation", detail: "Slow-fermented sourdough" },
      { label: "Heritage grains", detail: "Stone-ground flours" },
      { label: "Daily bakes", detail: "Fresh from the oven" },
    ],
    products: [
      {
        name: "Signature Sourdough",
        desc: "72-hour levain loaf with a bold crust and honeyed crumb.",
        price: "AED 32",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
        tags: ["House levain", "Best-seller"],
      },
      {
        name: "Butter Croissant",
        desc: "Laminated for 48 hours, finished with flaky layers.",
        price: "AED 18",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
        tags: ["Viennoiserie"],
      },
      {
        name: "Pain au Chocolat",
        desc: "Dark chocolate baton, glossy finish, tender interior.",
        price: "AED 22",
        img: "https://images.unsplash.com/photo-1623334044303-241021148842?w=600&q=80",
        tags: ["Dark chocolate"],
      },
      {
        name: "Almond Croissant",
        desc: "Roasted almond frangipane, toasted flakes, light glaze.",
        price: "AED 26",
        img: "https://images.unsplash.com/photo-1625425404751-19b16c027511?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Nutty", "Indulgent"],
      },
      {
        name: "Seasonal Danish",
        desc: "Rotating fruit + vanilla crème on buttery laminated dough.",
        price: "AED 24",
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
        tags: ["Seasonal"],
      },
      {
        name: "Focaccia Slice",
        desc: "Olive oil crumb, sea salt, rosemary—baked to a golden edge.",
        price: "AED 16",
        img: "https://images.unsplash.com/photo-1711805064484-a77096f599a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Savory"],
      },
    ],
  },
  {
    num: "02",
    title: "Coffee",
    sub: "Specialty Single Origin Brews",
    slug: "coffee",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUQGgFolhhCCrFj1tE0Wbn90mIWeBMkDl7uljjn5GOLq3yqEUts6acTAi_bQwhUI9fk9swcJSgVhhpWzGgGsp0JLY_LxNogMro3-bLOMHej9htEz-YdcnnpUyJCd058vmBxhX3U199yyUdtQitrH99PEyiK96TC4KOMEHUkU9wxLTaC3xdIW2Qj9AfBYcHet742shCJWqMYY1MhlfSoo-3KpMYdKkorRd3Hk6a6QEpOpNrQ6C9GZNJbPe-b_nSH3Hgah5uZtFUnUkI",
    description:
      "We partner with roasters who share our values: traceability, sustainability, and exceptional flavour. Every cup is brewed to order—espresso, pour-over, or filter—so you can experience the full character of single-origin beans from Ethiopia, Colombia, and beyond.",
    highlights: [
      { label: "Single origin", detail: "Traceable micro-lots" },
      { label: "Brewed to order", detail: "Espresso & filter" },
      { label: "Seasonal rotation", detail: "New origins monthly" },
    ],
    products: [
      {
        name: "Espresso (Single Origin)",
        desc: "Intense, clean finish—dialed daily for maximum clarity.",
        price: "AED 16",
        img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Espresso"],
      },
      {
        name: "Flat White",
        desc: "Silky microfoam over a rich double shot.",
        price: "AED 22",
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
        tags: ["Milk coffee"],
      },
      {
        name: "Pour-Over (V60)",
        desc: "Bright, aromatic cup highlighting origin notes.",
        price: "AED 28",
        img: "https://images.unsplash.com/photo-1565845120211-ec64763a0dea?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Filter"],
      },
      {
        name: "Cold Brew",
        desc: "Slow-steeped for 16 hours—smooth, chocolatey, refreshing.",
        price: "AED 24",
        img: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Iced"],
      },
      {
        name: "Spanish Latte",
        desc: "Creamy, lightly sweet—our Dubai favourite.",
        price: "AED 26",
        img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&q=80",
        tags: ["Sweet"],
      },
      {
        name: "Matcha Cloud (Ceremonial)",
        desc: "Velvety matcha with a soft milk cap.",
        price: "AED 28",
        img: "https://images.unsplash.com/photo-1631308491952-040f80133535?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Non-coffee"],
      },
    ],
  },
  {
    num: "03",
    title: "All Day",
    sub: "Gourmet Breakfast & Brunch",
    slug: "all-day",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDFtjRHpSi_KQ3Gp5K8z-NNcAIcRjqvG7QS2ToH9A4Z6rpPkDPHDtPdmWIJNB5VZ8_pQ3bTraEyJRePTd7HGKY6ENVOFOUCCmp7jzEqt9WA6fRvSSOS2LiW3mxAshAcx2AxcyGzUL9f5SK91OZJ3LH6YjSE7o1PCkpDIvBUWYjDot7OcDHicr2hcbrC8EcN-pGErvdZqY2xYG1HpebeVR92lmq_SLYLySfLXU8NWdK75PUlvjItNdT7-Wxvf9hsCiRhJ_C28_PRhhr",
    description:
      "Start your day the Bakerist way. Our all-day menu brings together house-baked bread, farm-fresh eggs, and Middle Eastern-inspired touches. Whether you're here for a quick pastry and coffee or a full brunch spread, we've got something for every moment.",
    highlights: [
      { label: "Breakfast till close", detail: "Served all day" },
      { label: "House-baked base", detail: "Our bread in every dish" },
      { label: "Local & seasonal", detail: "Fresh produce daily" },
    ],
    products: [
      {
        name: "Avocado on Sourdough",
        desc: "Herb citrus smash, chilli crisp, toasted seeds.",
        price: "AED 48",
        img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80",
        tags: ["Vegetarian"],
      },
      {
        name: "Bakerist Breakfast Plate",
        desc: "Eggs your way, house bread, greens, seasonal sides.",
        price: "AED 56",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
        tags: ["All day"],
      },
      {
        name: "Shakshuka (Heritage)",
        desc: "Slow-cooked tomato + pepper base, warm spices, fresh herbs.",
        price: "AED 52",
        img: "https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Signature"],
      },
      {
        name: "French Toast Brioche",
        desc: "Caramelized brioche with vanilla crème and berries.",
        price: "AED 46",
        img: "https://images.unsplash.com/photo-1723475762962-70af5364be70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Sweet"],
      },
      {
        name: "Truffle Scramble",
        desc: "Soft scrambled eggs, truffle, chives, toasted sourdough.",
        price: "AED 62",
        img: "https://images.unsplash.com/photo-1660079557031-8e3641b12185?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Indulgent"],
      },
      {
        name: "Granola + Greek Yogurt",
        desc: "House granola, honey, seasonal fruit, toasted nuts.",
        price: "AED 38",
        img: "https://images.unsplash.com/photo-1692071106919-01bc0b9b0919?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Light"],
      },
    ],
  },
  {
    num: "04",
    title: "Evening",
    sub: "Sunset Dining & Desserts",
    slug: "evening",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmE9uig_Ix9saBHs08MNcrmA-ye_sWaVLjoeRukzQQVkLOmVA-ZmbmsrxVJU7zmnnxsBYK01dj8tEBOyL4HQXpHw3vlVk7I3jNevohr3ZIMXvEmHpmTLlKgOpDieDbk3p4zU4wAjoImwxPMYxkG583wDyABikuEjB3X0mcVhtobZMCV3AG8v9wwXkVQjNnArWl-W7Gn4Aqsh6G5wgWEeaAR561pGzFPMRbBHXKMvnmfOM1Vngp5qub0Y0MBtp5pkK4oYPwus4ytryC",
    description:
      "As the sun sets over Dubai, Bakerist shifts into evening mode. Indulge in dessert boards featuring our pastries and cakes, paired with specialty drinks. The perfect way to round off the day in a relaxed, intimate setting.",
    highlights: [
      { label: "Dessert boards", detail: "Pastries & cakes" },
      { label: "Sunset drinks", detail: "Coffee & specials" },
      { label: "Intimate setting", detail: "Until late" },
    ],
    products: [
      {
        name: "Dessert Board for Two",
        desc: "Chef’s daily selection of pastries, cake slices, and sauces.",
        price: "AED 110",
        img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80",
        tags: ["To share", "Best-seller"],
      },
      {
        name: "Basque Cheesecake",
        desc: "Burnt top, creamy center—served with seasonal compote.",
        price: "AED 34",
        img: "https://images.unsplash.com/photo-1670604144879-9c58a9ce896e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Signature"],
      },
      {
        name: "Chocolate Tart",
        desc: "Dark chocolate ganache, crisp shell, sea salt finish.",
        price: "AED 36",
        img: "https://images.unsplash.com/photo-1609618298169-425a11118f24?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Dark chocolate"],
      },
      {
        name: "Tiramisu Jar",
        desc: "Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa.",
        price: "AED 32",
        img: "https://images.unsplash.com/photo-1593545024944-b3c74435b9f3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Italian classic"],
      },
      {
        name: "Warm Chocolate Lava Cake",
        desc: "Molten dark chocolate center served with vanilla bean ice cream.",
        price: "AED 38",
        img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Hot dessert", "Best-seller"],
      },
      {
        name: "Pistachio Kunafa Cheesecake",
        desc: "Creamy cheesecake layered with crispy kunafa and pistachio cream.",
        price: "AED 42",
        img: "https://images.unsplash.com/photo-1492683654773-a3b0476056c0?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Middle Eastern", "Signature"],
      },
    ],
  },
];

export function getCraftBySlug(slug: string): CraftItem | undefined {
  return craftItems.find((item) => item.slug === slug);
}

export function getCraftSlugs() {
  return CRAFT_SLUGS.map((slug) => ({ slug }));
}
