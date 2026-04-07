# 🛒 DigiTools — Premium Digital Tools Store

> **Explore, Add & Checkout** — A clean and responsive digital tools store built with React, featuring a live cart, instant notifications, and smooth tab navigation.

🚀 [Visit the Live App](https://digi-tool.netlify.app/)

---

## 📖 Overview

**DigiTools** is a React-based e-commerce UI where users can browse premium digital tools, add them to a cart, and simulate a checkout experience. Built to practise real-world UI patterns, efficient state management, and polished user feedback — all without a backend.

---

## 🖼️ Screenshot

> <img width="1489" height="971" alt="image" src="https://github.com/user-attachments/assets/a38c6624-2013-4240-add6-039e095d6e7e" />
> <img width="1013" height="980" alt="image" src="https://github.com/user-attachments/assets/9febe58d-9232-487a-a046-3904c5141f65" />
> <img width="984" height="838" alt="image" src="https://github.com/user-attachments/assets/0c0c7712-d275-4caf-a77b-b567063ef7c1" />




---

## 🚀 Features

- 🛒 **Add to Cart** — add tools instantly with toast notifications; duplicate items are automatically prevented
- 🔄 **Tab Navigation** — switch seamlessly between the Products listing and Cart view
- 💰 **Dynamic Total Calculation** — cart total is computed in real time using `reduce()`
- ✅ **Checkout Simulation** — users can complete a simulated checkout with a success message
- 🔔 **Toast Notifications** — instant feedback for every cart interaction via React-Toastify
- 📦 **Local Data Source** — product data loaded from a local `tools.json` file, no backend required

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI components and state management |
| Tailwind CSS | Utility-first styling |
| DaisyUI | Pre-built UI components |
| JavaScript (ES6+) | App logic |
| React-Toastify | Toast notifications |
| JSON | Local product data source |

---

## 📦 Dependencies

```json
{
  "react": "latest",
  "react-dom": "latest",
  "tailwindcss": "latest",
  "daisyui": "latest",
  "react-toastify": "latest"
}
```

---

## 🏃 Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/digitools.git
   cd digitools
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in your browser**
   ```
   http://localhost:5173
   ```

---

## ⚙️ How It Works

- Product data is loaded from a local `tools.json` file
- State is managed using React's `useState` hook
- Cart updates instantly when items are added or removed
- Total price is calculated dynamically with `Array.reduce()`
- Notifications are handled using **React-Toastify**

---

## 🎮 How to Use

| Action | Result |
|---|---|
| Browse the Products tab | View all available digital tools |
| Click **Add to Cart** | Adds item to cart with a toast notification |
| Add a duplicate item | Shows a warning — no duplicates allowed |
| Switch to Cart tab | View all added items and the total price |
| Click **Checkout** | Simulates a successful purchase with a confirmation message |

---

## 📁 Project Structure

```
digitools/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/
│   │   └── tools.json    # Local product data
│   ├── App.jsx           # Root component & state management
│   └── main.jsx          # Entry point
├── index.html
├── tailwind.config.js
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for bug fixes, new features, or design improvements.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> 💡 *The best tools deserve the best store experience!*
