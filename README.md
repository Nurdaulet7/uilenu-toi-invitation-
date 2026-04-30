# Wedding Invitation New

Новый сайт-приглашение на Vite, React, TypeScript и SCSS Modules.

## Команды

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Архитектура

Проект разложен по FSD-слоям:

- `src/app` — инициализация приложения, глобальные стили, провайдеры.
- `src/pages` — страницы и их композиция.
- `src/widgets` — крупные секции страницы.
- `src/features` — интерактивные пользовательские сценарии.
- `src/entities` — бизнес-сущности и типы.
- `src/shared` — общие UI-компоненты, конфиги, ассеты и утилиты.

## Алиасы

Настроены алиасы:

- `@app`
- `@pages`
- `@widgets`
- `@features`
- `@entities`
- `@shared`

SVG можно импортировать как React-компоненты через `?react`:

```tsx
import FlowerIcon from '@shared/assets/icons/flower.svg?react';
```
