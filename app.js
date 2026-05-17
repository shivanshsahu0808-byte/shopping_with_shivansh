const products = [
    {
        name: "Sports shoes",
        price: 6000,
        image:"https://images.unsplash.com/photo-1739138054456-0aca1b90e4a9?q=80&w=1136&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Fashion",
        description: "Comfortable sports shoes with a lightweight design for daily wear and active use.",
        rating: 4.5,
        stock: "In Stock"
    },
    {
        name: "Wrist Watch",
        price: 5000,
        image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Electronics",
        description: "A stylish wrist watch with a clean look that pairs well with casual and formal outfits.",
        rating: 4,
        stock: "Limited Stock"
    },
    {
        name: "Smartphone",
        price: 39999,
        image: "https://images.unsplash.com/photo-1598327106026-d9521da673d1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Electronics",
        description: "A modern smartphone with a sleek body, bright screen, and smooth everyday performance.",
        rating: 4.5,
        stock: "In Stock"
    },
    {
        name: "Headphones",
        price: 3999,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Electronics",
        description: "Wireless headphones with soft ear cushions and clear sound for music, calls, and videos.",
        rating: 3.5,
        stock: "Out of Stock"
    },
    {
        name: "Earbuds",
        price: 2499,
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Electronics",
        description: "Crystal clear sound with deep bass and long battery backup.",
        rating: 4,
        stock: "Limited Stock"
    },
    {
        name: "Laptop",
        price: 13500,
        image : "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Electronics",
        description: "Powerful performance laptop perfect for study, work, and entertainment.",
        rating: 4.2,
        stock: "Out of Stock"
    },
    {
        name: " Air conditioner",
        price: 45000,
        image: "https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?q=80&w=705&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Electronics",
        description: "Fast cooling air conditioner with energy efficient smart performance.",
        rating: 3.9,
        stock: "Limited Stock"
    },
    {
        name: "Shirt",
        price: 1299,
        image: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Men's Cloting",
        description: "Stylish and comfortable shirt perfect for casual everyday fashion wear.",
        rating: 4.5,
        stock: "In Stock"
    },
    {
        name: "Fan",
        price: 2200,
       image: "https://images.unsplash.com/photo-1555470100-1728256970aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhbnxlbnwwfHwwfHx8MA%3D%3D",
       Category: "Electronics",
       description: "High speed cooling fan with silent and smooth airflow performance.",
       rating: 4.1,
       stock: "Limited Stock"
    },
    {
        name: "Bottle",
        price: 449,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Accessories",
        description: "Durable reusable bottle designed for daily hydration and travel needs.",
        rating: 4.3,
        stock: "In Stock"
    },
    {
        name: "Saree",
        price: 3199,
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Women's Clothing",
        description: "Elegant traditional saree with beautiful design and premium fabric quality.",
        rating: 4.7,
        stock: "In Stock"
    },
    {
        name: "Bag",
        price: 2299,
        image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Accessories",
        description: "Spacious stylish bag suitable for travel, college, and daily essentials.",
        rating: 4,
        stock: "Out of Stock"
    },
    {
        name: "Sandals",
        price: 499,
        image: "https://images.unsplash.com/photo-1618615098938-84fc29796e76?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Fashion",
        description: "Comfortable lightweight sandals perfect for casual outings and daily wear.",
        rating: 4,
        stock: "Limited Stock"
    },
    {
        name: "Bracelet",
        price: 799,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Accessories",
        description: "Trendy fashionable bracelet designed to enhance your modern stylish look.",
        rating: 4.1,
        stock: "Out of Stock"
    },
    {
        name: "Perfume",
        price: 1700,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Beauty",
        description: "Long lasting fragrance perfume with refreshing and luxurious premium scent.",
        rating: 4,
        stock: "In Stock"
    },
    {
        name: "Lipgloss",
        price: 849,
        image: "https://images.unsplash.com/photo-1635263282145-253319c75fd4?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Category: "Beauty",
        description: "Smooth shiny lipgloss providing attractive finish and soft hydrated lips.",
        rating: 4.3,
        stock: "Limited Stock"
    },
  {
    name: "Portable Bluetooth Speaker",
    price: 3299,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Category: "Electronics",
    description: "Compact speaker with powerful surround sound, waterproof design, and impressive all day battery backup.",
    rating: 4.5,
    stock: "Limited Stock"
  },
  {
    name: "Smart Fitness Band",
    price: 2499,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Category: "Wearables",
    description: "Track daily activities, monitor heart rate, and receive notifications directly on your wrist.",
    rating: 4.4,
    stock: "Limited Stock"
  },
  {
    name: "4K Ultra HD Television",
    price: 360000,
    image: "https://images.unsplash.com/photo-1717295248230-93ea71f48f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D",
    Category: "Home Appliances",
    description: "Large smart television featuring crystal clear visuals, cinematic audio, and multiple streaming applications.",
    rating: 4.8,
    stock: "Limited Stock"
  },
  {
    name: "Microwave Oven",
    price: 8999,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWljcm93YXZlJTIwb3ZlbnxlbnwwfHwwfHx8MA%3D%3D",
    Category: "Kitchen",
    description: "Efficient microwave oven with multiple cooking modes, timer controls, and energy saving technology.",
    rating: 4.3,
    stock: "In Stock"
  },
  {
    name: "Electric Kettle",
    price: 1499,
    image: "https://images.unsplash.com/photo-1729309566955-8c4a47813926?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cmljJTIwa2F0dGxlfGVufDB8fDB8fHww", 
    Category: "Kitchen",
    description: "Fast boiling electric kettle designed with automatic shutoff protection and durable stainless steel body.",
    rating: 4.2,
    stock: "Limited Stock"
  },
  {
    name: "Gaming Mouse",
    price: 1799,
    image: "https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW1uZyUyMG1vdXNlfGVufDB8fDB8fHww", 
    Category: "Gaming",
    description: "High precision gaming mouse featuring customizable buttons, RGB lighting, and ultra smooth performance.",
    rating: 4.6,
    stock: "In Stock"
  },
  {
    name: "Gaming Chair",
    price: 12999,
    image: "https://images.unsplash.com/photo-1670946839270-cc4febd43b09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D", 
    Category: "Gaming",
    description: "Ergonomic gaming chair offering adjustable support, comfortable cushioning, and stylish premium leather finish.",
    rating: 4.7,
    stock: "In Stock"
  },
  {
    name: "Cotton Kurti",
    price: 1199,
    image: "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y290dG9uJTIwa3VydGl8ZW58MHx8MHx8fDA%3D", 
    Category: "Women's Clothing",
    description: "Elegant cotton kurti designed for casual comfort, breathable fabric, and stylish everyday appearance.",
    rating: 4.4,
    stock: "In Stock"
  },
  {
    name: "Denim Jacket",
    price: 2999,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D", 
    Category: "Men's Clothing",
    description: "Trendy denim jacket featuring premium stitching, modern fit, and durable high quality fabric material.",
    rating: 4.5,
    stock: "Out of Stock"
  },
  {
    name: "Running Track Pants",
    price: 1399,
    image: "https://images.unsplash.com/photo-1503341910231-c3d098fafba1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJ1bm5pbmclMjB0cmFjayUyMHBhbnRzfGVufDB8fDB8fHww", 
    Category: "Men's Clothing",
    description: "Comfortable lightweight track pants suitable for workouts, jogging sessions, and daily casual activities.",
    rating: 4.3,
    stock: "Out of Stock"
  },
  {
    name: "Cricket Bat",
    price: 3499,
    image: "https://images.unsplash.com/photo-1646282814550-f521d9b57a59?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Category: "Sports",
    description: "Professional wooden cricket bat providing balanced grip, powerful shots, and excellent playing performance.",
    rating: 4.6,
    stock: "Out of Stock"
  },
  {
    name: "Football",
    price: 999,
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D", 
    Category: "Sports",
    description: "Durable football designed for outdoor matches, practice sessions, and long lasting playing experience.",
    rating: 4.2,
    stock: "Out of Stock"
  },
  {
    name: "Yoga Mat",
    price: 899,
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2ElMjBtYXR8ZW58MHx8MHx8fDA%3D", 
    Category: "Fitness",
    description: "Soft anti slip yoga mat offering comfortable support during workouts, meditation, and stretching exercises.",
    rating: 4.4,
    stock: "In Stock"
  },
  {
    name: "Protein Shaker Bottle",
    price: 499,
    image: "https://images.unsplash.com/photo-1593188543121-6441d07ad2e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvdGVpbiUyMHNoYWtlciUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D", 
    Category: "Fitness",
    description: "Leak proof shaker bottle ideal for mixing protein drinks, smoothies, and energy supplements conveniently.",
    rating: 4.1,
    stock: "In Stock"
  },
  {
    name: "Wooden Study Table",
    price: 7499,
    image: "https://plus.unsplash.com/premium_photo-1732721753645-a5ad8e62efe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvb2RlbiUyMHN0dWR5JTIwdGFibGV8ZW58MHx8MHx8fDA%3D", 
    Category: "Furniture",
    description: "Spacious wooden study table featuring storage shelves, sturdy design, and elegant modern appearance.",
    rating: 4.5,
    stock: "Limited Stock"
  },
  {
    name: "Office Chair",
    price: 5999,
    image: "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D", 
    Category: "Furniture",
    description: "Comfortable office chair with adjustable height, smooth wheels, and excellent lumbar back support.",
    rating: 4.6,
    stock: "In Stock"
  },
  {
    name: "LED Desk Lamp",
    price: 1299,
    image: "https://images.unsplash.com/photo-1571406487954-dc11b0c0767d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVkJTIwZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D", 
    Category: "Home Decor",
    description: "Modern LED desk lamp with adjustable brightness levels and energy efficient lighting technology features.",
    rating: 4.3,
    stock: "Out of Stock"
  },
  {
    name: "Wall Painting",
    price: 2199,
    image: "https://images.unsplash.com/photo-1724131498848-1a4a8a9a00ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdhbGwlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D", 
    Category: "Home Decor",
    description: "Beautiful decorative wall painting designed to enhance interior aesthetics with vibrant artistic detailing.",
    rating: 4.4,
    stock: "Limited Stock"
  },
  {
    name: "Perfume Gift Set",
    price: 2799,
    image: "https://images.unsplash.com/photo-1681183183825-cf959ebdc3c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZ1bWUlMjBnaWZ0JTIwc2V0fGVufDB8fDB8fHww", 
    Category: "Beauty",
    description: "Luxury perfume collection featuring refreshing fragrances suitable for parties, office, and daily wear.",
    rating: 4.5,
    stock: "Limited Stock"
  },
  {
    name: "Face Serum",
    price: 999,
    image: "https://images.unsplash.com/photo-1696025522422-aa9a74e4f3d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHNlcnVtfGVufDB8fDB8fHww", 
    Category: "Beauty",
    description: "Hydrating skincare serum helping improve skin texture, natural glow, and overall facial appearance.",
    rating: 4.2,
    stock: "In Stock"
  },
  {
    name: "Digital Camera",
    price: 38999,
    image: "https://images.unsplash.com/photo-1698502453332-03fa2ddceb71?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    Category: "Electronics",
    description: "High resolution digital camera delivering professional photography performance with advanced autofocus capabilities.",
    rating: 4.8,
    stock: "In Stock"
  },
  {
    name: "Electric Guitar",
    price: 15999,
    image: "https://images.unsplash.com/photo-1601956349578-c31521587860?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D", 
    Category: "Music",
    description: "Stylish electric guitar delivering rich sound quality, comfortable grip, and professional stage performance.",
    rating: 4.7,
    stock: "In Stock"
  },
  {
    name: "Piano Keyboard",
    price: 11999,
    image: "https://images.unsplash.com/photo-1632008341003-5c6767c7d237?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGlhbm8lMjBrZXl3b3JkfGVufDB8fDB8fHww", 
    Category: "Music",
    description: "Portable piano keyboard featuring multiple sound modes, recording options, and beginner friendly learning tools.",
    rating: 4.5,
    stock: "In Stock"
  },
  {
    name: "Kids Toy Car",
    price: 1499,
    image: "https://images.unsplash.com/photo-1632744120635-30e0e94a24ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjB0b3lzJTIwY2FyfGVufDB8fDB8fHww", 
    Category: "toy",
    description: "Battery operated toy car featuring realistic design, colorful lights, and entertaining driving experience for kids.",
    rating: 4.4,
    stock: "In Stock"
  },
  {
    name: "Teddy Wear",
    price: 1999,
    image: "https://images.unsplash.com/photo-1641085809270-71f722611ce1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVkZHklMjB3ZWFyfGVufDB8fDB8fHww", 
    Category: "toy",
    description: "Soft and adorable teddy bear made with premium fabric, perfect for gifting and cozy decoration.",
    rating: 4.4,
    stock: "In Stock"
  },
  {
  name: "Floral Printed Kurti",
  price: 1499,
  image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmFsJTIwcGluayUyMHByaW50ZWQlMjBrdXJ0aXxlbnwwfHwwfHx8MA%3D%3D",
  Category: "Women's Clothing",
  description: "Beautiful floral printed kurti designed with soft fabric for stylish and comfortable daily wear.",
  rating: 4.5,
  stock:  "In Stock"
},
{
  name: "Silk Saree",
  price: 3499,
  image: "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsayUyMHNhcmVlfGVufDB8fDB8fHww",
  Category: "Women's Clothing",
  description: "Elegant silk saree featuring traditional patterns, premium texture, and graceful festive appearance.",
  rating: 4.7,
  stock: "In Stock"
},
{
  name: "Western dress",
  price: 2999,
  image: "https://images.unsplash.com/photo-1720535904992-390c05de3a08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlc3Rlcm4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  Category: "Women's Clothing",
  description: "Trendy palazzo set offering breathable comfort, modern design, and perfect casual styling experience.",
  rating: 4.4,
  stock: "Limited Stock"
},
{
  name: "Women's Hoodie",
  price: 1899,
  image: "https://plus.unsplash.com/premium_photo-1690341214258-18cb88438805?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW5zJTIwaG9vZGllfGVufDB8fDB8fHww",
  Category: "Women's Clothing",
  description: "Warm and stylish hoodie crafted with soft material for comfortable winter everyday fashion wear.",
  rating: 4.3,
  stock: "In Stock"
},
{
  name: "Anarkali Dress",
  price: 4999,
  image: "https://images.unsplash.com/photo-1610202305255-746aa5b971c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuYXJrYWxpJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D",
  Category: "Women's Clothing",
  description: "Graceful Anarkali dress designed with elegant embroidery and flowing fabric for festive occasions.",
  rating: 4.6,
  stock: "Limited Stock"
},

{
  name: "Men's Formal Blazer",
  price: 4999,
  image: "https://media.istockphoto.com/id/840428090/photo/smiling-businessman-with-hands-clasped.jpg?s=612x612&w=0&k=20&c=bN1sNgL2_NT9ZxvSo90LdhvHwJM5ZWeDbr6VDuHbvuk=",
  Category: "Men's Clothing",
  description: "Premium formal blazer featuring modern fitting, elegant stitching, and sophisticated office party appearance.",
  rating: 4.7,
  stock: "In Stock"
},
{
  name: "Men's Polo T-Shirt",
  price: 1199,
  image: "https://images.unsplash.com/photo-1720514496268-44bb31c03815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMHBvbG8lMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D",
  Category: "Men's Clothing",
  description: "Comfortable polo t-shirt made with breathable cotton fabric for stylish everyday casual dressing.",
  rating: 4.4,
  stock: "In Stock"
},
{
  name: "Men's Cargo Pants",
  price: 1999,
  image: "https://plus.unsplash.com/premium_photo-1690366911138-bd50985e0379?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGNhcmdvJTIwcGFudHN8ZW58MHx8MHx8fDA%3D",
  Category: "Men's Clothing",
  description: "Durable cargo pants designed with multiple pockets and relaxed fit for daily outdoor activities.",
  rating: 4.5,
  stock: "Limited Stock"
},

{
  name: "Decorative Table Lamp",
  price: 1599,
  image: "https://images.unsplash.com/photo-1766802033695-62b271ea9499?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3JhdGl2ZSUyMHRhYmxlJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D",
  Category: "Home Decor",
  description: "Modern decorative lamp providing warm lighting and enhancing room aesthetics with elegant stylish design.",
  rating: 4.3,
  stock: "Limited Stock"
},
{
  name: "Artificial Flower Vase",
  price: 999,
  image: "https://images.unsplash.com/photo-1767324672799-1b90f5e4e447?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydGlmaWNpYWwlMjBmbG93ZXIlMjB2YXNlfGVufDB8fDB8fHww",
  Category: "Home Decor",
  description: "Beautiful flower vase arrangement adding refreshing decorative charm to home and office interiors.",
  rating: 4.2,
  stock: "Limited Stock"
},

{
  name: "Smart Watch",
  price: 3999,
  image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
  Category: "Wearables",
  description: "Advanced smartwatch featuring fitness tracking, calling support, and long lasting battery performance capabilities.",
  rating: 4.6,
  stock: "Out of Stock"
},
{
  name: "Premium Formal Watch",
  price: 9999,
  image: "https://images.unsplash.com/photo-1618215649872-6e3143a716ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9ybWFsJTIwd3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  Category: "Wearables",
  description: "Lightweight fitness band designed to monitor activities, sleep tracking, and heart rate accurately.",
  rating: 4.4,
  stock: "Out of Stock"
},

{
  name: "Basketball",
  price: 1299,
  image: "https://plus.unsplash.com/premium_photo-1668767725891-58f5cd788105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
  Category: "Sports",
  description: "Professional quality basketball designed for outdoor courts with durable grip and balanced bounce performance.",
  rating: 4.5,
  stock: "Out of Stock"
},
{
  name: "Badminton Racket Set",
  price: 2499,
  image: "https://images.unsplash.com/photo-1716155249759-b5f068f74e63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFkbWludG9uJTIwcm9ja2V0JTIwc2V0fGVufDB8fDB8fHww",
  Category: "Sports",
  description: "Lightweight badminton racket set offering strong grip, durable frame, and excellent gameplay control experience.",
  rating: 4.6,
  stock: "Limited Stock"
},

{
  name: "Stylish Handbag",
  price: 2499,
  image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R5bGluZyUyMGhhbmRiYWd8ZW58MHx8MHx8fDA%3D",
  Category: "Fashion",
  description: "Elegant handbag designed with spacious compartments and modern styling for fashionable everyday usage.",
  rating: 4.5,
  stock: "Limited Stock"
},
{
  name: "Fashion Sneakers",
  price: 3299,
  image: "https://images.unsplash.com/photo-1641997465126-c73cc4070337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMHNuZWFrZXJzfGVufDB8fDB8fHww",
  Category: "Fashion",
  description: "Trendy sneakers featuring cushioned comfort, durable sole, and stylish streetwear inspired fashionable appearance.",
  rating: 4.6,
  stock: "Out of Stock"
},
{
  name: "Designer Sunglasses",
  price: 1799,
  image: "https://images.unsplash.com/photo-1614521911699-02551834e687?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2lnbmVyJTIwc3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
  Category: "Fashion",
  description: "Premium designer sunglasses offering UV protection, lightweight comfort, and attractive modern fashionable design.",
  rating: 4.4,
  stock: "Limited Stock"
}
  
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const searchInput = document.querySelector(".search-input");
const filterButtons = document.querySelectorAll(".filter-button");
const sortSelect = document.getElementById("sort-select");
const toast = document.createElement("div");
const modalOverlay  = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalRating = document.getElementById("modal-rating");
const modalStock = document.getElementById("modal-stock");
const modalDescription = document.getElementById("modal-description");
const modalCartButton = document.getElementById("modal-cart-button");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedCategory = "all";
let toastTimeout;
let activeModalProduct = null;

toast.className = "toast";
toast.textContent = "Product added to cart";
document.body.appendChild(toast);

function normalizeCart(){
    cart = cart.map(function(item){
        if(!item.quantity) {
            item.quantity = 1;
        }
        return item;
   });
}
function getCartItemCount(){
    let count = 0;
    cart.forEach(function(item){
        count+= item.quantity;
    });
    return count;
}

function updateCartCount() {
  cartCount.textContent = getCartItemCount();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getPriceValue(price) {
    return Number(price);
}
function getStockClass(stockText){
    if(stockText=== "In Stock") {
        return "in-stock";
    }
    if(stockText=== "Limited Stock") {
        return "limited-stock";
    }
    return "out-of-stock";
}

function createRatingElement(rating) {
    const ratingBox = document.createElement("div");
    ratingBox.className = "rating-box";

    for(let i=1; i<=5; i+=1){
        const star = document.createElement("span");
        star.className = "star";
       star.textContent = "\u2605";

        if(rating>=1) {
            star.classList.add("full");
        } else if (rating >=i - 0.5) {
            star.classList.add("half");
        } else {
            star.classList.add("empty");
        }
        ratingBox.appendChild(star);
    }

    const ratingText = document.createElement("span");
    ratingText.className = "rating-text";
    ratingText.textContent = rating.toFixed(1);
    ratingBox.appendChild(ratingText);

    return ratingBox;
}

function createStockElement(stockText) {
    const stockLabel = document.createElement("span");
    stockLabel.className = "stock-label" + getStockClass(stockText);
    stockLabel.textContent = stockText;
    return stockLabel;
}

function addProductToCart(product){
    const existingProduct = cart.find(function(item){
        return item.name === product.name;
    });
    if(existingProduct) {
        existingProduct.quantity +=1;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    saveCart();
    updateCartCount();
    showToast();
}

function showToast(){
    clearTimeout(toastTimeout);
    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");

    toastTimeout = setTimeout(function(){
        toast.classList.remove("show");
    },2500);
}
function openModal(product){
    activeModalProduct = product;
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    modalRating.innerHTML = "";
    modalRating.appendChild(createRatingElement(product.rating));
    modalStock.className = "modal-stock class-label" + getStockClass(product.stock);
    modalStock.textContent = product.stock;
    modalDescription.textContent = product.description;
    modalOverlay.classList.add("show");
}
function closeModal(){
    modalOverlay.classList.remove("show");
    activeModalProduct = null;
}

function renderProducts(items) {
  productList.innerHTML = "";

  if(items.length===0) {
    productList.innerHTML = '<p class ="empty-cart">No products found.</p>';
    return;
  }

  items.forEach(function (product) {
    const productIndex = products.indexOf(product);

    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.setAttribute("tabindex","0");

    productCard.addEventListener("click",function(){
        openModal(product);
    });

    const productImage = document.createElement("img");
    productImage.className = "product-image";
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h3");
    productName.className = "product-name";
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.textContent = product.price;

    const productRating = createRatingElement(product.rating);
    const productStock = createStockElement(product.stock);
    const cartButton = document.createElement("button");
    cartButton.className = "cart-button";
    cartButton.textContent = "Add to Cart";
    cartButton.setAttribute("type", "button");
    cartButton.setAttribute("data-index", productIndex);

    cartButton.addEventListener("click", function (event) {
        event.stopPropagation();
      const selectedProduct = products[productIndex];
        
    addProductToCart(selectedProduct);
    });

    // productCard.appendChild(favoriteButton);
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productRating);
    productCard.appendChild(productStock);
    productCard.appendChild(cartButton);

    productList.appendChild(productCard);
  });
}

function updateFilterButtons() {
    filterButtons.forEach(function(button){
        if(button.getAttribute("data-category").toLowerCase()===selectedCategory) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}
function updateProductsView (){
  const searchText = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(function (product) {
    const matchesSearch = product.name.toLowerCase().includes(searchText);
    const matchesCategory = 
    selectedCategory === "all" || 
    product.Category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

 const sortedProducts = filteredProducts.slice();

 if(sortSelect.value=== "price-low-high"){
    sortedProducts.sort(function(a,b){
        return getPriceValue(a.price) - getPriceValue(b.price);
    });
 } else if (sortSelect.value==="price-high-low") {
    sortedProducts.sort(function(a,b){
        return getPriceValue(b.price) - getPriceValue(a.price);
    });
 }else if (sortSelect.value==="name-a-z"){
    sortedProducts.sort(function(a,b){
        return a.name.localeCompare(b.name);
    });
    
}else if (sortSelect.value==="name-z-a"){
    sortedProducts.sort(function(a,b){
        return b.name.localeCompare(a.name);
    });
 }
 renderProducts(sortedProducts);
}
 function handleCategoryFilter() {
    filterButtons.forEach(function(button){
        button.addEventListener("click",function(){
            selectedCategory = button.getAttribute("data-category").toLowerCase();
            updateFilterButtons();
            updateProductsView();
        });
    });
 }

modalClose.addEventListener("click",closeModal);
modalOverlay.addEventListener("click",function (event){
    if(event.target === modalOverlay){
        closeModal();
    }
});

modalCartButton.addEventListener("click",function(){
    if(activeModalProduct){
        addProductToCart(activeModalProduct);
    }
});

normalizeCart();
saveCart();

updateCartCount();
updateFilterButtons();
updateProductsView();
handleCategoryFilter();
searchInput.addEventListener("input", updateProductsView);
sortSelect.addEventListener("change",updateProductsView);
