export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  engineCapacity: string;
  power: string;
  torque: string;
  description: string;
  featured?: boolean;
  new?: boolean;
  bestSeller?: boolean;
}

const products: Product[] = [
  // Sport Bikes
  {
    id: 1,
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    price: 1599900,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "998cc",
    power: "203 HP",
    torque: "114.9 Nm",
    description: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years.",
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Panigale V4",
    brand: "Ducati",
    price: 2349000,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f844c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "1103cc",
    power: "214 HP",
    torque: "124 Nm",
    description: "The Ducati Panigale V4 is a sport bike with a 1,103 cc (67.3 cu in) desmodromic 90° V4 engine introduced by Ducati in 2018 as the successor to the V-twin engined 1299.",
    featured: true
  },
  {
    id: 3,
    name: "YZF R1",
    brand: "Yamaha",
    price: 1995000,
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "998cc",
    power: "200 HP",
    torque: "112.4 Nm",
    description: "The Yamaha YZF-R1, or R1, is an open class sport bike, or superbike, motorcycle manufactured by Yamaha Motor Company since 1998."
  },
  {
    id: 4,
    name: "GSX-R1000R",
    brand: "Suzuki",
    price: 1999000,
    image: "https://images.unsplash.com/photo-1590358253155-b53fee310084?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "999.8cc",
    power: "202 HP",
    torque: "117.6 Nm",
    description: "The Suzuki GSX-R1000 is a sport bike from Suzuki's GSX-R series of motorcycles. It was introduced in 2001 to replace the GSX-R1100 and is powered by a liquid-cooled 999 cc inline four-cylinder, four-stroke engine."
  },
  {
    id: 5,
    name: "CBR1000RR-R Fireblade",
    brand: "Honda",
    price: 2345000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "1000cc",
    power: "214.5 HP",
    torque: "113 Nm",
    description: "The Honda CBR1000RR-R Fireblade SP is a sport bike designed and manufactured by Honda Racing Corporation."
  },
  // Naked Bikes
  {
    id: 6,
    name: "Street Triple RS",
    brand: "Triumph",
    price: 1152000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "765cc",
    power: "121 HP",
    torque: "79 Nm",
    description: "The Triumph Street Triple is a naked or streetfighter motorcycle made by Triumph Motorcycles, first released towards the end of 2007.",
    featured: true
  },
  {
    id: 7,
    name: "Z H2",
    brand: "Kawasaki",
    price: 2199000,
    image: "https://images.unsplash.com/photo-1575495679620-2ff225c75d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "998cc",
    power: "200 HP",
    torque: "137 Nm",
    description: "The Kawasaki Z H2 is a hypernaked motorcycle manufactured by Kawasaki. It is the most powerful motorcycle in the Z series."
  },
  {
    id: 8,
    name: "Monster 1200S",
    brand: "Ducati",
    price: 1699000,
    image: "https://images.unsplash.com/photo-1662724615678-8478320c2d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "1198cc",
    power: "147 HP",
    torque: "124 Nm",
    description: "The Ducati Monster is a standard, or naked bike, motorcycle designed by Miguel Angel Galluzzi and produced by Ducati in Bologna, Italy, since 1993."
  },
  {
    id: 9,
    name: "MT-10",
    brand: "Yamaha",
    price: 1489000,
    image: "https://images.unsplash.com/photo-1611241443645-1c6d271a7008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "998cc",
    power: "158.4 HP",
    torque: "111 Nm",
    description: "The Yamaha MT-10 is a naked bike or streetfighter motorcycle manufactured by Yamaha since 2016. It is the flagship model of the MT range of motorcycles."
  },
  {
    id: 10,
    name: "S1000R",
    brand: "BMW",
    price: 1790000,
    image: "https://images.unsplash.com/photo-1662724615537-50c1430d9c58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "999cc",
    power: "165 HP",
    torque: "114 Nm",
    description: "The BMW S1000R is a naked sports motorcycle made by BMW Motorrad. It was released in 2014, and is based on the BMW S1000RR sport bike, utilizing a redesigned version of the same inline-4 999 cc (61.0 cu in) engine."
  },
  // ADV Bikes
  {
    id: 11,
    name: "Multistrada V4",
    brand: "Ducati",
    price: 1991000,
    image: "https://images.unsplash.com/photo-1662724615820-99d5540ff0ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "1158cc",
    power: "170 HP",
    torque: "125 Nm",
    description: "The Ducati Multistrada is a series of V-twin and V4 engine road motorcycles designed for touring. The first generation Multistrada was an offshoot of the Superbike series.",
    bestSeller: true
  },
  {
    id: 12,
    name: "R1250GS Adventure",
    brand: "BMW",
    price: 2095000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "1254cc",
    power: "136 HP",
    torque: "143 Nm",
    description: "The BMW R1250GS and R1250GS Adventure are motorcycles manufactured by BMW Motorrad, part of the BMW group. They are the latest incarnations of the BMW GS family of dual-sport motorcycles."
  },
  {
    id: 13,
    name: "Tiger 900 Rally Pro",
    brand: "Triumph",
    price: 1566000,
    image: "https://images.unsplash.com/photo-1662724615367-6b3782a7f85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "888cc",
    power: "95.2 HP",
    torque: "87 Nm",
    description: "The Triumph Tiger 900 is a British adventure-style motorcycle that was launched in 2020. It is the successor to the Tiger 800."
  },
  // Additional 50 products
  {
    id: 14,
    name: "Hayabusa",
    brand: "Suzuki",
    price: 1641000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "1340cc",
    power: "190 HP",
    torque: "150 Nm",
    description: "The Suzuki Hayabusa is a sport bike motorcycle made by Suzuki since 1999. It immediately won acclaim as the world's fastest production motorcycle.",
    new: true
  },
  {
    id: 15,
    name: "Brutale 1000 RR",
    brand: "MV Agusta",
    price: 3295000,
    image: "https://images.unsplash.com/photo-1662724615367-6b3782a7f85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "998cc",
    power: "208 HP",
    torque: "116.5 Nm",
    description: "The MV Agusta Brutale 1000 RR is a naked sports bike manufactured by MV Agusta. It is one of the most powerful naked bikes available on the market."
  },
  // Continue adding products from IDs 16-70 with similar structure
  // Here are a few more examples:
  {
    id: 16,
    name: "Ninja H2",
    brand: "Kawasaki",
    price: 3300000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "998cc",
    power: "228 HP",
    torque: "141.7 Nm",
    description: "The Kawasaki Ninja H2 is a supercharged supersport class motorcycle manufactured by Kawasaki Heavy Industries.",
    featured: true,
    new: true
  },
  {
    id: 17,
    name: "Africa Twin",
    brand: "Honda",
    price: 1589000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "1084cc",
    power: "101 HP",
    torque: "105 Nm",
    description: "The Honda Africa Twin is a dual-sport motorcycle manufactured by Honda Motor Company. The Africa Twin has been produced in various forms since 1988."
  },
  {
    id: 18,
    name: "F3 800",
    brand: "MV Agusta",
    price: 1818000,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f844c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "798cc",
    power: "148 HP",
    torque: "88 Nm",
    description: "The MV Agusta F3 800 is a sport bike, manufactured by MV Agusta since 2013. It is a larger displacement version of the F3 675."
  },
  {
    id: 19,
    name: "Rocket 3 R",
    brand: "Triumph",
    price: 2150000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "2458cc",
    power: "165 HP",
    torque: "221 Nm",
    description: "The Triumph Rocket 3 is a motorcycle that was made by Triumph from 2004 through 2017, and then 2019 onward. It had the largest displacement engine of any production motorcycle at the time of its release."
  },
  {
    id: 20,
    name: "Diavel 1260",
    brand: "Ducati",
    price: 1999000,
    image: "https://images.unsplash.com/photo-1662724615678-8478320c2d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "1262cc",
    power: "157 HP",
    torque: "129 Nm",
    description: "The Ducati Diavel is a cruiser made by Ducati. The 2011 model year Diavel was first shown to the public at the EICMA motorcycle show in Milan on November 2, 2010."
  },
  {
    id: 21,
    name: "CBR650R",
    brand: "Honda",
    price: 870000,
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "649cc",
    power: "94 HP",
    torque: "64 Nm",
    description: "The Honda CBR650R is a sport motorcycle manufactured by Honda since 2019. It is the sport-oriented derivative of the CB650R naked bike and the successor to the CBR650F.",
    new: true
  },
  {
    id: 22,
    name: "Z900",
    brand: "Kawasaki",
    price: 840000,
    image: "https://images.unsplash.com/photo-1575495679620-2ff225c75d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "948cc",
    power: "125 HP",
    torque: "98.6 Nm",
    description: "The Kawasaki Z900 is a Z series motorcycle manufactured by Kawasaki. It was introduced in 2017 as the successor to the Z800.",
    featured: true
  },
  {
    id: 23,
    name: "SuperDuke 1290 R",
    brand: "KTM",
    price: 1880000,
    image: "https://images.unsplash.com/photo-1662724615367-6b3782a7f85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "1301cc",
    power: "180 HP",
    torque: "140 Nm",
    description: "The KTM 1290 Super Duke R is a 1,301 cc V-twin naked bike produced by KTM since 2014. It is nicknamed 'The Beast' by KTM.",
    featured: true
  },
  {
    id: 24,
    name: "S1000RR",
    brand: "BMW",
    price: 2050000,
    image: "https://images.unsplash.com/photo-1662724615407-50c1430d9c58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "999cc",
    power: "207 HP",
    torque: "113 Nm",
    description: "The BMW S1000RR is a race-oriented sport bike initially made by BMW Motorrad to compete in the 2009 Superbike World Championship, that is now in commercial production.",
    bestSeller: true
  },
  {
    id: 25,
    name: "Scrambler 1100",
    brand: "Ducati",
    price: 1195000,
    image: "https://images.unsplash.com/photo-1662724615678-8478320c2d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Scrambler",
    engineCapacity: "1079cc",
    power: "86 HP",
    torque: "88 Nm",
    description: "The Ducati Scrambler 1100 is a standard motorcycle made by Ducati, introduced in 2018 as a larger capacity addition to the Scrambler range."
  },
  {
    id: 26,
    name: "1290 Super Adventure",
    brand: "KTM",
    price: 1680000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "1301cc",
    power: "160 HP",
    torque: "138 Nm",
    description: "The KTM 1290 Super Adventure is an adventure touring motorcycle made by KTM. It was introduced in 2015 as the new flagship of the Austrian manufacturer's travel range."
  },
  {
    id: 27,
    name: "Interceptor 650",
    brand: "Royal Enfield",
    price: 290000,
    image: "https://images.unsplash.com/photo-1662724615820-99d5540ff0ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Retro",
    engineCapacity: "648cc",
    power: "47 HP",
    torque: "52 Nm",
    description: "The Royal Enfield Interceptor 650 is a parallel-twin standard motorcycle made by Royal Enfield since 2018."
  },
  {
    id: 28,
    name: "V-Strom 1050XT",
    brand: "Suzuki",
    image: "https://images.unsplash.com/photo-1590358253155-b53fee310084?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 1495000,
    category: "Adventure",
    engineCapacity: "1037cc",
    power: "107 HP",
    torque: "100 Nm",
    description: "The Suzuki V-Strom 1050XT is an adventure touring motorcycle made by Suzuki since 2020. It is the successor to the V-Strom 1000."
  },
  {
    id: 29,
    name: "Street Triple 765 RS",
    brand: "Triumph",
    price: 1198000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "765cc",
    power: "123 HP",
    torque: "79 Nm",
    description: "The Triumph Street Triple RS is a naked or streetfighter motorcycle made by Triumph Motorcycles. The 765cc version was introduced in 2017."
  },
  {
    id: 30,
    name: "Tuono V4 1100",
    brand: "Aprilia",
    price: 1890000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "1077cc",
    power: "175 HP",
    torque: "121 Nm",
    description: "The Aprilia Tuono V4 1100 is a naked sport bike manufactured by Aprilia since 2015. It is derived from the RSV4 superbike.",
    featured: true
  },
  {
    id: 31,
    name: "CB1000R",
    brand: "Honda",
    price: 1480000,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f844c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "998cc",
    power: "143 HP",
    torque: "104 Nm",
    description: "The Honda CB1000R is a CB series naked sports motorcycle manufactured by Honda. It was announced in 2007 and released in 2008."
  },
  {
    id: 32,
    name: "RSV4 1100 Factory",
    brand: "Aprilia",
    price: 2340000,
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "1099cc",
    power: "217 HP",
    torque: "122 Nm",
    description: "The Aprilia RSV4 is a super bike manufactured by Aprilia. It was introduced in 2009. The RSV4 1100 Factory delivers race-ready performance in a street-legal package.",
    new: true
  },
  {
    id: 33,
    name: "Bonneville T120",
    brand: "Triumph",
    price: 1090000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Retro",
    engineCapacity: "1200cc",
    power: "80 HP",
    torque: "105 Nm",
    description: "The Triumph Bonneville T120 is a motorcycle manufactured by Triumph Motorcycles Ltd. It is a modern redesign of the iconic Bonneville model, with retro styling but modern technology."
  },
  {
    id: 34,
    name: "MT-09",
    brand: "Yamaha",
    price: 995000,
    image: "https://images.unsplash.com/photo-1611241443645-1c6d271a7008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "890cc",
    power: "117 HP",
    torque: "93 Nm",
    description: "The Yamaha MT-09 is a Yamaha naked sports motorcycle in the MT series with an 890 cc liquid-cooled inline-three engine."
  },
  {
    id: 35,
    name: "GSX-S1000",
    brand: "Suzuki",
    price: 1290000,
    image: "https://images.unsplash.com/photo-1590358253155-b53fee310084?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "999cc",
    power: "152 HP",
    torque: "106 Nm",
    description: "The Suzuki GSX-S1000 is a naked sports bike manufactured by Suzuki since 2015. It is based on the GSX-R1000 engine but with a more upright riding position."
  },
  {
    id: 36,
    name: "Speed Triple 1200 RS",
    brand: "Triumph",
    price: 1795000,
    image: "https://images.unsplash.com/photo-1662724615367-6b3782a7f85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "1160cc",
    power: "180 HP",
    torque: "125 Nm",
    description: "The Triumph Speed Triple 1200 RS is a naked motorcycle manufactured by Triumph Motorcycles Ltd. It is the flagship model of Triumph's naked range.",
    bestSeller: true
  },
  {
    id: 37,
    name: "XDiavel",
    brand: "Ducati",
    price: 1840000,
    image: "https://images.unsplash.com/photo-1662724615678-8478320c2d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "1262cc",
    power: "160 HP",
    torque: "127 Nm",
    description: "The Ducati XDiavel is a cruiser motorcycle manufactured by Ducati. It combines cruiser styling and ergonomics with Ducati's performance heritage."
  },
  {
    id: 38,
    name: "F3 RR",
    brand: "MV Agusta",
    price: 2450000,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f844c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "798cc",
    power: "155 HP",
    torque: "88 Nm",
    description: "The MV Agusta F3 RR is the most sport-oriented version of the F3 platform, with advanced aerodynamics and electronics for maximum performance."
  },
  {
    id: 39,
    name: "Tracer 9 GT",
    brand: "Yamaha",
    price: 1495000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport Touring",
    engineCapacity: "890cc",
    power: "117 HP",
    torque: "93 Nm",
    description: "The Yamaha Tracer 9 GT is a sport touring motorcycle manufactured by Yamaha. It is based on the MT-09 platform but with touring ergonomics and features."
  },
  {
    id: 40,
    name: "Z H2 SE",
    brand: "Kawasaki",
    price: 2590000,
    image: "https://images.unsplash.com/photo-1575495679620-2ff225c75d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "998cc",
    power: "200 HP",
    torque: "137 Nm",
    description: "The Kawasaki Z H2 SE is a supercharged naked motorcycle manufactured by Kawasaki. It features top-of-the-line suspension and braking components.",
    featured: true
  },
  {
    id: 41,
    name: "Katana",
    brand: "Suzuki",
    price: 1395000,
    image: "https://images.unsplash.com/photo-1590358253155-b53fee310084?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "999cc",
    power: "152 HP",
    torque: "106 Nm",
    description: "The Suzuki Katana is a sport motorcycle designed by Target Design of Germany for Suzuki in 1979–1980. The modern Katana was reintroduced in 2019, inspired by the original design."
  },
  {
    id: 42,
    name: "1290 Super Duke GT",
    brand: "KTM",
    price: 1945000,
    image: "https://images.unsplash.com/photo-1662724615820-99d5540ff0ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport Touring",
    engineCapacity: "1301cc",
    power: "175 HP",
    torque: "141 Nm",
    description: "The KTM 1290 Super Duke GT is a sport touring motorcycle manufactured by KTM. It combines the performance of the Super Duke R with long-distance comfort and features."
  },
  {
    id: 43,
    name: "DesertX",
    brand: "Ducati",
    price: 1795000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "937cc",
    power: "110 HP",
    torque: "92 Nm",
    description: "The Ducati DesertX is an adventure motorcycle manufactured by Ducati. It features a 21-inch front wheel and is designed for off-road capability.",
    new: true
  },
  {
    id: 44,
    name: "RC 390",
    brand: "KTM",
    price: 330000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "373cc",
    power: "43 HP",
    torque: "37 Nm",
    description: "The KTM RC 390 is a small-displacement sport bike manufactured by KTM. It offers excellent performance in a compact package."
  },
  {
    id: 45,
    name: "Thruxton RS",
    brand: "Triumph",
    price: 1295000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Retro",
    engineCapacity: "1200cc",
    power: "105 HP",
    torque: "112 Nm",
    description: "The Triumph Thruxton RS is a cafe racer motorcycle manufactured by Triumph Motorcycles. It offers a blend of retro styling and modern performance."
  },
  {
    id: 46,
    name: "CB500X",
    brand: "Honda",
    price: 740000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "471cc",
    power: "47 HP",
    torque: "43 Nm",
    description: "The Honda CB500X is a middle-weight adventure motorcycle manufactured by Honda. It's designed for versatility, with the ability to handle both on-road and light off-road duties."
  },
  {
    id: 47,
    name: "Scrambler 800",
    brand: "Ducati",
    price: 895000,
    image: "https://images.unsplash.com/photo-1662724615678-8478320c2d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Scrambler",
    engineCapacity: "803cc",
    power: "73 HP",
    torque: "67 Nm",
    description: "The Ducati Scrambler 800 is a standard motorcycle made by Ducati. It was introduced in 2015 and features a classic design with modern components."
  },
  {
    id: 48,
    name: "FTR 1200",
    brand: "Indian",
    price: 1490000,
    image: "https://images.unsplash.com/photo-1662724615367-6b3782a7f85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Tracker",
    engineCapacity: "1203cc",
    power: "120 HP",
    torque: "115 Nm",
    description: "The Indian FTR 1200 is a flat-track inspired motorcycle manufactured by Indian Motorcycle. It combines American muscle with sport bike handling."
  },
  {
    id: 49,
    name: "Brutale 800 RR",
    brand: "MV Agusta",
    price: 1650000,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f844c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "798cc",
    power: "140 HP",
    torque: "87 Nm",
    description: "The MV Agusta Brutale 800 RR is a naked sports motorcycle manufactured by MV Agusta. It combines Italian design with high performance."
  },
  {
    id: 50,
    name: "Versys 1000",
    brand: "Kawasaki",
    price: 1195000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "1043cc",
    power: "120 HP",
    torque: "102 Nm",
    description: "The Kawasaki Versys 1000 is an adventure touring motorcycle manufactured by Kawasaki. It's designed for long-distance comfort with sport bike performance."
  },
  {
    id: 51,
    name: "YZF R3",
    brand: "Yamaha",
    price: 370000,
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "321cc",
    power: "42 HP",
    torque: "29.6 Nm",
    description: "The Yamaha YZF-R3 is a 321 cc inline-twin sport bike manufactured by Yamaha since 2015. It's designed as an entry-level sport bike with big bike styling."
  },
  {
    id: 52,
    name: "790 Duke",
    brand: "KTM",
    price: 890000,
    image: "https://images.unsplash.com/photo-1662724615367-6b3782a7f85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "799cc",
    power: "105 HP",
    torque: "87 Nm",
    description: "The KTM 790 Duke is a middleweight naked sports motorcycle manufactured by KTM. It's known for its agile handling and responsive engine."
  },
  {
    id: 53,
    name: "Continental GT 650",
    brand: "Royal Enfield",
    price: 310000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Retro",
    engineCapacity: "648cc",
    power: "47 HP",
    torque: "52 Nm",
    description: "The Royal Enfield Continental GT 650 is a cafe racer style motorcycle manufactured by Royal Enfield. It features classic styling with modern reliability."
  },
  {
    id: 54,
    name: "Ninja 400",
    brand: "Kawasaki",
    price: 525000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "399cc",
    power: "49 HP",
    torque: "38 Nm",
    description: "The Kawasaki Ninja 400 is a sport motorcycle manufactured by Kawasaki. It's designed as an entry-level sport bike with aggressive styling."
  },
  {
    id: 55,
    name: "Panigale V2",
    brand: "Ducati",
    price: 1690000,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f844c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "955cc",
    power: "155 HP",
    torque: "104 Nm",
    description: "The Ducati Panigale V2 is a sport bike manufactured by Ducati. It's the successor to the 959 Panigale and features a twin-cylinder engine.",
    bestSeller: true
  },
  {
    id: 56,
    name: "Fat Boy 114",
    brand: "Harley-Davidson",
    price: 1995000,
    image: "https://images.unsplash.com/photo-1575495679620-2ff225c75d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "1868cc",
    power: "93 HP",
    torque: "155 Nm",
    description: "The Harley-Davidson Fat Boy is a cruiser motorcycle manufactured by Harley-Davidson. It's known for its solid wheels and wide stance."
  },
  {
    id: 57,
    name: "Scout Bobber",
    brand: "Indian",
    price: 1340000,
    image: "https://images.unsplash.com/photo-1662724615678-8478320c2d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "1133cc",
    power: "100 HP",
    torque: "97 Nm",
    description: "The Indian Scout Bobber is a cruiser motorcycle manufactured by Indian Motorcycle. It features a stripped-down, aggressive look."
  },
  {
    id: 58,
    name: "CB350 Hness",
    brand: "Honda",
    price: 195000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Retro",
    engineCapacity: "348.36cc",
    power: "21 HP",
    torque: "30 Nm",
    description: "The Honda CB350 H'ness is a modern classic motorcycle manufactured by Honda. It blends retro styling with modern features."
  },
  {
    id: 59,
    name: "Forty-Eight",
    brand: "Harley-Davidson",
    price: 1350000,
    image: "https://images.unsplash.com/photo-1575495679620-2ff225c75d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "1202cc",
    power: "66 HP",
    torque: "96 Nm",
    description: "The Harley-Davidson Forty-Eight is a cruiser motorcycle manufactured by Harley-Davidson. It's known for its fat front tire and peanut tank."
  },
  {
    id: 60,
    name: "Hypermotard 950",
    brand: "Ducati",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1662724615367-6b3782a7f85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Supermoto",
    engineCapacity: "937cc",
    power: "114 HP",
    torque: "96 Nm",
    description: "The Ducati Hypermotard 950 is a supermoto motorcycle manufactured by Ducati. It combines sportbike performance with upright ergonomics."
  },
  {
    id: 61,
    name: "Street Twin",
    brand: "Triumph",
    price: 790000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Retro",
    engineCapacity: "900cc",
    power: "65 HP",
    torque: "80 Nm",
    description: "The Triumph Street Twin is a modern classic motorcycle manufactured by Triumph Motorcycles. It offers accessible performance with classic styling."
  },
  {
    id: 62,
    name: "Meteor 350",
    brand: "Royal Enfield",
    price: 195000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "349cc",
    power: "20.4 HP",
    torque: "27 Nm",
    description: "The Royal Enfield Meteor 350 is a cruiser motorcycle manufactured by Royal Enfield. It offers a relaxed riding position and easy-going character."
  },
  {
    id: 63,
    name: "Chieftain Dark Horse",
    brand: "Indian",
    price: 2790000,
    image: "https://images.unsplash.com/photo-1575495679620-2ff225c75d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Touring",
    engineCapacity: "1890cc",
    power: "92 HP",
    torque: "161 Nm",
    description: "The Indian Chieftain Dark Horse is a touring motorcycle manufactured by Indian Motorcycle. It features a blacked-out look and modern amenities."
  },
  {
    id: 64,
    name: "Trident 660",
    brand: "Triumph",
    price: 695000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "660cc",
    power: "81 HP",
    torque: "64 Nm",
    description: "The Triumph Trident 660 is a naked motorcycle manufactured by Triumph Motorcycles. It offers triple-cylinder performance at a competitive price.",
    new: true
  },
  {
    id: 65,
    name: "Monster Plus",
    brand: "Ducati",
    price: 1295000,
    image: "https://images.unsplash.com/photo-1662724615678-8478320c2d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "937cc",
    power: "111 HP",
    torque: "93 Nm",
    description: "The Ducati Monster Plus is a naked motorcycle manufactured by Ducati. It's the latest evolution of the iconic Monster lineup."
  },
  {
    id: 66,
    name: "Street Bob 114",
    brand: "Harley-Davidson",
    price: 1595000,
    image: "https://images.unsplash.com/photo-1575495679620-2ff225c75d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "1868cc",
    power: "93 HP",
    torque: "155 Nm",
    description: "The Harley-Davidson Street Bob is a cruiser motorcycle manufactured by Harley-Davidson. It's a stripped-down bobber with a powerful engine."
  },
  {
    id: 67,
    name: "Himalayan",
    brand: "Royal Enfield",
    price: 245000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "411cc",
    power: "24.3 HP",
    torque: "32 Nm",
    description: "The Royal Enfield Himalayan is an adventure touring motorcycle manufactured by Royal Enfield. It's designed to handle diverse terrain with ease."
  },
  {
    id: 68,
    name: "Ninja 650",
    brand: "Kawasaki",
    price: 725000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "649cc",
    power: "68 HP",
    torque: "64 Nm",
    description: "The Kawasaki Ninja 650 is a sport motorcycle manufactured by Kawasaki. It offers a balance of sport performance and everyday usability."
  },
  {
    id: 69,
    name: "Streetfighter V4",
    brand: "Ducati",
    price: 1995000,
    image: "https://images.unsplash.com/photo-1662724615367-6b3782a7f85d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Naked",
    engineCapacity: "1103cc",
    power: "208 HP",
    torque: "123 Nm",
    description: "The Ducati Streetfighter V4 is a naked motorcycle manufactured by Ducati. It's essentially a Panigale V4 without the fairings, offering similar performance.",
    featured: true
  },
  {
    id: 70,
    name: "Classic 350",
    brand: "Royal Enfield",
    price: 160000,
    image: "https://images.unsplash.com/photo-1680528816483-91ecfc2a8daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Retro",
    engineCapacity: "349cc",
    power: "20.4 HP",
    torque: "27 Nm",
    description: "The Royal Enfield Classic 350 is a retro motorcycle manufactured by Royal Enfield. It's known for its timeless design and distinctive thump."
  },
  // Adding 10 new products starting from id 71
  {
    id: 71,
    name: "Panigale V4 SP2",
    brand: "Ducati",
    price: 3995000,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f844c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "1103cc",
    power: "215.5 HP",
    torque: "123.6 Nm",
    description: "The Ducati Panigale V4 SP2 is the ultimate track-focused factory superbike, featuring carbon fiber wheels, Brembo Stylema R calipers, and a dry clutch for unparalleled performance on the circuit.",
    new: true,
    featured: true
  },
  {
    id: 72,
    name: "CBR1000RR-R SP",
    brand: "Honda",
    price: 2695000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "1000cc",
    power: "217.5 HP",
    torque: "113 Nm",
    description: "The Honda CBR1000RR-R SP features MotoGP-derived aerodynamics, semi-active Öhlins suspension, and an advanced electronics package for the ultimate balance of track and street performance.",
    featured: true
  },
  {
    id: 73,
    name: "Niken GT",
    brand: "Yamaha",
    price: 1795000,
    image: "https://images.unsplash.com/photo-1611241443645-1c6d271a7008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport Touring",
    engineCapacity: "890cc",
    power: "115 HP",
    torque: "87.5 Nm",
    description: "The Yamaha Niken GT is a revolutionary three-wheeled sport touring motorcycle featuring Leaning Multi-Wheel technology, providing unprecedented front-end grip and confidence in all weather conditions.",
    new: true
  },
  {
    id: 74,
    name: "R18 Transcontinental",
    brand: "BMW",
    price: 2950000,
    image: "https://images.unsplash.com/photo-1662724615537-50c1430d9c58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "1802cc",
    power: "91 HP",
    torque: "158 Nm",
    description: "The BMW R18 Transcontinental is a full-dress touring motorcycle powered by the massive 1802cc 'Big Boxer' engine, combining classic styling with modern luxury touring amenities.",
    featured: true
  },
  {
    id: 75,
    name: "Adventure Rally Pro",
    brand: "KTM",
    price: 1895000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "890cc",
    power: "105 HP",
    torque: "100 Nm",
    description: "The KTM 890 Adventure Rally Pro is a limited-edition adventure motorcycle built for extreme off-road capability, featuring rally-inspired WP XPLOR Pro suspension and advanced electronics.",
    bestSeller: true
  },
  {
    id: 76,
    name: "Xdiavel Black Star",
    brand: "Ducati",
    price: 2250000,
    image: "https://images.unsplash.com/photo-1662724615678-8478320c2d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cruiser",
    engineCapacity: "1262cc",
    power: "160 HP",
    torque: "127 Nm",
    description: "The Ducati XDiavel Black Star features a distinctive black and gray livery with red accents, Öhlins suspension, and the potent Testastretta DVT 1262 engine, merging Italian performance with cruiser comfort.",
    new: true
  },
  {
    id: 77,
    name: "LiveWire One",
    brand: "Harley-Davidson",
    price: 1995000,
    image: "https://images.unsplash.com/photo-1575495679620-2ff225c75d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Electric",
    engineCapacity: "Electric",
    power: "105 HP",
    torque: "116 Nm",
    description: "The Harley-Davidson LiveWire One is a premium electric motorcycle delivering thrilling performance with 146 miles of city range, customizable ride modes, and a distinctive sound that increases with speed.",
    featured: true
  },
  {
    id: 78,
    name: "Superveloce 800",
    brand: "MV Agusta",
    price: 2185000,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f844c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sport",
    engineCapacity: "798cc",
    power: "148 HP",
    torque: "88 Nm",
    description: "The MV Agusta Superveloce 800 blends retro-inspired styling with cutting-edge technology, featuring a counter-rotating crankshaft, full ride-by-wire throttle, and distinctive circular LED headlight.",
    bestSeller: true
  },
  {
    id: 79,
    name: "Pan America 1250 Special",
    brand: "Harley-Davidson",
    price: 1995000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "1252cc",
    power: "150 HP",
    torque: "128 Nm",
    description: "The Harley-Davidson Pan America 1250 Special is a premium adventure touring motorcycle featuring semi-active suspension, adaptive ride height technology, and the Revolution Max 1250 engine.",
    new: true
  },
  {
    id: 80,
    name: "TRK 702X",
    brand: "Benelli",
    price: 765000,
    image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    engineCapacity: "698cc",
    power: "76 HP",
    torque: "68.2 Nm",
    description: "The Benelli TRK 702X is a middle-weight adventure motorcycle featuring a parallel-twin engine, spoked wheels, adjustable suspension, and a comprehensive electronics package at a competitive price point.",
    featured: true
  }
];

export default products;
