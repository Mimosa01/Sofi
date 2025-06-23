# Sofi — вакансии и стажировки для разработчиков

Веб-приложение на Next.js 15 для размещения вакансий, прохождения интервью и карьерного роста.

## 🚀 Быстрый старт

```bash
git clone https://github.com/Mimosa01/Sofi.git
cd Sofi
npm install
npm run dev
````

Создай `.env.local`:

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_ADS_URL=ссылка на рекламу

NEXT_PUBLIC_API_LIMIT=
```

## 🧱 Технологии

* **Next.js 15 (App Router)**
* **React Server/Client Components**
* **Zod + React Hook Form** — валидация форм
* **Middleware** — защита маршрутов
* **Dynamic Imports** — оптимизация JS
* **Atomic Design** — структура UI

## 📁 Структура

* `app/` — страницы и маршруты
* `components/` — UI-компоненты
* `hooks/` — кастомные хуки
* `lib/` — утилиты, схемы, типы
* `shared/` — стили, иконки

## 📦 Команды

```bash
npm run dev       # запуск разработки
npm run build     # production-сборка
npm run lint      # проверка ESLint
```

## 🛡 Доступность

Компоненты снабжены `role`, `aria-*`, `aria-label`, `alt` — без ошибок в Pagespeed.

## 📝 Лицензия

MIT © [Mimosa01](https://github.com/Mimosa01)