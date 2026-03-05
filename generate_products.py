import os
import random

folder = "public/products_bulk"
files = [f for f in os.listdir(folder) if f.endswith('.png')]

categories = ["Tops", "Bottoms", "Outerwear", "Accessories"]
adj = ["Essential", "Classic", "Oversized", "Vintage", "Heavyweight", "Tactical", "Studio"]
items = ["Hoodie", "Sweatpant", "T-Shirt", "Jacket", "Backpack", "Cap", "Beanie", "Sweatshirt"]

js_content = "export const allProducts = [\n"

for i, f in enumerate(files):
    cat = random.choice(categories)
    name = f"{random.choice(adj)} {random.choice(items)}".upper()
    price = random.choice([45.00, 65.00, 85.00, 120.00, 150.00, 250.00])
    
    js_content += f'  {{ id: "{f.split(".")[0]}", name: "{name}", price: "${price:.2f}", category: "{cat}", image: "/products_bulk/{f}" }},\n'

js_content += "];\n"

with open("src/data/products.ts", "w") as f:
    f.write(js_content)
