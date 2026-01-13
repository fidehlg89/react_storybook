# React Storybook Component Library

A comprehensive collection of React components, documented and showcased using the latest **Storybook 10**. This project has been modernized to use **CSF3 (Component Story Format 3)** for all stories, ensuring better performance and a more concise developer experience.

## 🚀 Recent Updates

- **Upgraded to Storybook 10.1.11**: Leverages the latest features and performance improvements.
- **CSF3 Migration**: All 19 story files have been converted from legacy CSF2 to the modern object-based CSF3 format.
- **Dependency Optimization**: Resolved Webpack 5 and PostCSS compilation errors.
- **Babel & PostCSS Fixes**: Integrated missing plugins like `@babel/plugin-proposal-private-property-in-object` and `postcss-normalize` for a stable build environment.

## 🛠️ Tech Stack

- **Core**: [React 18](https://reactjs.org/)
- **Documentation**: [Storybook 10](https://storybook.js.org/)
- **Styling**: [Styled Components](https://styled-components.com/), [Bootstrap 5](https://getbootstrap.com/), [Reactstrap](https://reactstrap.github.io/)
- **Editors**: [Slate.js](https://docs.slatejs.org/)

## 🏁 Getting Started

### Installation

```bash
yarn install
```

### Run Storybook (Development Mode)

```bash
yarn dev
```
*Note: Storybook typically runs on [http://localhost:6006](http://localhost:6006).*

### Build Storybook (Production)

```bash
yarn build-storybook
```

### Run React App

```bash
yarn start
```

## 📦 Components Included

| Component | Description |
| :--- | :--- |
| **Accordion** | Collapsible content panels. |
| **Button** | Highly customizable interactive buttons. |
| **Carousel** | Dynamic image/content slides. |
| **Clock** | Real-time digital clock display. |
| **EmailLink** | Secure and styled mailto links. |
| **FormValidation** | Input forms with real-time validation logic. |
| **Hello** | Classic "HelloWorld" greeting component. |
| **Helmet** | SEO and document head management. |
| **Hook Examples** | Demonstrations of React Hooks (e.g., `useEffect`). |
| **InputLabel** | Reusable form input labels. |
| **MarkdownEditor** | Rich text editing with Markdown support. |
| **Memorize** | Performance-optimized list rendering. |
| **ScrollEffects** | Intersection Observer based scroll animations. |
| **Sidebar** | Responsive navigation sidebar. |
| **Stack** | Layout utility for arranging child elements. |
| **StateEditor** | Advanced Slate.js rich text editor. |
| **TicTacToe** | Interactive game implementation. |
| **Timer** | Precise countdown/up timer. |
| **TodoApp** | Full-featured task management app. |

## 📝 License

This project is private and for demonstration purposes.
