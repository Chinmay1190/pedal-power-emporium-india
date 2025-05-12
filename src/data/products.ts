
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
  // Additional 57 products to reach 70 total
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
  }
  // Add the remaining products to reach 70 total
];

export default products;
